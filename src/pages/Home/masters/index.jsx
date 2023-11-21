import {useNavigate} from "react-router-dom";
import cl from "./Masters.module.css";
import {IAddress, IMaster} from "../../../assets/icons";
import React, {useEffect, useState} from "react";
import {getDataUser, getMasters} from "../../../api/api";
import {user_id} from "../../../api/dataUser";


export const Masters = () => {

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
            })
        })
    }, []);


    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <div className={cl.linkButton} onClick={() => handleClick('/masters')}>
            <IMaster/>

            {
                nameSelectedMaster
                ?
                    <span className={cl.text}>{nameSelectedMaster}</span>
                    :
                    <span className={cl.text}>Выберите мастера</span>
            }

        </div>
    );
};

