import { FolderSelectorPage } from '@/components/layout/folderSelector';
import { SelectFolderButton, NavigateButton } from '@/components/common/buttons';
import { Sidebar } from '@/components/layout/sidebar';


export function Home() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <NavigateButton path="/home" buttonName='Início' />
                <NavigateButton path="/pages" buttonName='Páginas' />
                <NavigateButton path="/themes" buttonName='Temas' />
                <NavigateButton path="/assets" buttonName='Recursos' />
                <NavigateButton path="/output" buttonName='Saída' />
                <NavigateButton path="/config" buttonName='Configurações' />
            </Sidebar>
        </body>
    );
}

export function ProjectFolderSelector() {
    return (
        <FolderSelectorPage>
            <SelectFolderButton/>
        </FolderSelectorPage>
    );
}

export function Pages() {
    return (
        <>
        </>
    );
}

export function Theme() {
    return (
        <>
        </>
    );
}

export function Assets() {
    return (
        <>
        </>
    );
}

export function Output() {
    return (
        <>
        </>
    );
}

export function Config() {
    return (
        <>
        </>
    );
}