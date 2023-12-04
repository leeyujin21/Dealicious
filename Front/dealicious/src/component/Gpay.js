import { IoArrowBackOutline } from "react-icons/io5";
import { Button, Label, Modal } from "reactstrap";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Gpay = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pay, setPay] = useState({saletitle:'결제테스트', amount:'1004',buyeremail:'gudtjq444@naver.com'});

    const navigate = useNavigate();

    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);

    const requestPay = () => {
        var IMP = window.IMP;
        IMP.init("imp23063576");
        IMP.request_pay({
            pg: 'html5_inicis.INIpayTest', //테스트 시 html5_inicis.INIpayTest 기재 
            pay_method: 'card',
            merchant_uid: new Date().getTime(), //상점에서 생성한 고유 주문번호
            name: '결제테스트',
            amount: 1004,
            buyer_email: 'gudtjq444@naver.com',
            buyer_name: '개꿀',
            buyer_tel: '010-1234-5678',   //필수 파라미터 입니다.
            buyer_addr: '서울특별시 금천구 독산동',
            buyer_postcode: '123-456',
        }, function (rsp) { // callback
            if (rsp.success) {
                console.log(rsp);
                console.log("결제성공");
                console.log(pay);
                axios.post(`http://localhost:8090/pay`,pay)
                .then(res=> {
                    console.log("어드민 계좌 입금 성공");
                    navigate(`/gpay_finish`)
                })
                .catch(err=> {
                    console.log(err);
                    console.log("어드민 계좌 입금 실패, 관리자 확인 필요");
                })
            } else {
                console.log(rsp);
                console.log("결제실패");
            }
        });
    }

    return (
        <div className='main' style={{overflow:"scroll", height:"732px", overflowX:"hidden", padding:"20px 50px 0 50px"}}>
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
                    <img src="../ggul.png" style={{width:"40px", marginLeft:"20px"}}/>
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
                <Button style={{width:"325px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}} onClick={requestPay}>결제하기</Button>
        </div>
    )
}

export default Gpay;