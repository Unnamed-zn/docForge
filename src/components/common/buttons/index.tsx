import { useNavigate } from 'react-router-dom';

export function SelectFolderButton() {
    const navigate = useNavigate();

    async function handleClick() {
        const selectAndLoadFolder = ()=> true;

        const folder = selectAndLoadFolder();
        if (folder) {
            navigate('/home');
        }
    }

    return (
        <button onClick={handleClick} className="font-primary font-bold text-black text-lg bg-yellow-200 pt-1 px-4 pb-1.5 lg:pt-1.5 lg:px-5 lg:pb-2 rounded-xl">
            Selecionar Pasta
        </button>
    )
}

