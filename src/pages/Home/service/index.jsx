import cl from './Service.module.css'
import {useNavigate} from "react-router-dom";
import {IMaster, IService} from "../../../assets/icons";
import React from "react";

export const Service = () => {
    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <div className={cl.linkButton} onClick={() => handleClick('/services')}>
            <IService/>
            <span className={cl.text}>Выберите услугу</span>
        </div>
    );
};

