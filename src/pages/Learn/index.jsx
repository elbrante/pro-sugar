import React from 'react';
import cl from './Learn.module.css'
import {Header} from "../../components/Header";
import {BlockInfoPrice} from "../../components/BlockInfoPrice";
import img1 from "../../assets/learn.png";


const listBlock = [
    {name: 'Обучение', img: img1, price: 9000},
]

export const Learn = () => {
    return (
        <div className={cl.learn}>
            <div className={cl.firstBlock}>
                <Header text={'Обучение'} link={'/services'}/>
                {
                    listBlock.map((data, index) => {
                        return <BlockInfoPrice price={data.price} name={data.name} img={data.img} key={index}/>
                    })
                }

            </div>

        </div>
    );
};

