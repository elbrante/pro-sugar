import React, {useEffect, useState} from 'react';
import cl from './Masters.module.css'
import {Header} from "../../components/Header";
import {DateCalendar} from "@mui/x-date-pickers";
import {SkipButton} from "../../components/SkipButton";
import imgMaster from '../../assets/imgMaster.png'
import {OneMaster} from "./OneMaster";
import {getMasters, postMasters} from "../../api/api";
import {SendButton} from "../../components/SendButton";
import {useNavigate} from "react-router-dom";
import {FreeSpecialist} from "./FreeSpecialist";
import {NewMaster} from "./NewMaster";
import {user_id} from "../../api/dataUser";

const listMaster = [
    {img: imgMaster, name: 'Кравченко Оксана Александровна', level: 'топ мастер', experience: 9},
    {img: imgMaster, name: 'Кравченко Оксана Александровна', level: 'топ мастер', experience: 9},
]

export const Masters = () => {
    const nav = useNavigate()
    const [masters, setMasters] = useState([])
    const [choiceID, setChoiceID] = useState()

    useEffect(() => {
        getMasters().then(res => {
            setMasters(res.data)
            console.log(res.data)
        })

    }, []);

    function sendData() {
        nav('/date')
        postMasters(user_id, choiceID)
    }



    return (
        <div className={cl.masters}>
            <div className={cl.firstBlock}>
                <Header text={'Выберите мастера'} link={'/address'}/>
                <FreeSpecialist/>
                {
                    masters.map((data, index) => (
                        <NewMaster
                            name={data.name}
                            score={data.score}
                            experience={data.experience}
                            listTime={data.listTime}
                            id={data.id}
                            setChoiceID={setChoiceID}
                        />
                    ))
                }

            </div>
            <div className={cl.wrapSkip}>
                <SendButton onClick={sendData}>Подтвердить</SendButton>
            </div>
        </div>
    );
};

