import React from 'react';
import cl from './AboutInfo.module.css'
import {TextInfo} from "./TextInfo/TextInfo";
import {ILocal, IPhoneLittle, ISupport, ITelegram, IWebSite} from "../../assets/icons";

export const AboutInfo = () => {
    return (
        <div className={cl.wrapperAboutInfo}>
            <div className={cl.wrappInfo}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A29bd7a0be2dcaf80b82f081167e21b420224e7e0a93ff4377c35adf94039e243&amp;source=constructor"
                        frameBorder="0"
                        className={cl.map}>
                </iframe>
                <div className={cl.blockInfo}>
                    <div className={cl.wrappIcon}>
                        <ILocal/>
                        <TextInfo firstTitle={'Адрес:'} secondTitle={'г. Тольятти, ул. 40 лет Победы 50 б, ТЦ «Чайка», 3 этаж, офис 333'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <IPhoneLittle/>
                        <TextInfo firstTitle={'Телефон: '} secondTitle={'+7 (987) 96-46-776'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <IWebSite/>
                        <TextInfo firstTitle={'Вебсайт: '} secondTitle={''}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <ITelegram/>
                        <TextInfo firstTitle={'Телеграм: '} secondTitle={'@prosugar_records_bot'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <ISupport/>
                        <TextInfo firstTitle={'Тех. поддержка:'} secondTitle={'@prosugar_records_bot'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

