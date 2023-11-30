import React, {useEffect, useState} from 'react';
import cl from './Address.module.css'
import {Header} from "../../components/Header";
import {SkipButton} from "../../components/SkipButton";
import {BlockMap} from "./BlockMap";
import {getAddress, postAddress, testPostAddress} from "../../api/api";
import {SendButton} from "../../components/SendButton";
import {user_id} from "../../api/dataUser";

export const Address = () => {

    const [choiceAddress, setChoiceAddress] = useState()
    const [addressList, setAddressList] = useState([])

    useEffect(() => {
        getAddress().then((res) => {
            setAddressList(res.data)
            console.log(res.data)
        })
    }, []);

    function sendAddress() {
        console.log(choiceAddress)
        postAddress(choiceAddress, user_id)
        // testPostAddress(choiceAddress, user_id).then(res => {
        //     console.log(res)
        // }).catch(err => console.log(err))
    }

    return (
        <div className={cl.address}>
            <div className={cl.firstBlock}>
                <Header text={'Выберите адрес'} link={'/'}/>
                {
                    addressList.map((data, index) => (
                        <BlockMap
                            id={data.id}
                            city={data.city}
                            street={data.street}
                            key={index}
                            setChoiceAddress={setChoiceAddress}
                            choiceAddress={choiceAddress}
                        />
                    ))
                }
            </div>
            <div className={cl.wrapSkip}>
                <SendButton onClick={sendAddress}>Подтвердить</SendButton>
            </div>
        </div>
    );
};

