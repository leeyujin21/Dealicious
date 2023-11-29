import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";

const Changepassword = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"50px", paddingLeft:"50px", paddingRight:"50px"}}>
            <FormGroup style={{textAlign:"left", paddingBottom:"10px"}}>
                <Link to="/profiledetail"><IoArrowBackOutline style={{marginRight:"75px"}} size="30" color="#14C38E"/></Link>
                <Label style={{fontSize:"25px", fontWeight:"bold", color:"#14C38E"}}>비밀번호 변경</Label>
            </FormGroup>
            <div style={{paddingBottom:"30px"}}></div>
            <FormGroup style={{textAlign:"left"}}>
                <Label for="curpw" style={{fontSize:"20px"}}>현재 비밀번호</Label>
                <Input type="password" name="curpw" id="curpw" style={{height:"55px", width:"325px"}}
                    placeholder="현재 비밀번호를 입력하세요"/>
            </FormGroup>
            <br/>
            <FormGroup style={{textAlign:"left"}}>
                <Label for="newpw" style={{fontSize:"20px"}}>새 비밀번호</Label>
                <Input type="password" name="newpw" id="newpw" style={{height:"55px", width:"325px"}}
                    placeholder="새 비밀번호를 입력하세요"/>
            </FormGroup>
            <FormGroup style={{textAlign:"left", paddingBottom:"63px"}}>
                <Label for="newpwrp" style={{fontSize:"20px"}}>비밀번호 다시 입력하기</Label>
                <Input type="password" name="newpwrp" id="newpwrp" style={{height:"55px", width:"325px"}}
                    placeholder="한 번 더 입력하세요"/>
            </FormGroup>
            <Link to="/join4">
                <Button style={{width:"325px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>변경하기</Button>
            </Link>
        </div>
    )
}

export default Changepassword;