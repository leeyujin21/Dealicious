import { Link } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";

const AdminJoin = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"832px", overflowX:"hidden", paddingTop:"130px", paddingRight:"50px", paddingLeft:"50px"}}>
            <div style={{ display: "flex", width:"325px", textAlign:"center" }} className="main">
                <div style={{fontSize:"30px", fontWeight:"bold", textAlign:"center", color:"#14C38E", marginLeft:"88px"}}>
                    회원가입
                </div>
                <div className="logo" style={{ color: "black", fontWeight: "bold", marginLeft: "-21px", fontSize: "17px", marginTop:"-10px" }}>
                    admin
                </div>
            </div>
            {/* <a style={{fontSize:"30px", fontWeight:"bold", textAlign:"center", color:"#14C38E"}}>회원가입</a> */}
            <FormGroup style={{textAlign:"left", paddingBottom:"20px"}}>
                <Label for="name" style={{fontSize:"20px"}}>이름</Label>
                <Input type="name" name="name" id="name" style={{height:"55px", width:"325px"}}
                    placeholder="이름(실명을 입력하세요)"/>
            </FormGroup>
            <FormGroup style={{textAlign:"left", paddingBottom:"20px"}}>
                <Label for="nickname" style={{fontSize:"20px"}}>관리자코드</Label>
                <Input type="text" name="nickname" id="nickname" style={{height:"55px", width:"325px"}}
                    placeholder="유효한 관리자코드를 보내주세요"/>
            </FormGroup>
            <FormGroup style={{textAlign:"left", paddingBottom:"20px"}}>
                <Label for="password" style={{fontSize:"20px"}}>비밀번호</Label>
                <Input type="password" name="password" id="password" style={{height:"55px", width:"325px"}}
                    placeholder="8자리 이상 입력하세요"/>
            </FormGroup>
            <Link to="/adminlogin">
                <Button style={{width:"325px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>관리자로 가입하기</Button>
            </Link>
        </div>
    )
}

export default AdminJoin;