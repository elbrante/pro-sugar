import React, {useEffect, useState} from 'react';
import cl from "../BlockInfo/BlockInfo.module.css";
import img from "../../assets/allservices.png";
import {getSrcImg, postAllServices, postLearn, postStocks} from "../../api/api";
import {user_id} from "../../api/dataUser";
import classNames from "classnames";
import photoElena from '../../../src/assets/photoElena.jpg'

export const BlockInfoPrice = ({
                                   name,
                                   price,
                                   stocks,
                                   learn,
                                   allServices,
                                   id,
                                   setChoiceId,
                                   setListChoice,
                                   listChoice,
                               }) => {

    const [choiceService, setChoiceService] = useState(false)

    function addService() {
        setChoiceService(!choiceService)
        if (!choiceService) {
            setChoiceId(id)
        } else {
            setChoiceId(null)
        }

        //Оставил на будущее, т.к бд будет меняться
        // if (!choiceService) {
        //     setListChoice([...listChoice, id])
        // } else {
        //     setListChoice(
        //         listChoice.filter(elem => elem !== id)
        //     )
        // }
    }


    return (
        <div className={classNames({
            [cl.blockInfo]: true,
            [cl.choiceBlock]: choiceService,
            [cl.notChoiceBlock]: !choiceService
        })} onClick={addService}>
            <div className={cl.rightBlock}>
                <span className={cl.title}>{name}</span>
                <span className={cl.price}>{price}₽ за минуту</span>
            </div>

            <img className={cl.imgBlock} src={photoElena}/>
        </div>
    );
};

