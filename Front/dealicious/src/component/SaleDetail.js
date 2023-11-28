import React, { useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import { Input } from 'reactstrap';

function SaleDetail() {
    return (
        <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "742px", overflowX: "hidden" }}>
            <br />
            <div>
            <IoArrowBackOutline size="30" color="14C38E" />
            <span style={{ color: "#14C38E", fontSize: "25px", textAlign: "center",marginLeft:"50px" }}><b>디스펜서 팝니다!</b></span></div>
            <br/><b>가전제품</b><br />
            <img src="./1.png" style={{ width: "324px", height: "209px" }} />
            <table style={{ marginTop: "15px" }}>
                <tr>
                    <td rowSpan={2}><img src="./profile.png" /></td>
                    <td style={{ fontSize: "16px", width: "50px" }}><b>홍길동</b></td>
                    <Input style={{ borderRadius: "10px", width: "162px", height: "45px", textAlign: "center" }}placeholder='판매중'>
                    </Input>
                </tr>
                <tr>
                    <div style={{ width: "100px", height: "21px" }}>인하대학교</div>

                </tr>

                &nbsp;&nbsp;&nbsp;
            </table>

            <table><tr><td style={{width:"250px", fontWeight:"bold"}}>상세설명</td><td style={{ textAlign: "right" }}>A동 근처</td></tr></table>
            <div style={{marginTop:"10px",marginBottom:"15px",border:"1px solid lightgray", height:"200px", borderRadius:"10px", padding:"10px"}}>
                디스펜서 팔아요!
                산지는 3개월 됐는데 거의 안 써서 미개봉 제품이랑 별 차이없습니다!
                A동 8층까지 오시면 5천원 깎아드려요.
            </div>
            <img src="./zzimheart.png" /><span style={{ marginLeft: "20px"}}>60000원</span><img src="./ggul2.png" className="right-align" style={{ width:"50px",marginLeft: "20px", marginRight:"20px" }} />
            <span style={{ textAlign: "right" }}><input type="submit" value="채팅하기" style={{ borderRadius: "10px", width: "103px", height: "44px", backgroundColor: '#14C38E', color: "white" }}></input></span>
        </div>
    );
};
export default SaleDetail;