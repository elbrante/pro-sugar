import React, {useEffect, useState} from 'react';
import cl from './Learn.module.css'
import {Header} from "../../components/Header";
import {BlockInfoPrice} from "../../components/BlockInfoPrice";
import img1 from "../../assets/learn.png";
import {getLearn} from "../../api/api";


const listBlock = [
    {name: 'Обучение', img: img1, price: 9000},
]

export const Learn = () => {

    const [learn, setLearn] = useState([])

    useEffect(() => {
        getLearn().then((res) => {
            console.log(res.data)
            setLearn(res.data)
        })
    }, []);

    return (
        <div className={cl.learn}>
            <div className={cl.firstBlock}>
                <Header text={'Обучение'} link={'/services'}/>
                <BlockInfoPrice price={learn.price} name={learn.nameLearn} learn={true} id={learn.id}/>
            </div>

        </div>
    );
};

