import { Link, useLocation } from "react-router-dom";

type props = {
    path: string;
    linkText: string;
};

export function SidebarLink({path, linkText}: props) {
    const isActive = (useLocation().pathname === path);

    return (
        <Link to={path} className={`rounded-xl w-full h-fit px-4 py-1.5 font-layout text-start text-mist-900 dark:text-slate-200 ${isActive&& 'bg-yellow-200/45 dark:bg-yellow-200/30'}`}>
            {linkText}
        </Link>
    );
}