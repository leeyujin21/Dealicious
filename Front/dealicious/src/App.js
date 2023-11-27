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
import Chat from './component/Chat';
import Login from './component/Login';
import Join from './component/Join';
import Join2 from './component/Join2';
import Join3 from './component/Join3';
import Join4 from './component/Join4';
import Profiledetail from './component/Profiledetail';
import Mypage from './component/Mypage';
import Profilemodify from './component/Profilemodify';
import Changepassword from './component/Changepassword';
import Mypage_zzim from './component/Mypage_zzim';
import Mypage_review from './component/Mypage_review';

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
                <Route exect path="/chat" element={<Chat/>}/>
                <Route exect path="/login" element={<Login/>}/>
                <Route exect path="/join" element={<Join/>}/>
                <Route exect path="/join2" element={<Join2/>}/>
                <Route exect path="/join3" element={<Join3/>}/>
                <Route exect path="/join4" element={<Join4/>}/>
                <Route exect path="/mypage" element={<Mypage/>}/>
                <Route exect path="/myzzim" element={<Mypage_zzim/>}/>
                <Route exect path="/myreview" element={<Mypage_review/>}/>
                <Route exect path="/profiledetail" element={<Profiledetail/>}/>
                <Route exect path="/profilemodify" element={<Profilemodify/>}/>
                <Route exect path="/changepassword" element={<Changepassword/>}/>
            </Routes>
        </div>
    );
}


export default App;
