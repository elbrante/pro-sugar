import cl from './Service.module.css'
import {useNavigate} from "react-router-dom";
import {IMaster, IService} from "../../../assets/icons";
import React, {useEffect, useState} from "react";
import {getAllServices, getDataUser, getLearn, getMasters, getStocks} from "../../../api/api";
import {user_id} from "../../../api/dataUser";

export const Service = () => {

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
        getDataUser(user_id).then((res) => {
            // console.log(res.data)
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

                }
            })

            getLearn().then((learn) => {
                const listLearn = learn.data
                if (learnID !== -1) {
                    const newLearn = listLearn.find((elem) => {
                        return elem.id === learnID
                    })
                    setLearn(newLearn.nameLearn)
                    newArr.push(learn.data.nameLearn)
                }

            })

            getStocks().then((stock) => {
                const listStocks = stock.data
                if (stockID !== -1) {
                    const newStock = listStocks.find((elem) => {
                        return elem.id === stockID
                    })
                    setStock(newStock.nameStocks)
                    newArr.push(newStock.nameStocks)
                }

            })

        })
        setArr(newArr)

    }, []);



    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <div className={cl.linkButton} onClick={() => handleClick('/services')}>
            <IService/>

            {
                listSelected.length > 0
                ?
                    listSelected.map((elem, index) => (

                        listSelected.at(-1) === elem
                        ?
                            <span className={cl.text} key={index}>{elem}</span>
                            :
                            <span className={cl.text} key={index}>{elem},</span>
                    ))
                    :
                    <span className={cl.text}>Выберите услугу</span>

            }

        </div>
    );
};

