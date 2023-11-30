import cl from './SendButton.module.css'
import {useNavigate} from "react-router-dom";

export const SendButton = ({children, onClick}) => {

    return (
        <button className={cl.sendButton} onClick={onClick}>
            <span className={cl.nameButton}>{children}</span>
        </button>
    );
};

