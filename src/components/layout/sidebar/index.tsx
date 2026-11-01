import { style } from "./style";
import { FileText } from "lucide-react";
import { SidebarLink } from "@/components/common/links/sidebarLink";

export function Sidebar() {

    return (
        <aside className={style.sidebar}>
            <h1 className={style.title}> <FileText className="size-8" /> DocForge</h1>
            <nav className={style.nav}>
                <SidebarLink path={'/home'} linkText="Início" />
                <SidebarLink path={'/pages'} linkText="Páginas" />
                <SidebarLink path={'/patterns'} linkText="Padrões" />
                <SidebarLink path={'/assets'} linkText="Recursos" />
                <SidebarLink path={'/output'} linkText="Saída" />
                <SidebarLink path={'/config'} linkText="Config" />
            </nav>
        </aside>
    )
}