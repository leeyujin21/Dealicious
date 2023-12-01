import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";

const Join3 = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"832px", overflowX:"hidden", paddingTop:"130px", paddingRight:"50px", paddingLeft:"50px"}}>
            <div style={{ width: "330px", textAlign: "right", paddingBottom: "20px" }}>
            <Link to={"/login"}><CgClose size={30} color="darkgray" /></Link>
            </div>
            <a style={{fontSize:"30px", fontWeight:"bold", textAlign:"center", color:"#14C38E"}}>회원가입</a>
            <div style={{paddingBottom:"30px"}}></div>
            <FormGroup style={{textAlign:"left", paddingBottom:"20px"}}>
                <Label for="name" style={{fontSize:"20px"}}>이름</Label>
                <Input type="name" name="name" id="name" style={{height:"55px", width:"325px"}}
                    placeholder="이름(실명을 입력하세요)"/>
            </FormGroup>
            <FormGroup style={{textAlign:"left", paddingBottom:"20px"}}>
                <Label for="nickname" style={{fontSize:"20px"}}>닉네임</Label>
                <Input type="text" name="nickname" id="nickname" style={{height:"55px", width:"325px"}}
                    placeholder="2글자 이상 입력하세요"/>
            </FormGroup>
            <FormGroup style={{textAlign:"left", paddingBottom:"20px"}}>
                <Label for="password" style={{fontSize:"20px"}}>비밀번호</Label>
                <Input type="password" name="password" id="password" style={{height:"55px", width:"325px"}}
                    placeholder="8자리 이상 입력하세요"/>
            </FormGroup>
            <Link to="/join4">
                <Button style={{width:"325px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>다음(3/4)</Button>
            </Link>
        </div>
    )
}

export default Join3;