import cl from './TextBlockInHome.module.css'


export const TextBlockInHome = ({children}) => {
    return (
        <span className={cl.textBlockInHome}>
            {children}
        </span>
    );
};

