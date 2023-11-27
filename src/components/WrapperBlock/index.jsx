import cl from './WrapperBlock.module.css'

export const WrapperBlock = ({children, onClick}) => {
    return (
        <div className={cl.wrapperBlock} onClick={onClick}>
            {children}
        </div>
    );
};

