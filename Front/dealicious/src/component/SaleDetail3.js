import React, { useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';

function SaleDetail3() {
    return (
        <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden" }}>
            <div style={{marginTop:"10px", marginBottom:"20px"}}>
                <IoArrowBackOutline size="30" color="14C38E" />
                <span style={{ color: "#14C38E", fontSize: "25px", textAlign: "center", marginLeft: "75px" }}><b> 볼링공 팝니다!</b></span>
            </div>

            <img src="./3.png" style={{ width: "385px", height: "210px", borderRadius:"10px"}} />
            <div style={{ marginTop: "15px" }}>
                <div style={{display:"flex"}}>
                    <div rowSpan={2}><img src="./profile.png" /></div>
                    <div style={{marginTop:"7.5px", fontSize: "16px", width: "180px", marginLeft:"10px" }}>
                        <b>홍길동</b><br/>
                        인하대학교
                    </div>
                    <div style={{border:"1px solid lightgray", marginTop:"12.5px", borderRadius: "10px", width: "133px", height: "45px", textAlign: "center" }}>
                        <div style={{marginTop:"8.5px"}}>판매중</div>
                    </div>
                </div>

                &nbsp;&nbsp;&nbsp;
            </div>
            <div style={{textAlign:"left"}}><b>가전제품</b></div>
            <tr>
                <td style={{ textAlign: "left", width:"200px" }}>장소: C동 3층근처</td>
                <td style={{ width: "250px", fontWeight: "bold",textAlign:"right" }}>가격: 22,000원</td>
            </tr>
            <Input type="textarea" style={{ width: "385px", marginTop: "10px", marginBottom: "15px", height: "300px", resize: "none", backgroundColor: "white" }} disabled
                value="에보나이트 볼링공 팔아요! C동 3층까지 오시면 5천원 깎아드려요.">

            </Input>
            <div style={{ display: "flex" }}>
                <div style={{position:"relative", marginTop:"2px"}}>
                    <img src="./zzimheart.png" style={{verticalAlign:"middle"}}/>
                    <div style={{width:"20px", height:"20px" ,position:"absolute", transform: "translate(70%, -165%)", textAlign:"center", color:"white", fontWeight:"bold"}}>12</div>
                </div>
                <div>
                    <img src="./ggul2.png" style={{ width: "50px", marginLeft: "176px"}} />
                    <Link to="/chat">
                        <span style={{ textAlign: "right" }}><input type="submit" value="채팅하기" style={{ borderRadius: "5px", width: "100px", height: "45px", backgroundColor: '#14C38E', color: "white", borderStyle: "none", marginLeft:"10px" }}></input></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default SaleDetail3;