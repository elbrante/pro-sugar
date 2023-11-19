import React, {useEffect} from 'react';
import cl from "../BlockInfo/BlockInfo.module.css";
import img from "../../assets/allservices.png";
import {getSrcImg, postAllServices, postLearn, postStocks} from "../../api/api";
import {user_id} from "../../api/dataUser";


export const BlockInfoPrice = ({name, price, stocks, learn, allServices, id}) => {

    return (
        <div className={cl.blockInfo}>
            {allServices ? <img src={getSrcImg.services(id)} className={cl.imgBlock}/> : ''}
            {stocks ? <img src={getSrcImg.stocks(id)} className={cl.imgBlock}/> : ''}
            {learn ? <img src={getSrcImg.learn(id)} className={cl.imgBlock}/> : ''}


            <div className={cl.rightBlock}>

                {
                    stocks
                    ?
                        <span className={cl.titleStocks}>{name}</span>
                        :
                        <span className={cl.title}>{name}</span>
                }

                <span className={cl.price}>{price}₽</span>

                {stocks ? <button className={cl.buttonBlockInfo} onClick={() => postStocks(user_id, id)}>Выбрать</button> : ''}
                {allServices ? <button className={cl.buttonBlockInfo} onClick={() => postAllServices(user_id, id)}>Выбрать</button> : ''}
                {learn ? <button className={cl.buttonBlockInfo} onClick={() => postLearn(user_id, id)}>Выбрать</button> : ''}



            </div>
        </div>
    );
};

