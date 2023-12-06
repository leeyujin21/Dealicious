import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Join4 = () => {
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const location = useLocation(); // useLocation 훅 사용
    const type = location.state?.type; // join.js에서 전달받은 type
    const typename = location.state?.typename;
    const name = location.state?.name;
    const nickname = location.state?.nickname;
    const password = location.state?.password;
    const token = useSelector(state => state.persistedReducer.token);

    const join = (e) => {
        e.preventDefault();

        // 이메일과 전화번호 유효성 검사
        if (!validateEmail(email)) {
            // 이메일이 유효하지 않으면 SweetAlert2로 경고창 표시
            Swal.fire({
                icon: 'warning',
                title: '경고',
                text: '이메일 형식이 올바르지 않습니다.',
            });
            return; // 함수 종료
        }

        if (!validatePhoneNumber(tel)) {
            // 전화번호가 유효하지 않으면 SweetAlert2로 경고창 표시
            Swal.fire({
                icon: 'warning',
                title: '경고',
                text: '전화번호 형식이 올바르지 않습니다.',
            });
            return; // 함수 종료
        }

        // 입력값이 유효하면 회원가입 요청
        const userData = {
            email: email,
            tel: tel,
            password: password,
            type: type,
            typename: typename,
            name: name,
            nickname: nickname
        };

        console.log(userData);

        axios.post("http://localhost:8090/join", userData, {
            headers: {
                Authorization: token,
            }
        })
            .then(res => {
                console.log(res.data);
                window.location.href = "/";
            })
            .catch(err => {
                console.log(err);
            });
    }

    // 이메일 유효성 검사 함수
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // 전화번호 유효성 검사 함수
    const validatePhoneNumber = (tel) => {
        // 전화번호는 필요에 따라 추가적인 유효성 검사를 수행할 수 있습니다.
        return true; // 임시로 true를 반환하도록 설정
    };

    return (
        <div className='main' style={{ overflow: "scroll", height: "832px", overflowX: "hidden", paddingTop: "130px", paddingRight: "50px", paddingLeft: "50px" }}>
            <div style={{ width: "330px", textAlign: "right", paddingBottom: "20px" }}>
                <Link to={"/login"}><CgClose size={30} color="darkgray" /></Link>
            </div>
            <a style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#14C38E" }}>회원가입</a>
            <div style={{ paddingBottom: "30px" }}></div>
            <FormGroup style={{ textAlign: "left", paddingBottom: "20px" }}>
                <Label for="email" style={{ fontSize: "20px" }}>이메일</Label>
                <Input type="email" name="email" id="email" style={{ height: "55px", width: "325px" }}
                    placeholder="형식에 맞게 입력하세요"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </FormGroup>
            <FormGroup style={{ textAlign: "left", display: "flex" }}>
                <Input type="text" name="nickname" id="nickname" style={{ height: "55px", width: "210px" }}
                    placeholder="인증번호 6자리"
                />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button style={{ backgroundColor: "#14C38E", color: "white", borderStyle: "none", fontSize: "18px", width: "100px" }}>
                    인증하기
                </Button>
            </FormGroup>
            <FormGroup style={{ textAlign: "left", paddingBottom: "78px" }}>
                <Label for="tel" style={{ fontSize: "20px" }}>전화번호</Label>
                <Input type="text" name="tel" id="tel" style={{ height: "55px", width: "325px" }}
                    placeholder="010-XXXX-XXXX"
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                />
            </FormGroup>
            <Button style={{ width: "325px", height: "55px", fontSize: "20px", backgroundColor: "#14C38E", borderStyle: "none" }} onClick={join}>가입하기</Button>
        </div>
    );
}

export default Join4;
