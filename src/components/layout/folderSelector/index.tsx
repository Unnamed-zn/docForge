import { FileText } from 'lucide-react';

type props = {
    children: React.ReactNode;
};

export function FolderSelectorPage({children}: props) {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-primary-background">
            <FileText className='size-16 text-primary-text' />
            <h1 className="font-primary font-bold text-primary-text text-5xl">
                DocForge
            </h1>
            <p className="font-primary text-3xl text-primary-text">
                Onde ideias tomam forma sem complicações.
            </p>
            <p className='font-primary text-xl text-primary-text w-1/2 text-center'>
                Escolha uma pasta para armazenar gerenciar seus projetos. Não se assuste, a escolha pode ser alterada.
            </p>
            {children}
        </div>
    )
}