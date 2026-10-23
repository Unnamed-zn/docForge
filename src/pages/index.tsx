import { FolderSelectorPage } from '@/components/layout/folderSelector';
import { SelectFolderButton, NavigateButton } from '@/components/common/buttons';
import { Sidebar } from '@/components/layout/sidebar';


export function Home() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <NavigateButton path="/home" buttonName='Início' />
                <NavigateButton path="/pages" buttonName='Páginas' />
                <NavigateButton path="/theme" buttonName='Temas' />
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
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <NavigateButton path="/home" buttonName='Início' />
                <NavigateButton path="/pages" buttonName='Páginas' />
                <NavigateButton path="/theme" buttonName='Temas' />
                <NavigateButton path="/assets" buttonName='Recursos' />
                <NavigateButton path="/output" buttonName='Saída' />
                <NavigateButton path="/config" buttonName='Configurações' />
            </Sidebar>
        </body>
    );
}

export function Theme() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <NavigateButton path="/home" buttonName='Início' />
                <NavigateButton path="/pages" buttonName='Páginas' />
                <NavigateButton path="/theme" buttonName='Temas' />
                <NavigateButton path="/assets" buttonName='Recursos' />
                <NavigateButton path="/output" buttonName='Saída' />
                <NavigateButton path="/config" buttonName='Configurações' />
            </Sidebar>
        </body>
    );
}

export function Assets() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <NavigateButton path="/home" buttonName='Início' />
                <NavigateButton path="/pages" buttonName='Páginas' />
                <NavigateButton path="/theme" buttonName='Temas' />
                <NavigateButton path="/assets" buttonName='Recursos' />
                <NavigateButton path="/output" buttonName='Saída' />
                <NavigateButton path="/config" buttonName='Configurações' />
            </Sidebar>
        </body>
    );
}

export function Output() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <NavigateButton path="/home" buttonName='Início' />
                <NavigateButton path="/pages" buttonName='Páginas' />
                <NavigateButton path="/theme" buttonName='Temas' />
                <NavigateButton path="/assets" buttonName='Recursos' />
                <NavigateButton path="/output" buttonName='Saída' />
                <NavigateButton path="/config" buttonName='Configurações' />
            </Sidebar>
        </body>
    );
}

export function Config() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <NavigateButton path="/home" buttonName='Início' />
                <NavigateButton path="/pages" buttonName='Páginas' />
                <NavigateButton path="/theme" buttonName='Temas' />
                <NavigateButton path="/assets" buttonName='Recursos' />
                <NavigateButton path="/output" buttonName='Saída' />
                <NavigateButton path="/config" buttonName='Configurações' />
            </Sidebar>
        </body>
    );
}