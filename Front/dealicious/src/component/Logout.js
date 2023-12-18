import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {persistor} from '../App';
const Logout = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type:"token", payload:''})
        dispatch({type:"user", payload:''})
        persistor.purge();
        window.location.href="/mypagenl";
    }, [])
}

export default Logout;