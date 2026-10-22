import { selectAndLoadFolder } from '../../models/index';

export function SelectFolderButton() {
    return (
        <button onClick={() => { selectAndLoadFolder() }} className="font-primary font-bold text-main-dark text-lg bg-main-yellow pt-1 px-4 pb-1.5 lg:pt-1.5 lg:px-5 lg:pb-2 rounded-xl">
            Selecionar Pasta
        </button>
    )
}