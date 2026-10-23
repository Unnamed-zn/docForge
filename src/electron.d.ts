// Tipos da ponte definida em electron/preload.cjs
export type DirEntry = { name: string; isDirectory: boolean };

export type FolderChange = {
    event: 'add' | 'change' | 'unlink' | 'addDir' | 'unlinkDir';
    path: string;
};

export interface DocForgeApi {
    selectFolder(): Promise<string | null>;
    getSavedFolder(): Promise<string | null>;

    listDir(relativePath?: string): Promise<DirEntry[]>;
    readFile(relativePath: string): Promise<string>;
    writeFile(relativePath: string, content: string): Promise<void>;

    maximizeScreen(): Promise<void>;
    
    onFolderChange(callback: (change: FolderChange) => void): () => void;
}

declare global {
    interface Window {
        docforge?: DocForgeApi;
    }
}
