import {Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Lyout";
import {Home} from "./pages/Home";
import {DatePage} from "./pages/Date";
import {Masters} from "./pages/Masters";
import {Services} from "./pages/Services";
import {AllServices} from "./pages/AllServices";
import {Stocks} from "./pages/Stocks";
import {Learn} from "./pages/Learn";
import {Address} from "./pages/Address";
import {Account} from "./pages/Account/Account";
import {AboutInfo} from "./pages/AboutInfo/AboutInfo";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'date'} element={<DatePage/>}/>
                <Route path={'masters'} element={<Masters/>}/>
                <Route path={'services'} element={<Services/>}/>
                <Route path={'allServices'} element={<AllServices/>}/>
                <Route path={'stocks'} element={<Stocks/>}/>
                <Route path={'learn'} element={<Learn/>}/>
                <Route path={'address'} element={<Address/>}/>
                <Route path={'account'} element={<Account/>}/>
                <Route path={'aboutInfo'} element={<AboutInfo/>}/>
            </Route>
        </Routes>
    );
}

export default App;
