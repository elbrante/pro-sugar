import React, {useEffect, useState} from 'react';
import cl from './Address.module.css'
import {Header} from "../../components/Header";
import {SkipButton} from "../../components/SkipButton";
import {BlockMap} from "./BlockMap";
import {getAddress, postAddress} from "../../api/api";
import {SendButton} from "../../components/SendButton";
import {user_id} from "../../api/dataUser";

export const Address = () => {

    const [block, setBlock] = useState(false)

    const [addressList, setAddressList] = useState([])

    useEffect(() => {
        getAddress().then((res) => {
            setAddressList(res.data)
            console.log(res.data.id)
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
                <BlockMap id={addressList.id} city={'Казань'} street={'ул. Кремлевская, д. 35'}/>
                <BlockMap id={addressList.id} city={'Москва'} street={'ул. Тверская, д. 10'}/>
            </div>
            <div className={cl.wrapSkip}>
                <SendButton onClick={sendAddress}>Подтвердить</SendButton>
            </div>
        </div>
    );
};

