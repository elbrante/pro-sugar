import React, {useEffect, useState} from 'react';
import cl from './Masters.module.css'
import {Header} from "../../components/Header";
import {DateCalendar} from "@mui/x-date-pickers";
import {SkipButton} from "../../components/SkipButton";
import imgMaster from '../../assets/imgMaster.png'
import {OneMaster} from "./OneMaster";
import {getMasters} from "../../api/api";
import {SendButton} from "../../components/SendButton";
import {useNavigate} from "react-router-dom";
import {FreeSpecialist} from "./FreeSpecialist";
import {NewMaster} from "./NewMaster";

const listMaster = [
    {img: imgMaster, name: 'Кравченко Оксана Александровна', level: 'топ мастер', experience: 9},
    {img: imgMaster, name: 'Кравченко Оксана Александровна', level: 'топ мастер', experience: 9},
]

export const Masters = () => {
    const nav = useNavigate()
    const [masters, setMasters] = useState([])

    // useEffect(() => {
    //     getMasters().then(res => {
    //         // console.log(res.data)
    //         setMasters(res.data)
    //     })

    // }, []);

    function handleClick() {
        nav('/date')
    }



    return (
        <div className={cl.masters}>
            <div className={cl.firstBlock}>
                <Header text={'Выберите мастера'} link={'/address'}/>
                <FreeSpecialist/>
                <NewMaster/>
            </div>
            <div className={cl.wrapSkip}>
                <SendButton onClick={handleClick}>Подтвердить</SendButton>
            </div>
        </div>
    );
};

