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

    return (
        <div className={cl.address}>
            <div className={cl.firstBlock}>
                <Header text={'Выберите адрес'} link={'/'}/>

                {
                    addressList.map((data, index) => (
                        <BlockMap id={data.id} address={data.address} key={index}/>
                    ))
                }

            </div>
            <div className={cl.wrapSkip}>
                <SendButton>Подтвердить</SendButton>
            </div>
        </div>
    );
};

