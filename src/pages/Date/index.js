import React from 'react';
import cl from './Date.module.css'
import {DateCalendar} from "@mui/x-date-pickers";
import {Header} from "../../components/Header";
import {SkipButton} from "../../components/SkipButton";
export const Date = () => {
    return (
        <div className={cl.date}>
            <div className={cl.firstBlock}>
                <Header link={'/'} text={'Дата и время'}/>
                <div className={cl.wrapperDateCalendar}>
                    <DateCalendar/>
                </div>
            </div>
            <div className={cl.wrapSkip}>
                <SkipButton link={'/address'}/>
            </div>
        </div>
    );
};

