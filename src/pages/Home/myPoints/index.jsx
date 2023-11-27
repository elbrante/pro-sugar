import cl from './MyPoints.module.css'

export const MyPoints = () => {
    return (
        <div className={cl.myPoints}>
            <span className={cl.title}>Мои баллы:</span>
            <span className={cl.points}>1000</span>
        </div>
    );
};

