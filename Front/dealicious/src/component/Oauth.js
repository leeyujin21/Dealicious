import {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';

const Oauth = () => {
    const dispatch = useDispatch();    
    const {token} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        console.log("token:"+token);
        dispatch({type:"token", payload:token})
        navigate("/join");
    }, [])
}

export default Oauth;