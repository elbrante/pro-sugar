import React from 'react';
import cl from "./TextInfo.module.css";

export const TextInfo = ({firstTitle, secondTitle}) => {
    return (
        <div className={cl.info}>
            <span className={cl.firstTitle}>{firstTitle}</span>
            <span className={cl.secondTitle}>{secondTitle}</span>
        </div>
    );
};

