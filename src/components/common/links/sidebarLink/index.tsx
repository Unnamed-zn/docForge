import { style } from "./style";
import { Link, useLocation } from "react-router-dom";

type props = {
    path: string;
    linkText: string;
};

export function SidebarLink({path, linkText}: props) {
    const isActive = (useLocation().pathname === path);
    
    
    return (
        <Link to={path} className={isActive? style.activeLink : style.link}>
            {linkText}
        </Link>
    );
}