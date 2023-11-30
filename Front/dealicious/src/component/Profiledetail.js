import { Button, FormGroup, Input, Label } from "reactstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Avvvatars from 'avvvatars-react';

const Profiledetail = () => {
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const fileInput = useRef(null)

    return (
        <div className='main' style={{overflow:"scroll", height:"732px", overflowX:"hidden", paddingTop:"50px", paddingLeft:"50px", paddingRight:"50px"}}>
            <FormGroup style={{textAlign:"left", paddingBottom:"10px"}}>
                <Link to="/mypage"><IoArrowBackOutline style={{marginRight:"80px"}} size="30" color="#14C38E"/></Link>
                <Label style={{fontSize:"25px", fontWeight:"bold", color:"#14C38E"}}>마이페이지</Label>
            </FormGroup>
            <div style={{paddingBottom:"30px"}}>
                <Avvvatars 
                    src={Image} 
                    style={{margin:'20px'}} 
                    size={65} 
                    onClick={()=>{fileInput.current.click()}}/>
            </div>
            <div style={{marginLeft:"5px"}}>
                <FormGroup style={{textAlign:"left", display:"flex"}}>
                    <Label for="name" style={{fontSize:"20px", width:"100px"}}>이름</Label>
                    <Label for="name" style={{fontSize:"20px"}}>박철현</Label>
                </FormGroup>
                <FormGroup style={{textAlign:"left", display:"flex"}}>
                    <Label for="nickname" style={{fontSize:"20px", width:"100px"}}>닉네임</Label>
                    <Label for="nickname" style={{fontSize:"20px"}}>홍길동</Label>
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
                <FormGroup style={{textAlign:"left", display:"flex",paddingBottom:"24px"}}>
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

export default Profiledetail;