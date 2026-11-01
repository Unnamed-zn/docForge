import { style } from './style';
import { useNavigate } from 'react-router-dom';

export function NotFoundStartButton() {
    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate('/');
    }

    return (
        <button className={style.button} onClick={handleClick}>
            Voltar à Seleção
        </button>
    );
}