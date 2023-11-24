import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Main from './component/Main';
import './index.css';
import DEALBottom from './component/DEALBottom';
import DEALTop from './component/DEALTop';

function App() {
    return (
        <div className='App' style={{height:"742px"}}>
            <Routes>
                <Route exect path="/" element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;
