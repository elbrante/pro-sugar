import React from 'react';
import cl from './Header.module.css'
import {IBack} from "../../assets/icons";
import {useNavigate} from "react-router-dom";
import {SkipButton} from "../SkipButton";

export const Header = ({text, link}) => {

    const nav = useNavigate()

    function handleClick() {
        nav(link)
    }

    return (
        <div className={cl.header}>
            <div className={cl.wrapp}>
                <div className={cl.wrapIcon} onClick={handleClick}>
                    <IBack/>
                </div>
                <span className={cl.titleText}>{text}</span>
            </div>

        </div>
    );
};

