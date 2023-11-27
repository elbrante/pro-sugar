import cl from './Date.module.css'
import React from "react";
import {GrayDate, IDate} from "../../../assets/icons";
import {useNavigate} from "react-router-dom";
import {WrapperBlock} from "../../../components/WrapperBlock";
import {TextBlockInHome} from "../../../components/TextBlockInHome";

export const Date = () => {

    const navigate = useNavigate()

    function handleClick(link) {
        navigate(link)
    }

    return (
        <WrapperBlock onClick={() => handleClick('/date')}>
            <GrayDate/>
            <TextBlockInHome>Выберите дату</TextBlockInHome>
        </WrapperBlock>
    );
};
