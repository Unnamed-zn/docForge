// ============================================================
// PROCESSO PRINCIPAL (main) — roda em Node.js, com acesso total
// ao sistema (arquivos, janelas, diálogos). A interface React
// NÃO tem esse acesso: ela pede as coisas via IPC (ver preload.cjs).
// ============================================================
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('node:path');
const fs = require('node:fs/promises');

// Só definida pelo script "electron:dev". Se existir, carregamos o servidor do Vite
// (com hot reload); se não, carregamos o site já compilado em dist/.
const DEV_URL = process.env.ELECTRON_DEV_URL;

let mainWindow = null;
let projectRoot = null; // pasta de projeto atualmente aberta
let watcher = null;

// ---------- Persistência (substitui o IndexedDB) ----------
// Guardamos o caminho da pasta num JSON dentro da pasta de dados do app.
const configPath = () => path.join(app.getPath('userData'), 'config.json');

async function loadConfig() {
    try {
        return JSON.parse(await fs.readFile(configPath(), 'utf-8'));
    } catch {
        return {};
    }
}

async function saveConfig(config) {
    await fs.writeFile(configPath(), JSON.stringify(config, null, 2), 'utf-8');
}

// ---------- Segurança ----------
// A interface manda caminhos RELATIVOS à pasta do projeto. Aqui resolvemos para
// o caminho real e garantimos que ninguém escapa da pasta com "../".
function safePath(relative = '') {
    if (!projectRoot) throw new Error('Nenhuma pasta de projeto selecionada.');
    const full = path.resolve(projectRoot, relative);
    const rel = path.relative(projectRoot, full);
    if (rel.startsWith('..') || path.isAbsolute(rel)) {
        throw new Error('Caminho fora da pasta do projeto.');
    }
    return full;
}

// ---------- Observador de mudanças (chokidar) ----------
async function stopWatching() {
    if (watcher) {
        await watcher.close();
        watcher = null;
    }
}

async function startWatching() {
    await stopWatching();
    if (!projectRoot) return;

    // import() dinâmico funciona com chokidar tanto em versão CJS quanto ESM
    const { watch } = await import('chokidar');

    watcher = watch(projectRoot, { ignoreInitial: true });

    watcher.on('all', (event, changedPath) => {
        if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('folder:changed', {
                event, path: path.relative(projectRoot, changedPath),
            });
        }
    });
}

async function setProjectRoot(folder) {
    projectRoot = folder;
    await saveConfig({ ...(await loadConfig()), projectFolder: folder });
    await startWatching();
}

// ---------- Handlers IPC (o que a interface pode pedir) ----------
function registerIpc() {
    // Abre o seletor de pasta NATIVO do sistema
    ipcMain.handle('folder:select', async () => {
        const result = await dialog.showOpenDialog(mainWindow, {
            title: 'Selecione a pasta do projeto',
            properties: ['openDirectory', 'createDirectory'],
        });
        if (result.canceled || result.filePaths.length === 0) return null;

        await setProjectRoot(result.filePaths[0]);
        return projectRoot;
    });

    // Reabre a última pasta usada (sem precisar de permissão nem clique)
    ipcMain.handle('folder:getSaved', async () => {
        const { projectFolder } = await loadConfig();
        if (!projectFolder) return null;

        try {
            const stat = await fs.stat(projectFolder);
            if (!stat.isDirectory()) return null;
        } catch {
            return null; // pasta foi apagada/movida
        }

        projectRoot = projectFolder;
        await startWatching();
        return projectRoot;
    });

    ipcMain.handle('fs:list', async (_event, relative = '') => {
        const entries = await fs.readdir(safePath(relative), { withFileTypes: true });
        return entries.map(e => ({ name: e.name, isDirectory: e.isDirectory() }));
    });

    ipcMain.handle('fs:read', async (_event, relative) => {
        return fs.readFile(safePath(relative), 'utf-8');
    });

    ipcMain.handle('fs:write', async (_event, relative, content) => {
        const full = safePath(relative);
        await fs.mkdir(path.dirname(full), { recursive: true });
        await fs.writeFile(full, content, 'utf-8');
    });

    ipcMain.handle('screen:maximize', () => mainWindow?.maximize());
}

// ---------- Janela ----------
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, '..', DEV_URL ? 'public' : 'dist', 'docForgeTransparentSymbol.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs'),
            contextIsolation: true, // a página não enxerga o Node
            nodeIntegration: false,
            sandbox: true,
        },
    });

    if (DEV_URL) {
        mainWindow.loadURL(DEV_URL);
    } else {
        mainWindow.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    registerIpc();
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', async () => {
    await stopWatching();
    if (process.platform !== 'darwin') app.quit();
});
