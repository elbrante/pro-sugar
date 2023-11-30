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

    );
};

