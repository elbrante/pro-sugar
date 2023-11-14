import React from 'react';
import cl from './LinkButton.module.css'
import {useNavigate} from "react-router-dom";
export const LinkButton = ({children, icon, link}) => {

    const navigate = useNavigate()

    function handleClick() {
        navigate(link)
    }


    return (
        <button className={cl.linkButton} onClick={handleClick}>
            {icon}
            <span className={cl.text}>{children}</span>
        </button>
    );
};

