import React from 'react';
import cl from './AboutInfo.module.css'
import {TextInfo} from "./TextInfo/TextInfo";
import {ILocal, IPhoneLittle, ISupport, ITelegram, IWebSite} from "../../assets/icons";

export const AboutInfo = () => {
    return (
        <div className={cl.wrapperAboutInfo}>
            <div className={cl.wrappInfo}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aad8b70531ab4b7c9294e67c981d072204813e1cc65f9eb053987b17ec7bc1ed7&amp;source=constructor"
                    height="240" frameBorder="0">
                </iframe>
                <div className={cl.blockInfo}>
                    <div className={cl.wrappIcon}>
                        <ILocal/>
                        <TextInfo firstTitle={'Адрес:'} secondTitle={'ул.Петербургская, 1, Казань'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <IPhoneLittle/>
                        <TextInfo firstTitle={'Телефон: '} secondTitle={'+7 (939) 379 20 63'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <IWebSite/>
                        <TextInfo firstTitle={'Вебсайт: '} secondTitle={'messaeres.tilda.ws'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <ITelegram/>
                        <TextInfo firstTitle={'Телеграм: '} secondTitle={'@messa_eres_ai_bot'}/>
                    </div>
                    <div className={cl.wrappIcon}>
                        <ISupport/>
                        <TextInfo firstTitle={'Тех. поддержка:'} secondTitle={'@messa_eres_ai_bot'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

