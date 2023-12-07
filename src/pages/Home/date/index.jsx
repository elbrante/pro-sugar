import cl from './Date.module.css'
import React, {useEffect, useState} from "react";
import {GrayDate, IDate} from "../../../assets/icons";
import {useNavigate} from "react-router-dom";
import {WrapperBlock} from "../../../components/WrapperBlock";
import {TextBlockInHome} from "../../../components/TextBlockInHome";

export const Date = () => {

    const navigate = useNavigate()

    const [date, setDate] = useState({
        day: '',
        month: ''
    })

    function handleClick(link) {
        navigate(link)
    }


    useEffect(() => {
        if (localStorage.getItem('currentDay')) {
            const currentDay = localStorage.getItem('currentDay')
            const currentMonth = localStorage.getItem('currentMonth')
            setDate({
                day: currentDay,
                month: currentMonth,
            })
        }
    }, []);

    console.log(date)


    return (
        <WrapperBlock onClick={() => handleClick('/date')}>
            <div className={cl.iconDate}>
                <GrayDate/>
            </div>
            {
                date.day ?
                    <TextBlockInHome>{date.day}, {date.month}</TextBlockInHome>
                    :
                    <TextBlockInHome>Выберите дату</TextBlockInHome>
            }

        </WrapperBlock>
    );
};
