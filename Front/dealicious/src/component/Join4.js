import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";

const Join4 = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"832px", overflowX:"hidden", paddingTop:"130px", paddingRight:"50px", paddingLeft:"50px"}}>
            <div style={{ width: "330px", textAlign: "right", paddingBottom: "20px" }}>
                <Link to={"/login"}><CgClose size={30} color="darkgray" /></Link>
            </div>
            <a style={{fontSize:"30px", fontWeight:"bold", textAlign:"center", color:"#14C38E"}}>회원가입</a>
            <div style={{paddingBottom:"30px"}}></div>
            <FormGroup style={{textAlign:"left", paddingBottom:"20px"}}>
                <Label for="email" style={{fontSize:"20px"}}>이메일</Label>
                <Input type="text" name="email" id="email" style={{height:"55px", width:"325px"}}
                    placeholder="형식에 맞게 입력하세요"/>
            </FormGroup>
            <FormGroup style={{textAlign:"left", display:"flex"}}>
                <Input type="text" name="nickname" id="nickname" style={{height:"55px", width:"210px"}}
                    placeholder="인증번호 6자리"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button style={{backgroundColor:"#14C38E", color:"white", borderStyle:"none", fontSize:"18px", width:"100px"}}>
                    인증하기
                </Button>
            </FormGroup>
            <FormGroup style={{textAlign:"left", paddingBottom:"78px"}}>
                <Label for="phonenum" style={{fontSize:"20px"}}>전화번호</Label>
                <Input type="text" name="phonenum" id="phonenum" style={{height:"55px", width:"325px"}}
                    placeholder="010-XXXX-XXXX"/>
            </FormGroup>
            <Link to="/login">
                <Button style={{width:"325px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>가입하기</Button>
            </Link>
        </div>
    )
}

export default Join4;