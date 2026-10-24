import { FolderSelectorPage } from '@/components/layout/folderSelector';
import { SelectFolderButton } from '@/components/common/buttons';
import { SidebarLink } from '@/components/common/links';
import { Sidebar } from '@/components/layout/sidebar';


export function Home() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <SidebarLink path="/home" linkText='Início' />
                <SidebarLink path="/pages" linkText='Páginas' />
                <SidebarLink path="/theme" linkText='Temas' />
                <SidebarLink path="/assets" linkText='Recursos' />
                <SidebarLink path="/output" linkText='Saída' />
                <SidebarLink path="/config" linkText='Configurações' />
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
                <SidebarLink path="/home" linkText='Início' />
                <SidebarLink path="/pages" linkText='Páginas' />
                <SidebarLink path="/theme" linkText='Temas' />
                <SidebarLink path="/assets" linkText='Recursos' />
                <SidebarLink path="/output" linkText='Saída' />
                <SidebarLink path="/config" linkText='Configurações' />
            </Sidebar>
        </body>
    );
}

export function Theme() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <SidebarLink path="/home" linkText='Início' />
                <SidebarLink path="/pages" linkText='Páginas' />
                <SidebarLink path="/theme" linkText='Temas' />
                <SidebarLink path="/assets" linkText='Recursos' />
                <SidebarLink path="/output" linkText='Saída' />
                <SidebarLink path="/config" linkText='Configurações' />
            </Sidebar>
        </body>
    );
}

export function Assets() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <SidebarLink path="/home" linkText='Início' />
                <SidebarLink path="/pages" linkText='Páginas' />
                <SidebarLink path="/theme" linkText='Temas' />
                <SidebarLink path="/assets" linkText='Recursos' />
                <SidebarLink path="/output" linkText='Saída' />
                <SidebarLink path="/config" linkText='Configurações' />
            </Sidebar>
        </body>
    );
}

export function Output() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <SidebarLink path="/home" linkText='Início' />
                <SidebarLink path="/pages" linkText='Páginas' />
                <SidebarLink path="/theme" linkText='Temas' />
                <SidebarLink path="/assets" linkText='Recursos' />
                <SidebarLink path="/output" linkText='Saída' />
                <SidebarLink path="/config" linkText='Configurações' />
            </Sidebar>
        </body>
    );
}

export function Config() {
    return (
        <body className='w-screen h-screen bg-main-white dark:bg-main-dark'>
            <Sidebar>
                <SidebarLink path="/home" linkText='Início' />
                <SidebarLink path="/pages" linkText='Páginas' />
                <SidebarLink path="/theme" linkText='Temas' />
                <SidebarLink path="/assets" linkText='Recursos' />
                <SidebarLink path="/output" linkText='Saída' />
                <SidebarLink path="/config" linkText='Configurações' />
            </Sidebar>
        </body>
    );
}