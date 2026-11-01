import { style } from './style';
import { useNavigate } from 'react-router-dom';

export function CreateProjectButton() {
    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate('/home');
    }

    return (
        <button className={style.button} onClick={handleClick}>
            Criar Projeto
        </button>
    );
}