import React, {useEffect, useState} from 'react';
import cl from './OneMaster.module.css'
import {IAccordion} from "../../../assets/icons";
import classNames from "classnames";
import {user_id} from '../../../api/dataUser'

import imgMaster from '../../../assets/imgMaster.png'
import {getSrcImg, postMasters} from "../../../api/api";

export const OneMaster = ({name, level, experience, id}) => {

    const [visible, setVisible] = useState(false)

    function handleClick() {
        setVisible(!visible)
    }

    return (
        <div className={cl.oneMaster}>
            <div className={cl.leftBlock}>
                <div className={cl.firstBlock} onClick={handleClick}>
                    <div className={cl.leftBlockInfo}>
                        <img src={getSrcImg.masters(id)} alt={'Фото мастер'} className={cl.imgAvatar}/>
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
                            <button className={cl.buttonBlockInfo} onClick={() => postMasters(user_id, id)}>
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

