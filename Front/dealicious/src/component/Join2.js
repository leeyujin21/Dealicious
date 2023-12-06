import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { IoIosSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import Swal from "sweetalert2";

const Join2 = () => {
    const [typename, setTypename] = useState('');
    const location = useLocation(); // useLocation 훅 사용
    const type = location.state?.type; // join.js에서 전달받은 type
    const navigate = useNavigate();

    const handleClick = () => {
        // typename이 비어 있는지 확인
        if (!typename) {
            // SweetAlert2로 경고창 표시
            Swal.fire({
                icon: 'warning',
                title: '경고',
                text: '키워드를 입력하세요.',
            });
        } else {
            // navigate 함수를 호출하여 Join3.js로 이동하면서 필요한 데이터를 전달
            navigate('/join3', { state: { type: type, typename: typename } });
            console.log(type);
            console.log(typename);
        }
    };

    return (
        <div className='main' style={{ overflow: "scroll", height: "832px", overflowX: "hidden", paddingTop: "130px", paddingRight: "50px", paddingLeft: "50px" }}>
            <div style={{ width: "330px", textAlign: "right", paddingBottom: "20px" }}>
                <Link to={"/login"}><CgClose size={30} color="darkgray" /></Link>
            </div>
            <a style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#14C38E" }}>회원가입</a>
            <div style={{ paddingBottom: "50px" }}></div>
            <FormGroup>
                <br /><br /><br />
                <Label for="select" style={{ fontSize: "25px", fontWeight: "bold" }}>{type=="univ"?"학생":"직장인"}</Label>
                <br />
            </FormGroup>
            <FormGroup style={{ display: "flex", paddingBottom: "162px" }}>
                <Input
                    type="text"
                    name="typename"
                    id="typename"
                    style={{ width: "300px", height: "55px", backgroundColor: "#F9F9F9", border: "1px solid #EDEDED" }}
                    placeholder="키워드를 입력하세요"
                    onChange={(e) => setTypename(e.target.value)}
                    value={typename}
                />&nbsp;
                <IoIosSearch size='35' style={{ marginTop: "10px" }} />
            </FormGroup>
            <Button style={{ width: "325px", height: "55px", fontSize: "20px", backgroundColor: "#14C38E", borderStyle: "none" }}
                onClick={handleClick}>다음(2/4)</Button>

        </div>
    )
}

export default Join2;