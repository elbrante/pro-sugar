import React, {useEffect, useState} from 'react';
import cl from './OneMaster.module.css'
import {IAccordion} from "../../../assets/icons";
import classNames from "classnames";

import imgMaster from '../../../assets/imgMaster.png'
import {postMasters} from "../../../api/api";

export const OneMaster = ({name, level, experience}) => {

    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    function postRequestMaster(name, level, experience) {
        console.log(name, level, experience)
    }


    return (
        <div className={cl.oneMaster}>
            <div className={cl.leftBlock}>
                <div className={cl.firstBlock} onClick={handleClick}>
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
                            <button className={cl.buttonBlockInfo} onClick={() => postMasters(name, level, experience)}>
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

