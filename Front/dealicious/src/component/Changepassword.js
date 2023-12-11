import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Changepassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [errornew, setErrorNew] = useState('');
    const [errorcheck, setErrorCheck] = useState('');
    const token = useSelector(state => state.persistedReducer.token);
    const handleChangePassword = (e) => {
        const value = e.target.value;
        if (newPassword.length < 8) {
            setErrorNew('새 비밀번호는 8자리 이상이어야 합니다.');
            return;
        } else {
            setErrorNew(''); // 에러 초기화
        }

        if (newPassword !== confirmNewPassword) {
            setErrorCheck('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
            return;
        } else {
            setErrorCheck(''); // 에러 초기화
        }
        // 서버로 요청을 보내는 코드
        axios.put('http://localhost:8090/changepassword', {
            currentPassword,
            newPassword,
            confirmNewPassword,
        },{headers: {
            Authorization: token,
        },})
            .then(response => {
                console.log(response.data);
                // 비밀번호 변경 성공 시 처리
            })
            .catch(error => {
                console.error(error.response.data);
                // 에러 발생 시 처리
                if(error.response.data=="현재 비밀번호가 일치하지 않습니다."){
                    setError("현재비밀번호와 일치하지 않습니다")
                }
            });
    };

    return (
        <div className='main' style={{ overflow: "scroll", height: "732px", overflowX: "hidden", paddingTop: "50px", paddingLeft: "50px", paddingRight: "50px" }}>
            <FormGroup style={{ textAlign: "left", paddingBottom: "10px" }}>
                <Link to="/profiledetail"><IoArrowBackOutline style={{ marginRight: "75px" }} size="30" color="#14C38E" /></Link>
                <Label style={{ fontSize: "25px", fontWeight: "bold", color: "#14C38E" }}>비밀번호 변경</Label>
            </FormGroup>
            <div style={{ paddingBottom: "30px" }}></div>
            <FormGroup style={{ textAlign: "left" }}>
                <Label for="curpw" style={{ fontSize: "20px" }}>현재 비밀번호</Label>
                <Input type="password" name="curpw" id="curpw" style={{ height: "55px", width: "325px" }}
                    placeholder="현재 비밀번호를 입력하세요" onChange={(e) => setCurrentPassword(e.target.value)} />
                <div style={{ color: 'red', fontSize: '14px', marginTop: '5px', height: '10px', textAlign: 'left' }}>{error}</div>
            </FormGroup>
            <br />
            <FormGroup style={{ textAlign: "left" }}>
                <Label for="newpw" style={{ fontSize: "20px" }}>새 비밀번호</Label>
                <Input type="password" name="newpw" id="newpw" style={{ height: "55px", width: "325px" }}
                    placeholder="새 비밀번호를 입력하세요" onChange={(e) => setNewPassword(e.target.value)} />
                <div style={{ color: 'red', fontSize: '14px', marginTop: '5px', height: '10px', textAlign: 'left' }}>{errornew}</div>
            </FormGroup>
            <FormGroup style={{ textAlign: "left", paddingBottom: "63px" }}>
                <Label for="newpwrp" style={{ fontSize: "20px" }}>비밀번호 다시 입력하기</Label>
                <Input type="password" name="newpwrp" id="newpwrp" style={{ height: "55px", width: "325px" }}
                    placeholder="한 번 더 입력하세요" onChange={(e) => setConfirmNewPassword(e.target.value)} />
                <div style={{ color: 'red', fontSize: '14px', marginTop: '5px', height: '10px', textAlign: 'left' }}>{errorcheck}</div>
            </FormGroup>

            <Button style={{ width: "325px", height: "55px", fontSize: "20px", backgroundColor: "#14C38E", borderStyle: "none" }} onClick={handleChangePassword}>변경하기</Button>
        </div>
    );
}

export default Changepassword;
