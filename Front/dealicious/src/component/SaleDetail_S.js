import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import './text.css';
function SaleDetail_S(){
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
                    <td rowSpan={2}><img src="./profile.png" style={{marginTop:"20px"}} /></td>
                    <div style={{fontSize: "16px", width: "50px",height:"10px",marginLeft:"10px",marginTop:"20px"}}><b>홍길동</b></div>
                    <div style={{marginLeft:"100px"}}><select style={{width:"165px",height:"40px",textAlign:"center",borderRadius:"10px",float:"right"}}>
                        <option value="category">판매중</option>   
                        <option value="mobile">예약중</option>
                        <option value="others">판매완료</option>
                        </select></div> 
                </tr>
                
                    <div style={{marginTop:"-30px",width: "100px", height: "21px",marginLeft:"10px" }}>인하대학교</div>
        
            </table>

            <table><tr><td style={{width:"250px", fontWeight:"bold"}}>상세설명</td><span style={{ textAlign: "right",marginLeft:"15px" }}>A동 근처</span></tr></table>
            <div style={{marginTop:"10px",marginBottom:"15px",border:"1px solid lightgray", height:"200px", borderRadius:"10px", padding:"10px"}}>
                디스펜서 팔아요!
                산지는 3개월 됐는데 거의 안 써서 미개봉 제품이랑 별 차이없습니다!
                A동 8층까지 오시면 5천원 깎아드려요.
            </div>
            <div className='container'>
            <img src="./zzimheart.png" style={{width:"40px",height:"40px", float:"left"}} className='image'/>
            <span className='text'><h4>2</h4></span>
            <span style={{ marginLeft: "50px"}}><b>60000원</b></span><img src="./ggul2.png" className="right-align" style={{ width:"50px",marginLeft: "60px" }} /></div>
            <br/><div style={{ marginLeft:"100px" }}><input type="submit" value="채팅하기" style={{ borderRadius: "10px", width: "107px", height: "44px", backgroundColor: '#14C38E', color: "white" }}></input></div>
            
        </div>
      );
};
export default SaleDetail_S;