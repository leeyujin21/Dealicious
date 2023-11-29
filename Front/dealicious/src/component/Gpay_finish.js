import { IoArrowBackOutline } from "react-icons/io5";
import { Button, Label, Modal } from "reactstrap";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Gpay_finish = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", padding:"20px 50px 0 50px"}}>
            <div style={{textAlign:"left", paddingBottom:"10px"}}>
                <IoArrowBackOutline style={{marginRight:"80px"}} size="30" color="lightgray"/>
            </div>
            <div style={{textAlign:"left", marginLeft:"10px"}}>
                <Label style={{fontSize:"20px", fontWeight:"bold", color:"black"}}>꿀페이 결제완료</Label>
            </div>
            <div style={{textAlign:"left", paddingBottom:"20px", borderBottom:"1px solid lightgray", display:"flex"}}>
                &nbsp;&nbsp;
                <img src="..\1.png"></img>
                <div style={{marginLeft:"10px"}}>
                    디스펜서 팔아요<br/>
                    60,000원
                </div>
            </div>
            <div style={{textAlign:"left", borderBottom:"1px solid lightgray", paddingBottom:"20px"}}>
                &nbsp;&nbsp;
                <div style={{marginBottom:"10px", paddingLeft:"5px"}}>
                    <span style={{color:"gray",}}>거래방법</span>
                    <span style={{fontWeight:"bold", paddingLeft:"20px", fontSize:"18px"}}>직거래</span>
                </div>
                <div style={{paddingLeft:"5px"}}>
                    <span style={{color:"gray"}}>결제수단</span>
                    <img src="../ggul.png" style={{width:"40px", marginLeft:"20px"}}/>
                </div>
            </div>
            <div style={{textAlign:"left", borderBottom:"1px solid lightgray", paddingBottom:"20px"}}>
                &nbsp;&nbsp;
                <div style={{paddingLeft:"5px", fontWeight:"bold", paddingBottom:"10px"}}>꿀페이 결제수단</div>
                <div style={{paddingLeft:"5px"}}>
                    <Button style={{backgroundColor:"black", fontWeight:"bold"}}>신용카드</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            <div style={{textAlign:"right", marginRight:"10px"}}>
                &nbsp;&nbsp;
                <div>
                    수수료: 3,000원
                </div>
                <div style={{fontWeight:"bold"}}>
                    결제 예정 금액: 63,000원
                </div>
            </div>
            <br/>
            <Link to="/pay">
                <Button style={{width:"330px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>이전화면으로 이동</Button>
            </Link>
        </div>
    )
}

export default Gpay_finish;