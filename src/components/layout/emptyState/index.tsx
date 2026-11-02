import type { LucideIcon } from "lucide-react";
import { style } from "./style";

type Props = {
    Icon: LucideIcon;
    title: string;
    description: string;
};

export function EmptyState({ Icon, title, description }: Props) {
    return (
        <section className={style.container}>
            <div className={style.iconWrapper}>
                <Icon className={style.icon} strokeWidth={1.5} />
            </div>
            <div className={style.text}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{description}</p>
            </div>
        </section>
    );
}
