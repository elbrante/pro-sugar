import cl from './Date.module.css'
import React from "react";
import {IDate} from "../../../assets/icons";
import {useNavigate} from "react-router-dom";

export const Date = () => {

    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <div className={cl.linkButton} onClick={() => handleClick('/date')}>
            <IDate/>
            <span className={cl.text}>Выберите дату</span>
        </div>
    );
};
