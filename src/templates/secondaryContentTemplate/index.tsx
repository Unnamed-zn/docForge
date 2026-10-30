import { style } from './style';
import type { LucideIcon } from 'lucide-react';

type props = {
    Icon: LucideIcon;
    title: string;
    description: string;
    nextSteps: string;
};

export function SecondaryContentTemplate({ Icon, title, description, nextSteps }: props) {
    return (
        <div className={style.screen}>
            <div className={style.content}>
                <Icon className={style.icon}/>
                <h1 className={style.title}>
                    {title}
                </h1>

                <p className="font-primary text-main-black dark:text-main-white w-3/5 text-center text-xl md:text-3xl text-primary-text">
                    {description}
                </p>

                <p className='font-primary text-md md:text-xl text-main-black dark:text-main-white w-4/5 lg:w-110 text-center my-4'>
                    {nextSteps}
                </p>
            </div>
        </div>
    )
}