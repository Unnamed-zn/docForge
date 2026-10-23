import type { DocForgeApi } from "../electron";

export const isDesktop = typeof window !== 'undefined' && !!window.docforge;

export function api(): DocForgeApi {
    if (!window.docforge) {
        throw new Error('Esta função só funciona no nosso app para desktop.')
    }
    return window.docforge;
}

export async function selectAndLoadFolder(): Promise<string | null> {
    try {
        return await api().selectFolder();
    } catch (error) {
        console.error('Erro na seleção do projeto: ', error);
        return null;
    }
}

export async function recoverProjectFolder(): Promise<string | null> {
    try {
        return await api().getSavedFolder();
    } catch (error) {
        console.error('Erro ao recuperar o diretório do projeto: ', error);
        return null;
    }
}

export async function maximizeScreen() {
    try {
        await api().maximizeScreen();
    } catch (error) {
        console.error('Erro ao maximizar a tela: ',error);
    }
}