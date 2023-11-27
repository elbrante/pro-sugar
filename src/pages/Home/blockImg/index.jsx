import cl from './BlockImg.module.css'
import stockImg from '../../../assets/stockImg.png'
import {Gift} from "../../../assets/icons";

export const BlockImg = () => {
    return (
        <div className={cl.blockImg}>
            <img src={stockImg}/>
            <div className={cl.descStock}>
                <span className={cl.name}>Салон красоты «White»</span>
                <span className={cl.period}>Акция действует до 12.12.2023</span>
            </div>
            <div className={cl.stockBlock}>
                <span className={cl.nameStock}>МАНИКЮР ПРИ ОКРАШИВАНИИ В ПОДАРОК</span>
                <Gift/>
            </div>
        </div>
    );
};

