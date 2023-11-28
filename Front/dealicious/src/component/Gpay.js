import { IoArrowBackOutline } from "react-icons/io5";
import { Button, Label, Modal } from "reactstrap";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Gpay = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"20px"}}>
            <div style={{textAlign:"left", paddingBottom:"10px"}}>
                <IoArrowBackOutline style={{marginRight:"80px"}} size="30" color="lightgray"/>
            </div>
            <div style={{textAlign:"left", marginLeft:"10px"}}>
                <Label style={{fontSize:"20px", fontWeight:"bold", color:"black"}}>꿀페이 결제하기</Label>
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
                    <img src="../ggul.png" style={{paddingLeft:"10px"}}/>
                </div>
            </div>
            <div style={{textAlign:"left", borderBottom:"1px solid lightgray", paddingBottom:"20px"}}>
                &nbsp;&nbsp;
                <div style={{paddingLeft:"5px", fontWeight:"bold", paddingBottom:"10px"}}>꿀페이 결제수단</div>
                <div style={{paddingLeft:"5px"}}>
                    <Button style={{backgroundColor:"black", fontWeight:"bold"}}>신용카드</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button style={{backgroundColor:"white", color:"black"}}>카카오페이</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button style={{backgroundColor:"white", color:"black"}}>네이버페이</Button>
                </div>
            </div>
            <div style={{textAlign:"left", borderBottom:"1px solid lightgray", paddingBottom:"20px"}}>
                &nbsp;&nbsp;
                <div style={{paddingLeft:"5px"}}>
                    <FaCheck size="20" color="gray"/>&nbsp;&nbsp;
                    <Button style={{backgroundColor:"lightgray", borderStyle:"none"}}>
                        꿀페이 수수료 서비스 이용약관&nbsp;&nbsp;&nbsp;
                        <Link style={{color:"gray", fontWeight:"bold"}} onClick={()=>setModalIsOpen(true)}>자세히
                            <Modal className="main" style={{ 
                                width:"420px", top:"30%"
                            }} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                <div style={{ textAlign: "center", height:"100%"}}>
                                    <div>
                                        <button style={{color:"#14C38E",border:"none",backgroundColor:"white",float:"right", marginRight:"10px", marginTop:"20px"}}onClick={() => setModalIsOpen(false)}>
                                            <IoClose size="27"/>
                                        </button>
                                    </div>
                                    <br/>
                                    <div style={{textAlign:"left"}}>
                                        <div style={{fontWeight:"bold", marginLeft:"20px", marginTop:"25px"}}>
                                            1. 꿀페이 결제 수수료는 얼마인가요?
                                        </div>
                                        <div style={{marginLeft:"37px", marginBottom:"10px"}}>
                                            꿀페이 수수료는 건당 5%입니다.
                                        </div>
                                        <div style={{fontWeight:"bold", marginLeft:"20px"}}>
                                            2. 거래 완료 후 정산은 언제 되나요?
                                        </div>
                                        <div style={{marginLeft:"37px"}}>
                                            영업일 기준 1~3일 소요됩니다.
                                        </div>
                                        <br/><br/>
                                        <div style={{display:"flex"}}>
                                            <div style={{marginLeft:"20px", fontWeight:"bold"}}>
                                                꿀페이 문의하기
                                            </div>
                                            <div style={{marginLeft:"10px", textAlign:"right"}}>
                                                DEALicious 고객센터<br/>
                                                070-6767-4054
                                            </div>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </Modal>
                        </Link>
                    </Button>
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
            <Link to="/gpay_finish">
                <Button style={{width:"330px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>결제하기</Button>
            </Link>
        </div>
    )
}

export default Gpay;