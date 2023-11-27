import cl from './SendButton.module.css'

export const SendButton = ({children, onClick}) => {
    return (
        <button className={cl.sendButton} onClick={onClick}>
            <span className={cl.nameButton}>{children}</span>
        </button>
    );
};

