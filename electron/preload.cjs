// ============================================================
// PRELOAD — a "ponte" entre a interface React e o processo principal.
// Só o que for exposto aqui aparece em window.docforge no React.
// Precisa ser .cjs (CommonJS), mesmo com "type": "module" no package.json.
// ============================================================
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('docforge', {
    selectFolder: () => ipcRenderer.invoke('folder:select'),
    getSavedFolder: () => ipcRenderer.invoke('folder:getSaved'),

    listDir: relativePath => ipcRenderer.invoke('fs:list', relativePath),
    readFile: relativePath => ipcRenderer.invoke('fs:read', relativePath),
    writeFile: (relativePath, content) => ipcRenderer.invoke('fs:write', relativePath, content),

    maximizeScreen: () => ipcRenderer.invoke('screen:maximize'),

    // Retorna uma função para cancelar a inscrição
    onFolderChange: callback => {
        const listener = (_event, data) => callback(data);
        ipcRenderer.on('folder:changed', listener);
        return () => ipcRenderer.removeListener('folder:changed', listener);
    },
});