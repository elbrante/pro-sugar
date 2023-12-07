import cl from './Service.module.css'
import {useNavigate} from "react-router-dom";
import {GrayService, IMaster, IService} from "../../../assets/icons";
import React, {useEffect, useState} from "react";
import {getAllServices, getDataUser, getLearn, getMasters, getStocks} from "../../../api/api";
import {user_id} from "../../../api/dataUser";
import {WrapperBlock} from "../../../components/WrapperBlock";
import {TextBlockInHome} from "../../../components/TextBlockInHome";

export const Service = ({setDataService, setPriceList}) => {

    const [service, setService] = useState('')
    const [stock, setStock] = useState('')
    const [learn, setLearn] = useState('')

    const listSelected = []

    //это временное решение
    if (stock) {
        listSelected.push(stock)
    }

    if (service) {
        listSelected.push(service)

    }

    if (learn) {
        listSelected.push(learn)

    }


    const [arr, setArr] = useState([])

    useEffect(() => {
        //newArr и setArr почему-то не выводятся, хотя в консоле данные есть. Пока решил сделать через listSelected

        const newArr = []
        const pricesList = []
        getDataUser(user_id).then((res) => {
            // console.log(res.data)
            console.log(res.data)
            const serviceID = res.data.selected_service_id
            const stockID = res.data.selected_stock_id
            const learnID = res.data.selected_learn_id

            getAllServices().then((service) => {
                const listServices = service.data
                if (serviceID !== -1) {
                    const services = listServices.find((elem) => {
                        return elem.id === serviceID
                    })
                    setService(services.name)
                    newArr.push(services.name)
                    pricesList.push(services.description)
                }
            }).catch(() => {
                setService('')
            })

            getLearn().then((learn) => {
                const listLearn = learn.data
                if (learnID !== -1) {
                    const newLearn = listLearn.find((elem) => {
                        return elem.id === learnID
                    })
                    setLearn(newLearn.nameLearn)
                    newArr.push(newLearn.nameLearn)
                    pricesList.push(newLearn.price)

                }

            }).catch(() => {
                setLearn('')
            })

            getStocks().then((stock) => {
                const listStocks = stock.data
                if (stockID !== -1) {
                    const newStock = listStocks.find((elem) => {
                        return elem.id === stockID
                    })
                    setStock(newStock.nameStocks)
                    newArr.push(newStock.nameStocks)
                    pricesList.push(newStock.price)

                }

            }).catch(() => {
                setStock('')
            })

        }).catch(() => {
        })
        setDataService(newArr)
        setPriceList(pricesList)

    }, []);


    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <WrapperBlock onClick={() => handleClick('/services')}>
            <div className={cl.iconService}>
                <GrayService/>
            </div>

            {
                listSelected.length > 0
                    ?
                    <TextBlockInHome>Выбрано уже несколько услуг</TextBlockInHome>
                    // listSelected.map((elem, index) => (
                    //
                    //     listSelected.at(-1) === elem
                    //     ?
                    //         <TextBlockInHome key={index}>{elem}</TextBlockInHome>
                    //         :
                    //         <TextBlockInHome key={index}>{elem},</TextBlockInHome>
                    // ))
                    :
                    <TextBlockInHome>Выберите услугу</TextBlockInHome>
            }

        </WrapperBlock>
    );
};

