import { Link } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { IoIosSearch } from "react-icons/io";

const Join2 = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"50px"}}>
            <a style={{fontSize:"30px", fontWeight:"bold", textAlign:"center", color:"#14C38E"}}>회원가입</a>
            <div style={{paddingBottom:"50px"}}></div>
            <FormGroup>
                <br/><br/><br/>
                <Label for="select" style={{fontSize:"25px", fontWeight:"bold"}}>직장인</Label>
                <br/>
            </FormGroup>
            <FormGroup style={{display:"flex"}}>
                <Input type="text" name="search" id="search" style={{width:"300px" ,height:"55px", backgroundColor:"#F9F9F9", border:"1px solid #EDEDED"}}
                placeholder="키워드를 입력하세요"/>&nbsp;
                <IoIosSearch size='35' style={{marginTop:"10px"}}/>
            </FormGroup>
            <br/><br/><br/><br/>
            <Link to="/join3">
                <Button style={{width:"330px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>다음(2/4)</Button>
            </Link>
        </div>
    )
}

export default Join2;