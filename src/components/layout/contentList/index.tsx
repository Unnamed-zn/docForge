import type { ReactNode } from "react";
import { style } from "./style";

type Props = {
    title: string;
    description?: string;
    emptyMessage: string;
    children?: ReactNode;
};

export function ContentList({ title, description, emptyMessage, children }: Props) {
    return (
        <aside className={style.aside}>
            <header className={style.header}>
                <h2 className={style.title}>{title}</h2>
                {description && <p className={style.description}>{description}</p>}
            </header>

            {children ?? <p className={style.emptyMessage}>{emptyMessage}</p>}
        </aside>
    );
}
