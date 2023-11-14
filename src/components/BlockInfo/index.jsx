import React from 'react';
import cl from './BlockInfo.module.css'
import img from '../../assets/allservices.png'
import {LinkButton} from "../LinkButton";
import {useNavigate} from "react-router-dom";
export const BlockInfo = ({name, imgBlock, link}) => {

    const nav = useNavigate()

    function handleClick() {
        nav(link)
    }

    return (
        <div className={cl.blockInfo}>
            <img src={imgBlock} className={cl.imgBlock}/>
            <div className={cl.rightBlock}>
                <span className={cl.title}>{name}</span>
                <button className={cl.buttonBlockInfo} onClick={handleClick}>
                    Перейти
                </button>
            </div>
        </div>
    );
};

