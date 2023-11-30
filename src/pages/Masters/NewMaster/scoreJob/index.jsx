import cl from './ScoreJob.module.css'
import {Star} from "../../../../assets/icons";

export const ScoreJob = ({score}) => {
    return (
        <div className={cl.scoreJob}>
            <div className={cl.topBlock}>
                <span className={cl.score}>{score}</span>
                <Star/>
            </div>
            <span className={cl.bottomTitle}>Оценка работы</span>
        </div>
    );
};

