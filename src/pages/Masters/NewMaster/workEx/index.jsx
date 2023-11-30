import cl from './WorkEx.module.css'
export const WorkEx = ({years}) => {
    return (
        <div className={cl.workEx}>
            <span className={cl.number}>{years} года</span>
            <span className={cl.bottomTitle}>Стаж работы</span>
        </div>
    );
};

