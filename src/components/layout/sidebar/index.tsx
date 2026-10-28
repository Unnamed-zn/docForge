import { FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
    const location = useLocation().pathname;
    const isActive = (path: string): boolean => location === path;

    return (
        <aside className="col-auto relative w-full h-full flex flex-col gap-5 p-4">
            <h1 className="block flex flex-row items-center gap-2 text-main-white text-3xl font-primary"> <FileText className="size-8" /> DocForge</h1>
            <nav className=" flex flex-col gap-3 w-full h-full">
                <Link to='/home' className={`block text-lg rounded-xl w-full h-fit px-4 py-1.5 font-layout text-start text-main-black dark:text-main-white ${isActive('/home') && 'bg-light-yellow/45 dark:bg-light-yellow/30'}`}>Início</Link>
                <Link to='/theme' className={`block text-lg rounded-xl w-full h-fit px-4 py-1.5 font-layout text-start text-main-black dark:text-main-white ${isActive('/theme') && 'bg-light-yellow/45 dark:bg-light-yellow/30'}`}>Temas</Link>
                <Link to='/assets' className={`block text-lg rounded-xl w-full h-fit px-4 py-1.5 font-layout text-start text-main-black dark:text-main-white ${isActive('/assets') && 'bg-light-yellow/45 dark:bg-light-yellow/30'}`}>Recursos</Link>
            </nav>
        </aside>
    )
}