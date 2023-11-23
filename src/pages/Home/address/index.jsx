import cl from './Address.module.css'
import {useNavigate} from "react-router-dom";
import {IAddress} from "../../../assets/icons";
import React, {useEffect, useState} from "react";
import {getAddress, getDataUser, getMasters} from "../../../api/api";
import {user_id} from "../../../api/dataUser";

export const Address = ({setDataAddress}) => {

    const [selectAddress, setSelectAddress] = useState('')

    useEffect(() => {
        getDataUser(user_id).then((res) => {
            const addressID = res.data.selected_address_id
            getAddress().then((resAddress) => {
                const listAddress = resAddress.data
                const address = listAddress.find((elem) => {
                    return elem.id === addressID
                })
                setSelectAddress(address.address)
                setDataAddress(address.address)
            })
        })
    }, []);

    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <div className={cl.linkButton} onClick={() => handleClick('/address')}>
            <div className={cl.blockIcon}>
                <IAddress/>
            </div>

            {
                selectAddress
                    ?
                    <span className={cl.text}>{selectAddress}</span>
                    :
                    <span className={cl.text}>Выберите адрес</span>
            }

        </div>
    );
};

