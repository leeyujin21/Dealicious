import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';

const Oauth2 = () => {
    const dispatch = useDispatch();
    const { token } = useParams();

    useEffect(() => {
        console.log("token:" + token);
        dispatch({ type: "token", payload: token })
        axios.get("http://localhost:8090/user", {
            headers: {
                Authorization: token,
            }
        })
            .then(res => {
                console.log(res)
                dispatch({ type: "user", payload: res.data });
                Swal.fire({
                    title: "로그인 성공",
                    icon: "success",
                    confirmButtonText: "확인",
                }).then(() => {
                    window.location.replace("/");
                });
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
}

export default Oauth2;