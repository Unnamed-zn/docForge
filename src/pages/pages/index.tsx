import { SidebarLink } from "@/components/common/links";
import { Body } from "@/components/layout/body";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Sidebar } from "@/components/layout/sidebar";

export function Pages() {
    return (
        <Body
            Header={
                <Header />
            }
            Main={<Main Sidebar=
                {<Sidebar>
                    <SidebarLink path="/home" linkText='Início' />
                    <SidebarLink path="/pages" linkText='Páginas' />
                    <SidebarLink path="/theme" linkText='Temas' />
                    <SidebarLink path="/assets" linkText='Recursos' />
                    <SidebarLink path="/output" linkText='Saída' />
                    <SidebarLink path="/config" linkText='Configurações' />
                </Sidebar>}
            />}
        />
    );
}