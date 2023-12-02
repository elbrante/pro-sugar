import cl from './NewMaster.module.css'
import ava from '../../../assets/avaMaster.png'
import {ScoreJob} from "./scoreJob";
import {WorkEx} from "./workEx";
import {TimeBlock} from "./timeBlock";
import {useState} from "react";
import {getSrcImg} from "../../../api/api";


//должен приходить список мастеров, где у каждого мастера должны быть:
// id
// должность
// имя
// рейтинг
// опыт работы в годах
// список свободных часов для записи
// фото (на это отдельный эндпоинт)

export const NewMaster = ({experience, listTime, name, score, id, setChoiceID}) => {

    const [arrTime, setArrTime] = useState([])



    return (
        <div className={cl.newMaster}>
            <div className={cl.infoOfMaster}>
                <img className={cl.ava} src={getSrcImg.masters(id)}/>
                <div className={cl.mainInfo}>
                    <span className={cl.post}>Топ мастер</span>
                    <span className={cl.name}>{name}</span>
                    <div className={cl.blockNumber}>
                        <ScoreJob score={score}/>
                        <WorkEx years={experience}/>
                    </div>
                </div>
            </div>

            <div className={cl.timeBlock}>
                <span className={cl.titleTime}>Ближайшее время для записи на 04 декабря:</span>
                <div className={cl.listTime}>
                    {
                        listTime.map((data, index) => (
                            <TimeBlock key={index} id={id} setChoiceID={setChoiceID}>{data.time}</TimeBlock>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

