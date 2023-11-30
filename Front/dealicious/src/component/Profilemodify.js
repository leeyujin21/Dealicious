import { Button, FormGroup, Input, Label } from "reactstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Avvvatars from 'avvvatars-react';

const Profilemodify = () => {
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const fileInput = useRef(null)
    const [files, setFiles] = useState([]);
    const fileChange = (e) => {
        if(e.target.files.length>0){
            setFiles([...files, e.target.files[0]]);
        }
    }

    return (
        <div className='main' style={{overflow:"scroll", height:"732px", overflowX:"hidden", paddingTop:"50px", paddingLeft:"50px", paddingRight:"50px"}}>
            <FormGroup style={{textAlign:"left", paddingBottom:"10px"}}>
            <Link to="/profiledetail"><IoArrowBackOutline style={{marginRight:"80px"}} size="30" color="#14C38E"/></Link>
                <Label style={{fontSize:"25px", fontWeight:"bold", color:"#14C38E"}}>마이페이지</Label>
            </FormGroup>
            <div style={{paddingBottom:"30px", display:"flex"}}>
                <Avvvatars 
                    src={Image} 
                    style={{margin:'20px'}} 
                    size={65} 
                    onClick={()=>{fileInput.current.click()}}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{lineHeight:"65px"}}>
                    <Button style={{width:"130px", height:"35px", fontSize:"15px",
                        backgroundColor:"#14C38E", borderStyle:"none", borderRadius:"20px"}} onClick={()=>document.getElementById("file").click()}>프로필 사진 변경
                    </Button>
                </div>
                <Input name="file" type="file" id="file" accept="image/*" onChange={fileChange} hidden/>
            </div>
            <div style={{marginLeft:"5px"}}>
                <FormGroup style={{textAlign:"left", display:"flex"}}>
                    <Label for="name" style={{fontSize:"20px", width:"100px"}}>이름</Label>
                    <Label for="name" style={{fontSize:"20px"}}>박철현</Label>
                </FormGroup>
                <FormGroup style={{textAlign:"left", display:"flex"}}>
                    <Label for="nickname" style={{fontSize:"20px", width:"100px", lineHeight:"44px"}}>닉네임</Label>
                    <Input type="text" for="nickname" style={{fontSize:"20px", width:"120px"}} value="홍길동"/>
                    &nbsp;&nbsp;
                    <Button style={{width:"100px", fontSize:"17px",
                        backgroundColor:"#14C38E", borderStyle:"none", height:"44px"}}>중복확인</Button>
                </FormGroup>
                <FormGroup style={{textAlign:"left", display:"flex"}}>
                    <Label for="email" style={{fontSize:"20px", width:"100px"}}>이메일</Label>
                    <Label for="email" style={{fontSize:"20px"}}>dong2@inha.ac.kr</Label>
                </FormGroup>
                <FormGroup style={{textAlign:"left", display:"flex"}}>
                    <Label for="univ" style={{fontSize:"20px", width:"100px"}}>학교</Label>
                    <Label for="univ" style={{fontSize:"20px"}}>인하대학교</Label>
                </FormGroup>
                <FormGroup style={{textAlign:"left", display:"flex"}}>
                    <Label for="phonenum" style={{fontSize:"20px", width:"100px"}}>전화번호</Label>
                    <Label for="phonenum" style={{fontSize:"20px"}}>010-1234-5678</Label>
                </FormGroup>
                <FormGroup style={{textAlign:"left", display:"flex", paddingBottom:"10px"}}>
                    <Label for="accountid" style={{fontSize:"20px", width:"100px"}}>계좌번호</Label>
                    <Label for="accountid" style={{fontSize:"20px"}}>110-54219-86 신한</Label>
                </FormGroup>
            </div>
            <Link to="/profilemodify">
                <Button style={{width:"325px", height:"55px", fontSize:"20px",
                    backgroundColor:"#14C38E", borderStyle:"none"}}>수정하기</Button>
            </Link>
            <div style={{paddingTop:"5px"}}>
                <Link to="/changepassword" style={{textDecoration:"none", color:"#999999"}}>비밀번호 변경하기</Link>
            </div>
        </div>
    )
}

export default Profilemodify;