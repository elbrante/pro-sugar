import cl from './TimeBlock.module.css'

export const TimeBlock = ({children}) => {
    return (
        <div className={cl.timeBlock}>
            <span className={cl.time}>{children}</span>
        </div>
    );
};

