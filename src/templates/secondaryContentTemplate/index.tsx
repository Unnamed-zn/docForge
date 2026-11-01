import { style } from './style';
import type { LucideIcon } from 'lucide-react';

type props = {
    Icon: LucideIcon;
    title: string;
    description: string;
    nextSteps?: string;
    Buttons?: React.ReactNode;
};

export function SecondaryContentTemplate({ Icon, title, description, nextSteps, Buttons }: props) {
    return (
        <div className={style.screen}>
            <div className={style.content}>
                <Icon className={style.icon}/>
                <h1 className={style.title}>
                    {title}
                </h1>

                <p className={style.description}>
                    {description}
                </p>

                <p className={style.nextSteps}>
                    {nextSteps}
                </p>
                {Buttons&& Buttons}
            </div>
        </div>
    )
}