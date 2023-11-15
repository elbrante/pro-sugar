import React from 'react';
import cl from './Services.module.css'
import {Header} from "../../components/Header";
import {OneMaster} from "../Masters/OneMaster";
import {SkipButton} from "../../components/SkipButton";
import {BlockInfo} from "../../components/BlockInfo";

import img1 from '../../assets/allservices.png'
import img2 from '../../assets/stocks.png'
import img3 from '../../assets/learn.png'

const listBlock = [
    {name: 'Все услуги', link: '/allServices', img: img1},
    {name: 'Акции', link: '/stocks', img: img2},
    {name: 'Обучение', link: '/learn', img: img3},
]
export const Services = () => {
    return (
        <div className={cl.services}>
            <div className={cl.firstBlock}>
                <Header text={'Услуги'} link={'/address'}/>
                {
                    listBlock.map((data, index) => {
                        return <BlockInfo name={data.name} link={data.link} imgBlock={data.img} key={index}/>
                    })
                }

            </div>
            <div className={cl.wrapSkip}>
                <SkipButton link={'/'}/>
            </div>
        </div>
    );
};

