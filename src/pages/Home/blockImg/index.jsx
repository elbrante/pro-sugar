import cl from './BlockImg.module.css'
import stockImg from '../../../assets/stockImg.png'
import {Gift} from "../../../assets/icons";
import {useEffect, useState} from "react";
import {getHomeStock, getSrcImg} from "../../../api/api";

export const BlockImg = () => {

    const [stock, setStock] = useState({
        id: '',
        nameSalon: '',
        nameStock: '',
        date: '',
    })

    useEffect(() => {
        getHomeStock().then(res => {
            setStock({
                id: res.data.id,
                nameSalon: res.data.nameSalon,
                nameStock: res.data.nameStock,
                date: res.data.date,
            })
        }).catch(() => {})
    }, []);

    return (
        <div className={cl.blockImg}>
            <img src={getSrcImg.stockPhoto(stock.id)} className={cl.img}/>
            <div className={cl.descStock}>
                <span className={cl.name}>Салон красоты «{stock.nameSalon}»</span>
                <span className={cl.period}>Акция действует до {stock.date}</span>
            </div>
            <div className={cl.stockBlock}>
                <span className={cl.nameStock}>{stock.nameStock}</span>
                <Gift/>
            </div>
            <div className={cl.blockStock}>
                <span>Акция</span>
            </div>
        </div>
    );
};

