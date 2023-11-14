import React from 'react';
import cl from './Masters.module.css'
import {Header} from "../../components/Header";
import {DateCalendar} from "@mui/x-date-pickers";
import {SkipButton} from "../../components/SkipButton";
import imgMaster from '../../assets/imgMaster.png'
import {OneMaster} from "./OneMaster";

const listMaster = [
    {img: imgMaster, name: 'Кравченко Оксана Александровна', level: 'топ мастер', experience: 9},
    {img: imgMaster, name: 'Кравченко Оксана Александровна', level: 'топ мастер', experience: 9},
]

export const Masters = () => {
    return (
        <div className={cl.masters}>
            <div className={cl.firstBlock}>
                <Header text={'Мастера'} link={'/address'}/>

                {
                    listMaster.map((data, index) => {
                        return <OneMaster key={index}
                                          name={data.name}
                                          img={data.img}
                                          level={data.level}
                                          experience={data.experience}/>
                    })
                }

            </div>
            <div className={cl.wrapSkip}>
                <SkipButton link={'/services'}/>
            </div>
        </div>
    );
};

