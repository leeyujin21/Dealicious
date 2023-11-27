import Avvvatars from "avvvatars-react";
import { useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { RiHeart3Line } from "react-icons/ri";

const Mypage_zzim = () => {
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const fileInput = useRef(null)
    function toProfileDetail(e) {
        window.location.href="/profiledetail"
    }

    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"50px"}}>
            <FormGroup style={{textAlign:"left", paddingBottom:"10px"}}>
                <IoArrowBackOutline style={{marginRight:"80px"}} size="30" color="#14C38E"/>
                <Label style={{fontSize:"25px", fontWeight:"bold", color:"#14C38E"}}>마이페이지</Label>
            </FormGroup>
            <div style={{paddingBottom:"30px", display:"flex", paddingBottom:"30px"}}>
                <Avvvatars 
                    src={Image} 
                    style={{margin:'20px'}} 
                    size={65} 
                    onClick={()=>{fileInput.current.click()}}
                />
                &nbsp;&nbsp;
                <a style={{fontSize:"20px", fontWeight:"bold", textAlign:"left", paddingLeft:"20px"}}>
                    &nbsp;홍길동
                    <br/>
                    <div>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                    </div>
                </a>&nbsp;&nbsp;
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={toProfileDetail} style={{width:"100px", height:"35px", fontSize:"15px",
                    backgroundColor:"#D9D9D9", borderStyle:"none", borderRadius:"20px"}}>내 정보 수정
                </Button>
            </div>
            <div style={{textAlign:"left"}}>
                &nbsp;
                <Link to="/mypage" style={{fontSize:"18px", color:"black", textDecoration:"none"}}>내가 쓴 글(9)</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/myzzim" style={{fontSize:"18px", fontWeight:"bold", color:"black", textDecoration:"none"}}>찜한 글(3)</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/myreview" style={{fontSize:"18px", color:"black", textDecoration:"none"}}>받은 후기(2)</Link>   
            </div> 
            <div style={{height:"2px", backgroundColor:"#D9D9D9", width:"330px", position:"relative"}}>
                <div style={{position:"absolute", height:"3px", width:"90px", backgroundColor:"#14C38E", marginLeft:"110px"}}/>
            </div>
            <div style={{height:"10px"}}/>
            <div style={{height:"10px"}}/>
            <div style={{ display:"inline-block", paddingRight:"10px"}}>
                <div style ={{width:"100px", height:"100px", 'background-color':"red", borderRadius:"10px", position:"relative"}}>
                    <div style={{textAlign:"left", marginLeft:"5px"}}>
                        <RiHeart3Line color="white" size="20"/>
                    </div>
                </div>
                <div style={{textAlign:"left"}}>
                    50,000원
                </div>
                <div style={{textAlign:"left"}}>
                    <a style={{fontSize:"11px"}}>접시 세트 판매합니다.</a>
                </div>
            </div>
            <div style={{ display:"inline-block", paddingRight:"10px"}}>
                <div style ={{width:"100px", height:"100px", 'background-color':"red", borderRadius:"10px"}}/>
                <div style={{textAlign:"left"}}>
                    50,000원
                </div>
                <div style={{textAlign:"left"}}>
                    <a style={{fontSize:"11px"}}>접시 세트 판매합니다.</a>
                </div>
            </div>
            <div style={{ display:"inline-block"}}>
                <div style ={{width:"100px", height:"100px", 'background-color':"red", borderRadius:"10px"}}/>
                <div style={{textAlign:"left"}}>
                    50,000원
                </div>
                <div style={{textAlign:"left"}}>
                    <a style={{fontSize:"11px"}}>접시 세트 판매합니다.</a>
                </div>
            </div>
            {/* <div style ={{width:"100px", height:"100px", 'background-color':"red", display:"inline-block", borderRadius:"10px"}}/>
            &nbsp;&nbsp;&nbsp;
            <div style ={{width:"100px", height:"100px", 'background-color':"red", display:"inline-block", borderRadius:"10px"}}/> */}
        </div>
    )
}

export default Mypage_zzim;