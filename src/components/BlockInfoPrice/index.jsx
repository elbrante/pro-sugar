import React from 'react';
import cl from "../BlockInfo/BlockInfo.module.css";
import img from "../../assets/allservices.png";


export const BlockInfoPrice = ({name, price, stocks}) => {

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
                <button className={cl.buttonBlockInfo}>
                    Выбрать
                </button>
            </div>
        </div>
    );
};

