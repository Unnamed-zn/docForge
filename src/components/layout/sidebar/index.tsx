import { FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
    const location = useLocation().pathname;
    const isActive = (path: string): boolean => location === path;
    const linkClass = (path:string): string => `block text-lg rounded-xl w-full h-fit px-4 py-1.5 font-layout text-start text-main-black dark:text-main-white ${isActive(path)&& 'bg-light-yellow/35 dark:bg-light-yellow/15'}`;

    return (
        <aside className="relative w-full h-full flex flex-col gap-5 p-4 border-r-1 border-black/10 dark:border-white/10">
            <h1 className="flex flex-row items-center gap-2 pl-3 text-main-black dark:text-main-white text-3xl font-primary font-bold"> <FileText className="size-8" /> DocForge</h1>
            <nav className="flex flex-col gap-3 w-full h-full">
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