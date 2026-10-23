import { useNavigate, useLocation } from 'react-router-dom';
import { selectAndLoadFolder, maximizeScreen } from '@/models/index';

type props = {
    buttonName: string;
    path: string;
};

//type avaliablePaths = '/home' | '/pages' | '/theme' | '/assets' | '/output' | '/config';


export function SelectFolderButton() {
    const navigate = useNavigate();

    async function handleClick() {
        const folder = await selectAndLoadFolder();
        if (folder) {
            navigate('/home');
            maximizeScreen();
        }
    }

    return (
        <button onClick={handleClick} className="font-primary font-bold text-main-dark text-lg bg-main-yellow pt-1 px-4 pb-1.5 lg:pt-1.5 lg:px-5 lg:pb-2 rounded-xl">
            Selecionar Pasta
        </button>
    )
}

export function NavigateButton({ path, buttonName }: props) {
    const isActive = (useLocation().pathname === path);
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(path)} className={`rounded-xl w-full h-fit px-4 py-1.5 font-layout text-start text-main-dark dark:text-main-white ${isActive? 'bg-orange-500/15 dark:bg-orange-200/30' : ''}`}>
            {buttonName}
        </button>
    );
}