import React, {useEffect} from 'react';
import cl from './Home.module.css'
import homeImg from '../../assets/homeIMG.png'
import {LinkButton} from "../../components/LinkButton";
import {IAddress, IDate, IMaster, IService} from "../../assets/icons";
import {getDataUser} from "../../api/api";
import {user_id} from "../../api/dataUser";
import {Date} from "./date";
import {Address} from "./address";
import {Masters} from "./masters";
import {Service} from "./service";

const listButton = [
    {text: 'Выберите дату', link: '/date', icon: <IDate/>},
    {text: 'Выберите адрес', link: '/address', icon: <IAddress/>},
    {text: 'Выберите мастера', link: '/masters', icon: <IMaster/>},
    {text: 'Выберите услугу', link: '/services', icon: <IService/>},
]

export const Home = () => {

    // useEffect(() => {
    //     //непонятно, откуда брать user_id. Пока добавил его в dataUser.js, чтобы хоть что-то было
    //     getDataUser(user_id).then((res) => {
    //         console.log(res.data)
    //     })
    // }, []);


    return (
        <div className={cl.home}>
            <img src={homeImg} alt={'HomeImg'} className={cl.homeImg}/>
            <div className={cl.buttonGroup}>
                <Date/>
                <Address/>
                <Masters/>
                <Service/>
            </div>
        </div>
    );
};

