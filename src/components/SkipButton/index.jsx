import React from 'react';
import cl from './SkipButton.module.css'
import {useNavigate} from "react-router-dom";

export const SkipButton = ({link}) => {

    const nav = useNavigate()

    function handleClick() {
        nav(link)
    }

    return (
        <button onClick={handleClick} className={cl.skipButton}>
            <span className={cl.text}>Пропустить</span>
        </button>
    );
};

