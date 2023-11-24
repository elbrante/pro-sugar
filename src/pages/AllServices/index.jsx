import React, {useEffect, useState} from 'react';
import cl from './AllServices.module.css'
import {Header} from "../../components/Header";
import {BlockInfo} from "../../components/BlockInfo";
import {SkipButton} from "../../components/SkipButton";
import img1 from "../../assets/allservices.png";
import img2 from '../../assets/us.png'
import img3 from '../../assets/brov.png'
import {BlockInfoPrice} from "../../components/BlockInfoPrice";
import {getAllServices} from "../../api/api";


const listBlock = [
    {name: 'Глубокое бикини', img: img1, price: 1000},
    {name: 'Классическое бикини', img: img1, price: 700},
    {name: 'Усы', img: img2, price: 200},
    {name: 'Брови после татуажа', img: img3, price: 150},
]

export const AllServices = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        getAllServices().then((res) => {
            setAllServices(res.data)
        })
    }, []);

    return (
        <div className={cl.allServices}>
            <div className={cl.firstBlock}>
                <Header text={'Все услуги'} link={'/services'}/>
                {
                    allServices.map((data, index) => {
                        return (
                            <BlockInfoPrice
                                price={data.description}
                                name={data.name}
                                key={index}
                                allServices={true}
                                id={data.id}
                            />
                        )
                    })
                }

            </div>

        </div>
    );
};

