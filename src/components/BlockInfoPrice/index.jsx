import React, {useEffect, useState} from 'react';
import cl from "../BlockInfo/BlockInfo.module.css";
import img from "../../assets/allservices.png";
import {getSrcImg, postAllServices, postLearn, postStocks} from "../../api/api";
import {user_id} from "../../api/dataUser";
import classNames from "classnames";


export const BlockInfoPrice = ({
                                   name,
                                   price,
                                   stocks,
                                   learn,
                                   allServices,
                                   id,
                                   setChoiceId,

                               }) => {

    const [choiceService, setChoiceService] = useState(false)

    function addService() {
        setChoiceService(!choiceService)
        setChoiceId(id)
    }


    return (
        <div className={classNames({
            [cl.blockInfo]: true,
            [cl.choiceBlock]: choiceService,
            [cl.notChoiceBlock]: !choiceService
        })} onClick={addService}>
            <div className={cl.rightBlock}>
                <span className={cl.title}>{name}</span>
                <span className={cl.price}>{price}₽</span>
                {/*{stocks ? <button className={cl.buttonBlockInfo} onClick={() => postStocks(user_id, id)}>Выбрать</button> : ''}*/}
                {/*{allServices ? <button className={cl.buttonBlockInfo} onClick={() => postAllServices(user_id, id)}>Выбрать</button> : ''}*/}
                {/*{learn ? <button className={cl.buttonBlockInfo} onClick={() => postLearn(user_id, id)}>Выбрать</button> : ''}*/}
            </div>

            {allServices ? <img src={getSrcImg.services(id)} className={cl.imgBlock}/> : ''}
            {stocks ? <img src={getSrcImg.stocks(id)} className={cl.imgBlock}/> : ''}
            {learn ? <img src={getSrcImg.learn(id)} className={cl.imgBlock}/> : ''}
        </div>
    );
};

