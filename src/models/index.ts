declare function saveInIndexedDB(chave: string, valor: FileSystemDirectoryHandle): Promise<void>;
declare function getFromIndexedDB(chave: string): Promise<FileSystemDirectoryHandle | null>;

export async function selectAndLoadFolder(): Promise<FileSystemDirectoryHandle | undefined> {
    try {
        const folderHandle: FileSystemDirectoryHandle = await window.showDirectoryPicker({
            mode: 'readwrite'
        });

        await saveInIndexedDB('projectFolder', folderHandle);

        return folderHandle;
    } catch (error) {
        console.error('Erro na seleção do projeto: ', error);
    }
} 

export async function recoverProjectFolder(): Promise<FileSystemDirectoryHandle | null> {
    const folderHandle = await getFromIndexedDB('projectFolder');
    
    if (!folderHandle) {
        alert('Nenhuma pasta salva anteriormente');
        return null;
    }

    const options: FileSystemHandlePermissionDescriptor = { mode: 'readwrite' };
    let permission = await folderHandle.requestPermission(options);

    if (permission!== 'granted') {
        permission = await folderHandle.requestPermission(options);
    }
    
    if (permission==='granted') {
        return folderHandle;
    } else {
        alert("Acesso negado pelo usuário.");
        return null;
    }
}