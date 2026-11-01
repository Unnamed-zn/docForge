import { style } from './style';
import { useNavigate } from 'react-router-dom';

export function OpenProjectButton() {
    const navigate = useNavigate();

    async function handleClick() {
        const selectAndLoadFolder = ()=> true;

        const folder = selectAndLoadFolder();
        if (folder) {
            navigate('/home');
        }
    }

    return (
        <button onClick={handleClick} className={style.button}>
            Abrir Projeto
        </button>
    )
}

