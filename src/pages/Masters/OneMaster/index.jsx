import React, {useState} from 'react';
import cl from './OneMaster.module.css'
import {IAccordion} from "../../../assets/icons";
import classNames from "classnames";

export const OneMaster = ({img, name, level, experience}) => {

    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }


    return (
        <div className={cl.oneMaster} onClick={handleClick}>
            <div className={cl.leftBlock}>
                <div className={cl.firstBlock}>
                    <div className={cl.leftBlockInfo}>
                        <img src={img} alt={'Фото мастер'}/>
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
                        <div className={cl.detailInfo}>
                            <span>Квалификация: {level}</span>
                            <span>Стаж: {experience} лет</span>
                        </div>
                        :
                        ''
                }


            </div>
        </div>
    );
};

