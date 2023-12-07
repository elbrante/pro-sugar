import React, {useEffect, useState} from 'react';
import cl from './Home.module.css'
import homeImg from '../../assets/homeIMG.png'
import {LinkButton} from "../../components/LinkButton";
import {IAddress, IDate, IMaster, IService} from "../../assets/icons";
import {getDataUser} from "../../api/api";
import {user_id, username} from "../../api/dataUser";
import {Date} from "./date";
import {Address} from "./address";
import {Masters} from "./masters";
import {Service} from "./service";
import axios from "axios";
import {tg, useTelegram} from "../../hooks/useTelegram";
import {SendButton} from "../../components/SendButton";
import {MyPoints} from "./myPoints";
import {BlockImg} from "./blockImg";
import {getAddress} from "../../api/api";

export const Home = () => {

    useEffect(() => {
        //непонятно, откуда брать user_id. Пока добавил его в dataUser.js, чтобы хоть что-то было
        getDataUser(user_id).then((res) => {
            console.log(res.data)
            console.log(user_id)
        })
    }, []);

    const [dataAddress, setDataAddress] = useState('')
    const [dataMasters, setDataMasters] = useState('')
    const [dataService, setDataService] = useState([])
    const [priceList, setPriceList] = useState([])


    const [selectAddress, setSelectAddress] = useState('');

    useEffect(() => {
        getDataUser(user_id).then((res) => {
            const addressID = res.data.selected_address_id
            getAddress().then((resAddress) => {
                const listAddress = resAddress.data
                const address = listAddress.find((elem) => {
                    return elem.id === addressID
                })
                const selectAddress = address.city + ', ' + address.street
                setSelectAddress(selectAddress)
                setDataAddress(address.address)
            }).catch(() => {

            })
        }).catch(() => {})
    }, []);

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

        console.log(address)

        var userMessage = ""
        userMessage += "1. Адрес: " + selectAddress + "\n"
        userMessage += "2. Мастер: " + masters + "\n"
        userMessage += "3. Услуги: " + serviceList + "\n"
        userMessage += "4. Дата: " + localStorage.getItem('currentDay') + ", " + localStorage.getItem('currentMonth') + ", " + localStorage.getItem('currentTime') + "\n"
        userMessage += "\nИтого: " + sumPrice
        // userMessage += "\n\nБонусы пользователя: " + bonuses.toString(); - откуда Бонусы брать?
        userMessage += "\nУровень пользователя: Любитель (Баллы за заказ: " + (sumPrice * 0.05).toString() + ")";


        const botTokenAdmin = '6702522241:AAGB9msWfAtVeQoEmzWaCoRHehdjqd1fyIM';
        const chatId1 = '742596099';
        const chatId2 = '748332473';
        axios.post(`https://api.telegram.org/bot${botTokenAdmin}/sendMessage`, {
            chat_id: chatId1,
            text: "Новый заказ от @" + username + "!\n\n" + userMessage
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));

        axios.post(`https://api.telegram.org/bot${botTokenAdmin}/sendMessage`, {
            chat_id: chatId2,
            text: "Новый заказ от @" + username + "!\n\n" + userMessage
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));


        

        const botTokenUser = "6584496107:AAG6UeXF5w54azHysAchzpaYPvXbyjATj1Q";

        const tg = window.Telegram.WebApp
        

        const chatIdUser = tg.initDataUnsafe?.user?.id;
        console.log(chatIdUser)

        var userMessage = ""
        userMessage += "1. Адрес: " + selectAddress + "\n"
        userMessage += "2. Мастер: " + masters + "\n"
        userMessage += "3. Услуги: " + serviceList + "\n"
        userMessage += "4. Дата: " + localStorage.getItem('currentDay') + ", " + localStorage.getItem('currentMonth') + ", " + localStorage.getItem('currentTime') + "\n"
        userMessage += "\nИтого: " + sumPrice

        axios.post(`https://api.telegram.org/bot${botTokenUser}/sendMessage`, {
            chat_id: chatIdUser,
            text: "Ваш заказ принят!\n\n" + userMessage
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));

        tg.showAlert("Спасибо за заказ!\nСкоро с вами свяжется менеджер для подтверждения");


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

