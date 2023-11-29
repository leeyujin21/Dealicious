import { Link } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"50px", paddingRight:"50px", paddingLeft:"50px"}}>
            <a style={{fontSize:"30px", fontWeight:"bold", color:"#14C38E"}}>로그인</a>
            <br/><br/>
            <FormGroup style={{textAlign:"left"}}>
                <Label for="email" style={{fontSize:"20px"}}>이메일</Label>
                <Input type="text" name="email" id="email" style={{height:"55px", width:"325px"}}/>
            </FormGroup>
            <br/>
            <FormGroup style={{textAlign:"left"}}>
                <Label for="password" style={{fontSize:"20px"}}>비밀번호</Label>
                <Input type="password" name="password" id="password" style={{height:"55px", width:"325px"}}/>
            </FormGroup>
            <br/>
            <Button style={{width:"325px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none", marginBottom:"10px"}}>이메일로 로그인</Button>
            <Link to="/join" style={{color:"#999999", textDecoration:"none"}}>회원가입</Link>
            <Button style={{width:"325px", height:"55px", fontSize:"20px", backgroundColor:"#FEE500", color:"#000000", borderStyle:"none", marginTop:"20px"}}>카카오로 시작</Button>
            <div style={{height:"10px"}}></div>
            <Button style={{width:"325px", height:"55px", fontSize:"20px", backgroundColor:"#03C75A", borderStyle:"none"}}>네이버로 시작</Button>
        </div>
    )
}

export default Login;