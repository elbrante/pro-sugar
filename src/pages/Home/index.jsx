import React, {useEffect, useState} from 'react';
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
import {tg} from "../../hooks/useTelegram";
import {SendButton} from "../../components/SendButton";
import {MyPoints} from "./myPoints";
import {BlockImg} from "./blockImg";

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

        })
    }, []);

    const [dataAddress, setDataAddress] = useState('')
    const [dataMasters, setDataMasters] = useState('')
    const [dataService, setDataService] = useState([])
    const [priceList, setPriceList] = useState([])


    function send_push(address, masters, service, priceList) {
        let sumPrice = 0
        priceList.map(data => {
            sumPrice += data
        })

        let serviceList = ''
        for (let i = 0; i < service.length; i++) {
            if (service[i] !== service.at(-1)) {
                serviceList += service[i] + ', '
            } else {
                serviceList += service[i]
            }
        }

        var userMessage = ""
        userMessage += "1. Адрес: " + address + "\n"
        userMessage += "2. Мастер: " + masters + "\n"
        userMessage += "3. Услуги: " + serviceList + "\n"
        userMessage += "\nИтого: " + sumPrice
        // userMessage += "\n\nБонусы пользователя: " + bonuses.toString(); - откуда Бонусы брать?
        userMessage += "\nУровень пользователя: Любитель (Баллы за заказ: " + (sumPrice * 0.05).toString() + ")";


        const botTokenAdmin = '6476318398:AAEqP1F3hfLrDikZtSb2GkGaIhVoRQ9z5f0';
        const chatId1 = '742596099';
        const chatId2 = '748332473';
        axios.post(`https://api.telegram.org/bot${botTokenAdmin}/sendMessage`, {
            chat_id: chatId1,
            text: "Новый заказ от @" + '@имя_пользователя' + "!\n\n" + userMessage
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));

        axios.post(`https://api.telegram.org/bot${botTokenAdmin}/sendMessage`, {
            chat_id: chatId2,
            text: "Новый заказ от @" + '@имя_пользователя' + "!\n\n" + userMessage
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));

        // tg.showAlert("Спасибо за заказ!\nСкоро с вами свяжется менеджер для подтверждения");
        // - нет такой функции showAlert


    }


    return (
        <div className={cl.home}>
            <div className={cl.topBlock}>
                {/*<img src={homeImg} alt={'HomeImg'} className={cl.homeImg}/>*/}
                <BlockImg/>
                <div className={cl.buttonGroup}>
                    <MyPoints/>
                    <Masters setDataMasters={setDataMasters}/>
                    <Date/>
                    <Service setDataService={setDataService} setPriceList={setPriceList}/>
                    <Address setDataAddress={setDataAddress}/>
                </div>
            </div>

            <SendButton onClick={() => {send_push(dataAddress, dataMasters, dataService, priceList)}}>
                Оставить заявку
            </SendButton>
        </div>
    );
};

