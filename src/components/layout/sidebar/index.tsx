import { style } from "./style";
import { FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
    const location = useLocation().pathname;
    const isActive = (path: string): boolean => location === path;
    const linkClass = (path:string): string => `block text-lg rounded-xl w-full h-fit px-4 py-1.5 font-layout text-start text-main-black dark:text-main-white ${isActive(path)&& 'bg-light-yellow/35 dark:bg-light-yellow/15'}`;

    return (
        <aside className={style.sidebar}>
            <h1 className={style.title}> <FileText className="size-8" /> DocForge</h1>
            <nav className={style.nav}>
                <Link to='/home' className={linkClass('/home')}>Início</Link>
                <Link to='/pages' className={linkClass('/pages')}>Páginas</Link>
                <Link to='/patterns' className={linkClass('/patterns')}>Padrões</Link>
                <Link to='/assets' className={linkClass('/assets')}>Recursos</Link>
                <Link to='/output' className={linkClass('/output')}>Saída</Link>
                <Link to='/config' className={linkClass('/config')}>Config</Link>
            </nav>
        </aside>
    )
}