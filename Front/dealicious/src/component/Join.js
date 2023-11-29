import { Link } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";

const Join = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"50px", paddingRight:"50px", paddingLeft:"50px"}}>
            <a style={{fontSize:"30px", fontWeight:"bold", color:"#14C38E"}}>회원가입</a>
            <div style={{paddingBottom:"50px"}}></div>
            <FormGroup>
                <Label for="select" style={{fontSize:"20px"}}>학교 또는 회사를 선택해주세요</Label>
                <br/><br/><br/><br/>
                <Label for="select" style={{fontSize:"22px"}}>학교 OR 회사</Label>
                <br/><br/>
            </FormGroup>
            <FormGroup style={{paddingBottom:"122px"}}>
                <Label style={{marginRight:"50px", fontSize:"20px", fontWeight:"bold"}}>
                    <Input type="radio" name="select" id="select" value="univ"/>학생
                </Label>
                <Label style={{marginRight:"-30px", fontSize:"20px", fontWeight:"bold"}}>
                    <Input type="radio" name="select" id="select" value="com"/>직장인
                </Label>
            </FormGroup>
            <Link to="/join2">
                <Button style={{width:"325px", height:"55px", fontSize:"20px",
                    backgroundColor:"#14C38E", borderStyle:"none"}}>다음(1/4)</Button>
            </Link>
        </div>
    )
}

export default Join;