import { style } from "./style";

type Props = {
    eyebrow?: string;
    title: string;
    description: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
    return (
        <header className={style.header}>
            {eyebrow && <span className={style.eyebrow}>{eyebrow}</span>}
            <h1 className={style.title}>{title}</h1>
            <p className={style.description}>{description}</p>
        </header>
    );
}
