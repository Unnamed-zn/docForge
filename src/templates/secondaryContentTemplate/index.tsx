import type { LucideIcon } from 'lucide-react';

type props = {
    Icon: LucideIcon
    title: string;
    description: string;
    nextSteps: string;
};

export function SecondaryContentTemplate({ Icon, title, description, nextSteps }: props) {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-main-white dark:bg-main-black">
            <div className='flex flex-col items-center'>
                <Icon className="size-16 text-main-black dark:text-main-white"/>
                <h1 className="font-primary font-bold text-main-black dark:text-main-white text-5xl my-2">
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