import React, {useEffect, useState} from 'react';
import cl from './BlockMap.module.css'
import {GrayAddress, IBrownAccordion, IBrownAddress} from "../../../assets/icons";
import classNames from "classnames";
import {getAddress, postAddress} from "../../../api/api";
import {user_id} from "../../../api/dataUser";

export const BlockMap = ({id, city, street, setChoiceAddress, choiceAddress}) => {


    const [choice, setChoice] = useState(false)

    function setChoiceMap() {
        setChoice(!choice)
        if (!choice) {
            console.log(id)
            setChoiceAddress(id)
        } else {
            setChoiceAddress(null)
        }
    }


    return (
        <div className={classNames({
            [cl.wrapBlockMap]: true,
            [cl.wrapNotChoiceMap]: !choice,
            [cl.wrapChoiceMap]: choice,
        })} onClick={setChoiceMap}>
            <div className={cl.mainInfo}>
                <div className={cl.blockMap}>
                <span className={cl.address}>
                    Город: <span className={cl.city}>{city}</span>
                </span>
                    <span className={cl.address}>{street}</span>
                </div>
                <div className={cl.wrapIcon}>
                    <GrayAddress/>
                </div>
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A29bd7a0be2dcaf80b82f081167e21b420224e7e0a93ff4377c35adf94039e243&amp;source=constructor"
                    frameBorder="0"
                    className={cl.map}>
            </iframe>

        </div>

    );
};

