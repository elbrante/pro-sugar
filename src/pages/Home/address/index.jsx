import cl from './Address.module.css'
import {useNavigate} from "react-router-dom";
import {IAddress} from "../../../assets/icons";
import React from "react";

export const Address = () => {

    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <div className={cl.linkButton} onClick={() => handleClick('/address')}>
            <IAddress/>
            <span className={cl.text}>Выберите адрес</span>
        </div>
    );
};

