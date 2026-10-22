import { FileText } from 'lucide-react';

type props = {
    children: React.ReactNode;
};

export function FolderSelectorPage({ children }: props) {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-main-white dark:bg-main-dark">
            <div className='flex flex-col items-center'>
                <FileText className='size-16 text-main-dark dark:text-main-white' />

                <h1 className="font-primary font-bold text-main-dark dark:text-main-white text-5xl my-2">
                    DocForge
                </h1>


                <p className="font-primary text-main-dark dark:text-main-white text-xl md:text-3xl text-primary-text mb-4">
                    Onde ideias tomam forma sem complicações.
                </p>


                <p className='font-primary text-md md:text-xl text-main-dark dark:text-main-white w-4/5 lg:w-110 text-center my-4'>
                    Escolha uma pasta para armazenar gerenciar seus projetos. Não se assuste, a escolha pode ser alterada.
                </p>

                {children}

            </div>
        </div>
    )
}