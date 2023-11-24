import React, {useEffect, useState} from 'react';
import cl from './Stocks.module.css'
import {Header} from "../../components/Header";
import img1 from "../../assets/allservices.png";
import {BlockInfoPrice} from "../../components/BlockInfoPrice";
import {getStocks} from "../../api/api";

const listBlock = [
    {name: 'Голень + бикини + подмышки', img: img1, price: 1800},
    {name: 'Ноги полностью + бикини + подмышки', img: img1, price: 2200},
    {name: 'Голень + бикини', img: img1, price: 1600},
]

export const Stocks = () => {

    const [stocks, setStocks] = useState([])

    useEffect(() => {
        getStocks().then((res) => {
            setStocks(res.data)
        })
    }, []);

    return (
        <div className={cl.allServices}>
            <div className={cl.firstBlock}>
                <Header text={'Акции'} link={'/services'}/>
                {
                    stocks.map((data, index) => {
                        return <BlockInfoPrice
                            price={data.price}
                            name={data.nameStocks}
                            key={index}
                            stocks={true}
                            id={data.id}
                        />
                    })
                }
            </div>
        </div>
    );
};

