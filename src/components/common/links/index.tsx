import { Link, useLocation } from "react-router-dom";

type props = {
    path: string;
    linkText: string;
};

export function SidebarLink({path, linkText}: props) {
    const isActive = (useLocation().pathname === path);

    return (
        <Link to={path} className={`rounded-xl w-full h-fit px-4 py-1.5 font-layout text-start text-main-dark dark:text-main-white ${isActive? 'bg-orange-500/15 dark:bg-orange-200/30' : ''}`}>
            {linkText}
        </Link>
    );
}