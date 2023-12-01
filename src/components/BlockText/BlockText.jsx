import React from 'react';
import cl from "./BlockText.module.css";

export const BlockText = ({firstTitle, secondTitle}) => {
    return (
        <div className={cl.info}>
            <span className={cl.firstTitle}>{firstTitle}</span>
            <span className={cl.secondTitle}>{secondTitle}</span>
        </div>
    );
};

