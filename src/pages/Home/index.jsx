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
import axios from "axios";

const listButton = [
    {text: 'Выберите дату', link: '/date', icon: <IDate/>},
    {text: 'Выберите адрес', link: '/address', icon: <IAddress/>},
    {text: 'Выберите мастера', link: '/masters', icon: <IMaster/>},
    {text: 'Выберите услугу', link: '/services', icon: <IService/>},
]

export const Home = () => {

    useEffect(() => {
        //непонятно, откуда брать user_id. Пока добавил его в dataUser.js, чтобы хоть что-то было
        getDataUser(user_id).then((res) => {
            console.log(res.data)
        })
    }, []);

    // function send_push(data) {
    //     var userMessage = ""
    //     // Тут данные заказа пользователя
    //     for (var i = 0; i < data.length; i++) {
    //         userMessage += (i + 1).toString() + ".\n"
    //         userMessage += "Товар: " + data[i].product_name + "\n"
    //         userMessage += "Размер: " + data[i].sizes[0] + "\n"
    //         userMessage += "Стоимость: " + data[i].price + "\n"
    //     }
    //     userMessage += "\nИтого: " + sumPrice(data).toString()
    //
    //     userMessage += "\n\nБонусы пользователя: " + bonuses.toString();
    //     userMessage += "\nУровень пользователя: Любитель (Баллы за заказ: " + (sumPrice(data) * 0.05).toString() + ")";
    //
    //
    //     const botTokenAdmin = '6476318398:AAEqP1F3hfLrDikZtSb2GkGaIhVoRQ9z5f0';
    //     const chatId1 = '742596099';
    //     const chatId2 = '748332473';
    //     axios.post(`https://api.telegram.org/bot${botTokenAdmin}/sendMessage`, {
    //         chat_id: chatId1,
    //         text: "Новый заказ от @" + user?.username + "!\n\n" + userMessage
    //     })
    //         .then(response => console.log(response.data))
    //         .catch(error => console.error(error));
    //
    //     axios.post(`https://api.telegram.org/bot${botTokenAdmin}/sendMessage`, {
    //         chat_id: chatId2,
    //         text: "Новый заказ от @" + user?.username + "!\n\n" + userMessage
    //     })
    //         .then(response => console.log(response.data))
    //         .catch(error => console.error(error));
    //
    //     tg.showAlert("Спасибо за заказ!\nСкоро с вами свяжется менеджер для подтверждения");
    // }


    return (
        <div className={cl.home}>
            <div className={cl.topBlock}>
                <img src={homeImg} alt={'HomeImg'} className={cl.homeImg}/>
                <div className={cl.buttonGroup}>
                    <Date/>
                    <Address/>
                    <Masters/>
                    <Service/>
                </div>
            </div>

            <button className={cl.buttonHome}>
                Оставить заявку
            </button>
        </div>
    );
};

