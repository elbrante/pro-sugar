import {Outlet} from "react-router-dom";
import cl from '../App.module.css';

export const Layout = () => {
    return (
        <main className={cl.App}>
            <Outlet/>
        </main>
    );
};
