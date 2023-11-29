import React, {useEffect, useState} from 'react';
import cl from './Learn.module.css'
import {Header} from "../../components/Header";
import {BlockInfoPrice} from "../../components/BlockInfoPrice";
import img1 from "../../assets/learn.png";
import {getLearn, postLearn} from "../../api/api";
import {SendButton} from "../../components/SendButton";
import {user_id} from "../../api/dataUser";


const listBlock = [
    {name: 'Обучение', img: img1, price: 9000},
]

export const Learn = () => {
    const [learn, setLearn] = useState([])
    const [choiceId, setChoiceId] = useState()
    const [listChoice, setListChoice] = useState([])

    useEffect(() => {
        getLearn().then((res) => {
            setLearn(res.data)
        })
    }, []);

    function sendDataLearn() {
        // console.log(choiceId)
        // postLearn(user_id, choiceId)
        console.log(listChoice)
    }

    return (
        <div className={cl.learn}>
            <div className={cl.firstBlock}>
                <Header text={'Обучение'} link={'/services'}/>
                {/*<BlockInfoPrice price={learn.price} name={learn.nameLearn} learn={true} id={learn.id}/>*/}

                {
                    learn.map((data, index) => (
                        <BlockInfoPrice price={data.price}
                                        name={data.nameLearn}
                                        learn={true}
                                        id={data.id}
                                        setChoiceId={setChoiceId}
                                        listChoice={listChoice}
                                        setListChoice={setListChoice}
                        />
                    ))
                }

            </div>
            <SendButton onClick={sendDataLearn}>Подтвердить</SendButton>
        </div>
    );
};

