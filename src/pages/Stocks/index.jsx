import React from 'react';
import cl from './Stocks.module.css'
import {Header} from "../../components/Header";
import img1 from "../../assets/allservices.png";
import {BlockInfoPrice} from "../../components/BlockInfoPrice";

const listBlock = [
    {name: 'Голень + бикини + подмышки', img: img1, price: 1800},
    {name: 'Ноги полностью + бикини + подмышки', img: img1, price: 2200},
    {name: 'Голень + бикини', img: img1, price: 1600},
]

export const Stocks = () => {
    return (
        <div className={cl.allServices}>
            <div className={cl.firstBlock}>
                <Header text={'Акции'} link={'/services'}/>
                {
                    listBlock.map((data, index) => {
                        return <BlockInfoPrice price={data.price} name={data.name} img={data.img} key={index} stocks={true}/>
                    })
                }
            </div>
        </div>
    );
};

