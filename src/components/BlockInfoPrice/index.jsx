import React, {useEffect} from 'react';
import cl from "../BlockInfo/BlockInfo.module.css";
import img from "../../assets/allservices.png";
import {postAllServices, postLearn, postStocks} from "../../api/api";


export const BlockInfoPrice = ({name, price, stocks, learn, allServices}) => {

    useEffect(() => {
        console.log(name, price)
    },[])

    return (
        <div className={cl.blockInfo}>
            <img src={img} className={cl.imgBlock}/>
            <div className={cl.rightBlock}>

                {
                    stocks
                    ?
                        <span className={cl.titleStocks}>{name}</span>
                        :
                        <span className={cl.title}>{name}</span>
                }


                <span className={cl.price}>{price}₽</span>
                {/*<button className={cl.buttonBlockInfo} onClick={() => postAllServices(name, price)}>*/}
                {/*    Выбрать*/}
                {/*</button>*/}

                {stocks ? <button className={cl.buttonBlockInfo} onClick={() => postStocks(name, price)}>Выбрать</button> : ''}
                {allServices ? <button className={cl.buttonBlockInfo} onClick={() => postAllServices(name, price)}>Выбрать</button> : ''}
                {learn ? <button className={cl.buttonBlockInfo} onClick={() => postLearn(name, price)}>Выбрать</button> : ''}



            </div>
        </div>
    );
};

