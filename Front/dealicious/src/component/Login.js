import { Button, Col, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"50px"}}>
            <a style={{fontSize:"30px", fontWeight:"bold", color:"#14C38E"}}>로그인</a>
            <br/><br/>
            <FormGroup style={{textAlign:"left"}}>
                <Label for="email" style={{fontSize:"20px"}}>이메일</Label>
                <Input type="text" name="email" id="email" style={{height:"55px", width:"330px"}}/>
            </FormGroup>
            <br/>
            <FormGroup style={{textAlign:"left"}}>
                <Label for="password" style={{fontSize:"20px"}}>비밀번호</Label>
                <Input type="password" name="password" id="password" style={{height:"55px", width:"330px"}}/>
            </FormGroup>
            <br/>
            <Button style={{width:"330px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>이메일로 로그인</Button>
            <br/><br/>
            <a href="join" style={{color:"#999999"}}>회원가입</a>
            <br/><br/>
            <Button style={{width:"330px", height:"55px", fontSize:"20px", backgroundColor:"#FEE500", color:"#000000", borderStyle:"none"}}>카카오로 시작</Button>
            <div style={{height:"10px"}}></div>
            <Button style={{width:"330px", height:"55px", fontSize:"20px", backgroundColor:"#03C75A", borderStyle:"none"}}>네이버로 시작</Button>
        </div>
    )
}

export default Login;