import React, {useEffect, useState} from 'react';
import cl from './Address.module.css'
import {Header} from "../../components/Header";
import {SkipButton} from "../../components/SkipButton";
import {BlockMap} from "./BlockMap";
import {getAddress} from "../../api/api";
import {SendButton} from "../../components/SendButton";

export const Address = () => {

    const [block, setBlock] = useState(false)

    const [addressList, setAddressList] = useState([])

    useEffect(() => {
        getAddress().then((res) => {
            setAddressList(res.data)
        })
    }, []);

    function sendAddress() {
        if (localStorage.getItem('map')) {
            const choiceAddress = localStorage.getItem('map')
            console.log(choiceAddress)
        } else {
            console.log('Нет адреса')
        }

    }

    return (
        <div className={cl.address}>
            <div className={cl.firstBlock}>
                <Header text={'Выберите адрес'} link={'/'}/>
                <BlockMap city={'Казань'} street={'ул. Кремлевская, д. 35'}/>
                <BlockMap city={'Москва'} street={'ул. Тверская, д. 10'}/>
            </div>
            <div className={cl.wrapSkip}>
                <SendButton onClick={sendAddress}>Подтвердить</SendButton>
            </div>
        </div>
    );
};

