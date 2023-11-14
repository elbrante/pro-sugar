import React, {useState} from 'react';
import cl from './BlockMap.module.css'
import {IBrownAccordion, IBrownAddress} from "../../../assets/icons";
import classNames from "classnames";

export const BlockMap = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className={cl.wrapBlockMap} onClick={() => setVisible(!visible)}>
            <div className={cl.blockMap}>
                <IBrownAddress/>
                <span className={classNames({
                    [cl.address]: !visible,
                    [cl.wrappText]: visible
                })}>
                    г.Казань, ул.Петербургская 9, ТЦ "Республика"
                </span>
                <button className={classNames({
                    [cl.open]: visible,
                    [cl.close]: !visible
                })}>
                    <IBrownAccordion/>
                </button>
            </div>

            {
                visible
                    ?
                    <div className={cl.blockSecond}>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A29bd7a0be2dcaf80b82f081167e21b420224e7e0a93ff4377c35adf94039e243&amp;source=constructor"
                            frameBorder="0"
                            className={cl.map}
                        >
                        </iframe>
                        <button className={cl.buttonBlockInfo}>
                            Выбрать
                        </button>
                    </div>
                    :
                    ''
            }


        </div>

    );
};

