import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Main from './component/Main';
import './index.css';
import CategoryDetail from './component/CategoryDetail';
import Category2 from './component/Category2';
import Chatlist from './component/Chatlist';
import SaleList from './component/SaleList';
import SaleWrite from './component/SaleWrite';
import SaleDetail from './component/SaleDetail';
import SaleDetail_S from './component/SaleDetail_S';
import SaleModify from './component/SaleModify';




function App() {
    return (
        <div className='App' style={{height:"742px"}}>
            <Routes>
                <Route exect path="/" element={<Main/>}/>
                <Route exect path="/categorydetail" element={<CategoryDetail/>}/>
                <Route path="/category2" element={<Category2/>}></Route>
                <Route path="/chatlist" element={<Chatlist/>}></Route>
                <Route path="/salelist" element={<SaleList/>}></Route>
                <Route path="/salewrite" element={<SaleWrite/>}></Route>
                <Route path="/saledetail" element={<SaleDetail/>}></Route>
                <Route path="/saledetail_s" element={<SaleDetail_S/>}></Route>
                <Route path="/salemodify" element={<SaleModify/>}></Route>
                


            </Routes>
             
        </div>
    );
}

export default App;

