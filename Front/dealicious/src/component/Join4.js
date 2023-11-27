import { Link } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";

const Join4 = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"50px"}}>
            <a style={{fontSize:"30px", fontWeight:"bold", textAlign:"center", color:"#14C38E"}}>회원가입</a>
            <div style={{paddingBottom:"50px"}}></div>
            <FormGroup style={{textAlign:"left"}}>
                <Label for="email" style={{fontSize:"20px"}}>이메일</Label>
                <Input type="text" name="email" id="email" style={{height:"55px", width:"330px"}}
                    placeholder="형식에 맞게 입력하세요"/>
            </FormGroup>
            <FormGroup style={{textAlign:"left", display:"flex"}}>
                <Input type="text" name="nickname" id="nickname" style={{height:"55px", width:"210px"}}
                    placeholder="인증번호 6자리"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button style={{backgroundColor:"#14C38E", color:"white", borderStyle:"none", fontSize:"18px", width:"100px"}}>
                    인증하기
                </Button>
            </FormGroup>
            <br/>
            <FormGroup style={{textAlign:"left"}}>
                <Label for="phonenum" style={{fontSize:"20px"}}>전화번호</Label>
                <Input type="text" name="phonenum" id="phonenum" style={{height:"55px", width:"330px"}}
                    placeholder="010-XXXX-XXXX"/>
            </FormGroup>
            <br/> <br/> <br/> <br/> <br/>
            <Link to="/join4">
                <Button style={{width:"330px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>가입하기</Button>
            </Link>
        </div>
    )
}

export default Join4;