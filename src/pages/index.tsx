import { FolderSelectorPage } from '@/components/layout/folderSelector';
import { SelectFolderButton } from '@/components/common/buttons';
import { SidebarLink } from '@/components/common/links';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Body } from '@/components/layout/body';
import { Main } from '@/components/layout/main';








export function Theme() {
    return (
        <Body
            Header={
                <Header />
            }
            Main={
                <Main Sidebar=
                    {<Sidebar>
                        <SidebarLink path="/home" linkText='Início' />
                        <SidebarLink path="/pages" linkText='Páginas' />
                        <SidebarLink path="/theme" linkText='Temas' />
                        <SidebarLink path="/assets" linkText='Recursos' />
                        <SidebarLink path="/output" linkText='Saída' />
                        <SidebarLink path="/config" linkText='Configurações' />
                    </Sidebar>
                    }
                />
            }
        />
    );
}

export function Assets() {
    return (
        <Body
            Header={
                <Header />
            }
            Main={
                <Main Sidebar=
                    {<Sidebar>
                        <SidebarLink path="/home" linkText='Início' />
                        <SidebarLink path="/pages" linkText='Páginas' />
                        <SidebarLink path="/theme" linkText='Temas' />
                        <SidebarLink path="/assets" linkText='Recursos' />
                        <SidebarLink path="/output" linkText='Saída' />
                        <SidebarLink path="/config" linkText='Configurações' />
                    </Sidebar>
                    }
                />
            }
        />
    );
}

export function Output() {
    return (
        <Body
            Header={
                <Header />
            }
            Main={
                <Main Sidebar=
                    {<Sidebar>
                        <SidebarLink path="/home" linkText='Início' />
                        <SidebarLink path="/pages" linkText='Páginas' />
                        <SidebarLink path="/theme" linkText='Temas' />
                        <SidebarLink path="/assets" linkText='Recursos' />
                        <SidebarLink path="/output" linkText='Saída' />
                        <SidebarLink path="/config" linkText='Configurações' />
                    </Sidebar>
                    }
                />
            }
        />
    );
}

export function Config() {
    return (
        <Body
            Header={
                <Header />
            }
            Main={
                <Main Sidebar=
                    {<Sidebar>
                        <SidebarLink path="/home" linkText='Início' />
                        <SidebarLink path="/pages" linkText='Páginas' />
                        <SidebarLink path="/theme" linkText='Temas' />
                        <SidebarLink path="/assets" linkText='Recursos' />
                        <SidebarLink path="/output" linkText='Saída' />
                        <SidebarLink path="/config" linkText='Configurações' />
                    </Sidebar>
                    }
                />
            }
        />
    );
}