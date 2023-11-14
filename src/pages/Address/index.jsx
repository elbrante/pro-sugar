import React from 'react';
import cl from './Address.module.css'
import {Header} from "../../components/Header";
import {SkipButton} from "../../components/SkipButton";

export const Address = () => {



    return (
        <div className={cl.address}>
            <div className={cl.firstBlock}>
                <Header text={'Адрес'} link={'/address'}/>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A29bd7a0be2dcaf80b82f081167e21b420224e7e0a93ff4377c35adf94039e243&amp;source=constructor"
                     frameBorder="0"
                    className={cl.map}
                >
                </iframe>
            </div>
            <div className={cl.wrapSkip}>
                <SkipButton link={'/services'}/>
            </div>
        </div>
    );
};

