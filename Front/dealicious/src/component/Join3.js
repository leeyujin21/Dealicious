import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import Swal from "sweetalert2";

const Join3 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation(); // useLocation 훅 사용
    const type = location.state?.type; // join.js에서 전달받은 type
    const typename = location.state?.typename; // join.js에서 전달받은 type
    const navigate = useNavigate();

    const handleClick = () => {
        if (!name || !nickname || !password) {
            // SweetAlert2로 경고창 표시
            Swal.fire({
                icon: 'warning',
                title: '경고',
                text: '빈 칸 없이 입력해주세요',
            });
        } else if (nickname.length < 2) {
            // SweetAlert2로 경고창 표시
            Swal.fire({
                icon: 'warning',
                title: '경고',
                text: '닉네임은 2글자 이상 입력하세요',
            });
        } else if (password.length < 8) {
            // SweetAlert2로 경고창 표시
            Swal.fire({
                icon: 'warning',
                title: '경고',
                text: '비밀번호는 8자 이상 입력하세요',
            });
        } else {
            // navigate 함수를 호출하여 Join3.js로 이동하면서 필요한 데이터를 전달
            navigate('/join4', { state: { type, typename, name, nickname, password } });
            console.log(type);
            console.log(typename);
            console.log(name);
            console.log(nickname);
            console.log(password);
        }
    };
    
    
    return (
        <div className='main' style={{ overflow: "scroll", height: "832px", overflowX: "hidden", paddingTop: "130px", paddingRight: "50px", paddingLeft: "50px" }}>
            <div style={{ width: "330px", textAlign: "right", paddingBottom: "20px" }}>
                <Link to={"/login"}><CgClose size={30} color="darkgray" /></Link>
            </div>
            <a style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#14C38E" }}>회원가입</a>
            <div style={{ paddingBottom: "30px" }}></div>
            <FormGroup style={{ textAlign: "left", paddingBottom: "20px" }}>
                <Label for="name" style={{ fontSize: "20px" }}>이름</Label>
                <Input type="name" name="name" id="name" style={{ height: "55px", width: "325px" }}
                    placeholder="이름(실명을 입력하세요)"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </FormGroup>
            <FormGroup style={{ textAlign: "left", paddingBottom: "20px" }}>
                <Label for="nickname" style={{ fontSize: "20px" }}>닉네임</Label>
                <Input type="text" name="nickname" id="nickname" style={{ height: "55px", width: "325px" }}
                    placeholder="2글자 이상 입력하세요"
                    onChange={(e) => setNickname(e.target.value)}
                    value={nickname}
                />
            </FormGroup>
            <FormGroup style={{ textAlign: "left", paddingBottom: "20px" }}>
                <Label for="password" style={{ fontSize: "20px" }}>비밀번호</Label>
                <Input type="password" name="password" id="password" style={{ height: "55px", width: "325px" }}
                    placeholder="8자리 이상 입력하세요"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </FormGroup>
            <Button style={{ width: "325px", height: "55px", fontSize: "20px", backgroundColor: "#14C38E", borderStyle: "none" }}
                onClick={handleClick}>다음(3/4)</Button>

        </div>
    )
}

export default Join3;