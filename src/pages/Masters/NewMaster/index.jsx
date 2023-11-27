import cl from './NewMaster.module.css'
import ava from '../../../assets/avaMaster.png'
import {ScoreJob} from "./scoreJob";
import {WorkEx} from "./workEx";
import {TimeBlock} from "./timeBlock";


//должен приходить список мастеров, где у каждого мастера должны быть:
// id
// должность
// имя
// рейтинг
// опыт работы в годах
// список свободных часов для записи
// фото (на это отдельный эндпоинт)

export const NewMaster = () => {
    return (
        <div className={cl.newMaster}>
            <div className={cl.infoOfMaster}>
                <img className={cl.ava} src={ava}/>
                <div className={cl.mainInfo}>
                    <span className={cl.post}>Мастер-колорист</span>
                    <span className={cl.name}>Анна</span>
                    <div className={cl.blockNumber}>
                        <ScoreJob score={'5.00'}/>
                        <WorkEx years={2}/>
                    </div>
                </div>
            </div>

            <div className={cl.timeBlock}>
                <span className={cl.titleTime}>Ближайшее время для записи на 04 декабря:</span>
                <div className={cl.listTime}>
                    <TimeBlock>16:00</TimeBlock>
                    <TimeBlock>16:00</TimeBlock>
                    <TimeBlock>16:00</TimeBlock>
                    <TimeBlock>16:00</TimeBlock>
                    <TimeBlock>16:00</TimeBlock>
                </div>
            </div>
        </div>
    );
};

