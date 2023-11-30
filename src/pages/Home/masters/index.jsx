import {useNavigate} from "react-router-dom";
import cl from "./Masters.module.css";
import {GrayMaster, IAddress, IMaster} from "../../../assets/icons";
import React, {useEffect, useState} from "react";
import {getDataUser, getMasters} from "../../../api/api";
import {user_id} from "../../../api/dataUser";
import {WrapperBlock} from "../../../components/WrapperBlock";
import {TextBlockInHome} from "../../../components/TextBlockInHome";


export const Masters = ({setDataMasters}) => {

    const [nameSelectedMaster, setNameSelectedMaster] = useState('')

    useEffect(() => {
        //непонятно, откуда брать user_id. Пока добавил его в dataUser.js, чтобы хоть что-то было
        getDataUser(user_id).then((res) => {
            const selectedMasterId = res.data.selected_master_id
            getMasters().then((resMasters) => {
                const listMasters = resMasters.data
                const master = listMasters.find((master) => {
                    return master.id === selectedMasterId
                })
                setNameSelectedMaster(master.name)
                setDataMasters(master.name)
            }).catch(() => {
                setNameSelectedMaster('Выберите мастера')
            })
        }).catch(() => {})
    }, []);


    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <WrapperBlock onClick={() => handleClick('/masters')}>

            <GrayMaster/>

            {
                nameSelectedMaster
                ?
                    <TextBlockInHome>{nameSelectedMaster}</TextBlockInHome>
                    :
                    <TextBlockInHome>Выберите мастера</TextBlockInHome>
            }

        </WrapperBlock>
    );
};

