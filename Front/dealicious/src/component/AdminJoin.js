import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";

const AdminJoin = () => {
    const [admin, setAdmin] = useState({ adminid: '', admincode:'', password:'', accountid:'', bank:'' })
    const [adminid, setAdminId] = useState('');
    const [admincode, setAdmincode] = useState('');
    const [password, setPassword] = useState('');
    const [admincodeError, setAdmincodeError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [idError, setIdError] = useState('');
    const [isAdminidAvailable, setIsAdminidAvailable] = useState(false);
    const token = useSelector(state => state.persistedReducer.token);
    const [selected, setSelected] = useState();
    const handleAdmincodeChange = (e) => {
        const value = e.target.value;
        setAdmincode(value);

        // Check if admin code is not 10 characters
        if (value.length !== 10) {
            setAdmincodeError('관리자코드는 10자입니다');
        } else {
            setAdmincodeError('');
        }
    };
    const selectbank = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    }
    const handleIdCheck = () => {
        axios.get("http://localhost:8090/adminidcheck/" + adminid)
            .then(res => {
                console.log(res.data);
                setIsAdminidAvailable(res.data);
                if (res.data) {
                    setIsAdminidAvailable(true)
                    setIdError('사용 가능한 아이디입니다');
                } else {
                    setIsAdminidAvailable(false)
                    setIdError('이미 사용 중인 아이디입니다');
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(e.target.value);
        if (value.length < 8) {
            setPasswordError('비밀번호는 8자리 이상이어야 합니다');
        } else {
            setPasswordError('');
        }
    };

    const adminidInput = (e) => {
        setAdminId(e.target.value)
        setIsAdminidAvailable(false)
    }

    const join = (e) => {
        e.preventDefault();

        if (isAdminidAvailable && password.length >= 8 && admincode.length == 10) {
            // 입력값이 유효하면 회원가입 요청
            const userData = {
                adminid: adminid,
                admincode: admincode,
                password: password
            };
            axios.post("http://localhost:8090/adminjoin", userData, {
                headers: {
                    Authorization: token,
                }
            })
                .then(res => {
                    console.log(res.data);
                    console.log(adminid);
                    console.log(admincode);
                    console.log(password);
                    window.location.href = "/adminlogin";
                })
                .catch(err => {
                    console.error("Error response from server:", err.response);
                });
        } else if (!isAdminidAvailable) {
            console.log("에휴");
            setIdError("중복확인 버튼을 눌러주세요");
        }
    }

    return (
        <div className='main' style={{ overflow: "scroll", height: "832px", overflowX: "hidden", paddingTop: "100px", paddingRight: "50px", paddingLeft: "50px" }}>
            <div style={{ display: "flex", width: "325px", textAlign: "center" }} className="main">
                <div style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#14C38E", marginLeft: "88px" }}>
                    회원가입
                </div>
                <div className="logo" style={{ color: "black", fontWeight: "bold", marginLeft: "-21px", fontSize: "17px", marginTop: "-10px" }}>
                    admin
                </div>
            </div>
            <FormGroup style={{ textAlign: "left", paddingBottom: "20px" }}>
                <Label for="id" style={{ fontSize: "20px" }}>아이디</Label>
                <div style={{ display: "flex" }}>
                    <Input type="text" name="id" id="id" style={{ height: "55px", width: "225px" }}
                        onChange={adminidInput}
                        value={adminid}
                        placeholder="사용할 아이디를 입력해주세요" />
                    <Button style={{
                        width: "90px", fontSize: "17px",
                        backgroundColor: "#14C38E", borderStyle: "none", height: "55px", marginLeft: "10px"
                    }} onClick={handleIdCheck}>중복확인</Button>
                </div>
                <div style={{ color: 'red', fontSize: '14px', marginTop: '5px', height: "10px", textAlign: "left" }}>{idError}</div>
            </FormGroup>
            <FormGroup style={{ textAlign: "left", paddingBottom: "10px" }}>
                <Label for="admincode" style={{ fontSize: "20px" }}>관리자코드</Label>
                <Input
                    type="text"
                    name="admincode"
                    id="admincode"
                    style={{ height: "55px", width: "325px" }}
                    placeholder="유효한 관리자코드를 입력해주세요"
                    value={admincode}
                    onChange={handleAdmincodeChange}
                />
                <div style={{ color: 'red', fontSize: '14px', marginTop: '5px', height: "10px", textAlign: "left" }}>{admincodeError}</div>
            </FormGroup>
            <FormGroup style={{ textAlign: "left" }}>
                <Label for="password" style={{ fontSize: "20px" }}>비밀번호</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    style={{ height: "55px", width: "325px" }}
                    placeholder="8자리 이상 입력하세요"
                    onChange={handlePasswordChange}
                />
                <div style={{ color: 'red', fontSize: '14px', marginTop: '5px', height: "10px", textAlign: "left" }}>{passwordError}</div>
            </FormGroup>
            <FormGroup style={{ textAlign: "left", paddingBottom: "10px" }}>
                <Label for="accountid" style={{ fontSize: "20px", lineHeight: "44px" }}>계좌번호<a style={{ fontSize: "12px", marginLeft: "10px" }}>'-' 없이 숫자만 작성해주세요</a></Label>
                <div style={{ display: "flex" }}>
                    <select style={{ border: "1px solid lightgray", borderRadius: "5px", width: "100px", height: "45px", textAlign: "left" }}
                        name="accountbank" id="accountbank" value={selected} onChange={selectbank}>
                        <option value="국민">국민은행</option>
                        <option value="신한">신한은행</option>
                        <option value="농협">농협은행</option>
                        <option value="우리">우리은행</option>
                        <option value="하나">하나은행</option>
                        <option value="기업">기업은행</option>
                        <option value="카카오">카카오뱅크</option>
                    </select>
                    <Input type="text" for="accountid" name="accountid" id="accountid" style={{ fontSize: "16px", width: "214px", height: "44px", marginLeft: "5px" }}
                        onChange={(e) => setAdmin({ ...admin, accountid: e.target.value })} value={admin.accountid} />
                </div>
            </FormGroup>
            <Button style={{ width: "325px", height: "55px", fontSize: "20px", backgroundColor: "#14C38E", borderStyle: "none" }} onClick={join}>가입하기</Button>
        </div>
    )
}

export default AdminJoin;