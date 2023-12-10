import {Outlet} from "react-router-dom";
import cl from '../App.module.css';

export const Layout = () => {
    return (
        <main className={cl.App}>
            <Outlet/>
            <footer className={cl.footer}>
                <span className={cl.text}>Сделано в</span>
                <a href={'https://thx-loyalty.com/'} className={cl.link}>Thx loyalty</a>
            </footer>
        </main>
    );
};
