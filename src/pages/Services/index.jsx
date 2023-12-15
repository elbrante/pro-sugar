import React, {useEffect, useState} from 'react';
import cl from './Services.module.css'
import {Header} from "../../components/Header";
import {OneMaster} from "../Masters/OneMaster";
import {SkipButton} from "../../components/SkipButton";
import {BlockInfo} from "../../components/BlockInfo";

import img1 from '../../assets/allservices.png'
import img2 from '../../assets/stocks.png'
import img3 from '../../assets/learn.png'
import {BlockInfoPrice} from "../../components/BlockInfoPrice";
import {SendButton} from "../../components/SendButton";

const listBlock = [
    {name: 'Все услуги', link: '/allServices', img: img1},
    {name: 'Акции', link: '/stocks', img: img2},
    {name: 'Обучение', link: '/learn', img: img3},
]
export const Services = () => {

    const [choiceId, setChoiceId] = useState()
    const [services, setServices] = useState([])

    useEffect(() => {
        //здесь делаем запрос на получение услуг

    }, []);

    return (
        <div className={cl.services}>
            <div className={cl.firstBlock}>
                <Header text={'Услуги'} link={'/address'}/>

                {/*Здесь нужно будет списком проходится по services и из него доставать id*/}
                <BlockInfoPrice name={'Солярий'}
                                price={25}
                                id={1}
                                setChoiceId={setChoiceId}/>
            </div>
            <div className={cl.wrapSkip}>
                <SendButton onClick={() => console.log(choiceId)}>Продолжить</SendButton>
            </div>
        </div>
    );
};

