import {Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Lyout";
import {Home} from "./pages/Home";
import {Date} from "./pages/Date";
import {Masters} from "./pages/Masters";
import {Services} from "./pages/Services";
import {AllServices} from "./pages/AllServices";
import {Stocks} from "./pages/Stocks";
import {Learn} from "./pages/Learn";
import {Address} from "./pages/Address";
import {Account} from "./pages/Account/Account";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'date'} element={<Date/>}/>
                <Route path={'masters'} element={<Masters/>}/>
                <Route path={'services'} element={<Services/>}/>
                <Route path={'allServices'} element={<AllServices/>}/>
                <Route path={'stocks'} element={<Stocks/>}/>
                <Route path={'learn'} element={<Learn/>}/>
                <Route path={'address'} element={<Address/>}/>
                <Route path={'account'} element={<Account/>}/>
            </Route>
        </Routes>
    );
}

export default App;
