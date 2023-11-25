import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Main from './component/Main';
import './index.css';
import DEALBottom from './component/DEALBottom';
import DEALTop from './component/DEALTop';
import AdminMy from './component/AdminMy';
import AdminMyModi from './component/AdminMyModi';
import AdminMain from './component/AdminMain';
import AdminSettle from './component/AdminSettle';
import AdminSettleList from './component/AdminSettleList';
import NotiActivity from './component/NotiActivity';
import NotiKeyword from './component/NotiKeyword';
import Keyword from './component/Keyword';
import Search from './component/Search';

function App() {
    return (
        <div className='App' style={{height:"742px"}}>
            <Routes>
                <Route exect path="/" element={<Main/>}/>
                <Route exect path="/adminmy" element={<AdminMy/>}/>
                <Route exect path="/adminmymodi" element={<AdminMyModi/>}/>
                <Route exect path="/adminmain" element={<AdminMain/>}/>
                <Route exect path="/adminsettle" element={<AdminSettle/>}/>
                <Route exect path="/adminsettlelist" element={<AdminSettleList/>}/>
                <Route exect path="/notiactivity" element={<NotiActivity/>}/>
                <Route exect path="/notikeyword" element={<NotiKeyword/>}/>
                <Route exect path="/keyword" element={<Keyword/>}/>
                <Route exect path="/search" element={<Search/>}/>
            </Routes>
        </div>
    );
}


export default App;
