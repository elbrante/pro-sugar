import cl from './Address.module.css'
import {useNavigate} from "react-router-dom";
import {GrayAddress, IAddress} from "../../../assets/icons";
import React, {useEffect, useState} from "react";
import {getAddress, getDataUser, getMasters} from "../../../api/api";
import {user_id} from "../../../api/dataUser";
import {WrapperBlock} from "../../../components/WrapperBlock";
import {TextBlockInHome} from "../../../components/TextBlockInHome";

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
                console.log(address.address)
                setSelectAddress(address.address)
                setDataAddress(address.address)
            }).catch(() => {
                setSelectAddress('')
            })
        })
    }, []);

    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <WrapperBlock onClick={() => handleClick('/address')}>

            <GrayAddress/>

            {
                selectAddress
                    ?
                    <TextBlockInHome>{selectAddress}</TextBlockInHome>
                    :
                    <TextBlockInHome>Выберите адрес</TextBlockInHome>
            }
        </WrapperBlock>
    );
};

