import React, {useEffect, useState} from 'react';
import cl from './OneMaster.module.css'
import {IAccordion} from "../../../assets/icons";
import classNames from "classnames";

import imgMaster from '../../../assets/imgMaster.png'

export const OneMaster = ({name, level, experience}) => {

    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    useEffect(() => {
        console.log(name)
    }, []);


    return (
        <div className={cl.oneMaster} onClick={handleClick}>
            <div className={cl.leftBlock}>
                <div className={cl.firstBlock}>
                    <div className={cl.leftBlockInfo}>
                        <img src={imgMaster} alt={'Фото мастер'}/>
                        <span className={cl.name}>{name}</span>
                    </div>
                    <button className={classNames({
                        [cl.open]: visible,
                        [cl.close]: !visible
                    })}>
                        <IAccordion/>
                    </button>
                </div>
                {
                    visible ?
                        <>
                            <div className={cl.detailInfo}>
                                <span>Квалификация: {level}</span>
                                <span>Стаж: {experience} лет</span>
                            </div>
                            <button className={cl.buttonBlockInfo}>
                                Выбрать
                            </button>
                        </>
                        :
                        ''
                }


            </div>
        </div>
    )
        ;
};

