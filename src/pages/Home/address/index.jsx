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
                const selectAddress = address.city + ', ' + address.street
                setSelectAddress(selectAddress)
                setDataAddress(address.address)
            }).catch(() => {

            })
        }).catch(() => {})
    }, []);

    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }
    console.log(selectAddress)

    return (
        <WrapperBlock onClick={() => handleClick('/address')}>
            <div className={cl.iconAddress}>
                <GrayAddress/>
            </div>

            {
                selectAddress
                    ?
                    <div className={cl.wrapText}>
                        <TextBlockInHome>{selectAddress}</TextBlockInHome>
                    </div>

                    :
                    <TextBlockInHome>Выберите адрес</TextBlockInHome>
            }
        </WrapperBlock>
    );
};
