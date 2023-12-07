import cl from './WorkEx.module.css'
export const WorkEx = ({years}) => {
    return (
        <div className={cl.workEx}>
            <span className={cl.number}>{years} лет</span>
            <span className={cl.bottomTitle}>Опыт работы</span>
        </div>
    );
};

