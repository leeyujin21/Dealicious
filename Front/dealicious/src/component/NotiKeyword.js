import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";


const NotiKeyword = () => {

 
  return (
    <div className='main' style={{ overflow: "scroll", height: "742px", overflowX: "hidden", paddingTop:"10px" }}>
      <br />
        <p style={{ fontWeight: "bold", textAlign: "left", fontSize:"20px"}}>알림</p>
        <div style={{display:"flex"}}>
          <Link to="/notiactivity" style={{textDecoration:"none", color:"black"}}>
            <td style={{ width: "200px", fontSize:"17px" }}>활동 알림</td>
          </Link>
          <Link to="/notikeyword" style={{textDecoration:"none", color:"black"}}>
            <td style={{ width: "200px",fontSize:"17px", fontWeight: "bold" }}>키워드 알림</td>
          </Link>
        </div>
        <div style={{height:"2px", backgroundColor:"#D9D9D9", width:"330px", position:"relative"}}>
            <div style={{position:"absolute", height:"3px", width:"165px", backgroundColor:"#14C38E", marginLeft:"165px"}}/>
        </div>
        <table style={{marginTop:"15px",borderBottom: "1px solid gray", width:"330px" }}>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "60px" }} rowSpan={3}><img src='gg.png' style={{width:"50px"}}></img></td>
            <td style={{ width: "340px" ,textAlign:"left" }}>등록하신 “밥솥”  키워드 상품이 등록되었습니다.</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray" }}>지금 바로 확인하러 가실까요?</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray"  }}>10분 전</td>
          </tr>
        </table>
        <table style={{marginTop:"15px",borderBottom: "1px solid gray", width:"330px" }}>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "60px" }} rowSpan={3}><img src='gg.png' style={{width:"50px"}}></img></td>
            <td style={{ width: "340px" ,textAlign:"left" }}>등록하신 “밥솥”  키워드 상품이 등록되었습니다.</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray" }}>지금 바로 확인하러 가실까요?</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray"  }}>10분 전</td>
          </tr>
        </table>
        <table style={{marginTop:"15px",borderBottom: "1px solid gray", width:"330px" }}>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "60px" }} rowSpan={3}><img src='gg.png' style={{width:"50px"}}></img></td>
            <td style={{ width: "340px" ,textAlign:"left" }}>등록하신 “밥솥”  키워드 상품이 등록되었습니다.</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray" }}>지금 바로 확인하러 가실까요?</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray"  }}>10분 전</td>
          </tr>
        </table>
        <br/><br/>
        <Link to="/keyword">
        <button style={{width:"150px",height:"40px",borderRadius:"5px", backgroundColor:"#D9D9D9",border:"white",fontWeight:"bold"}}>키워드 등록하기</button>
        </Link>
    </div>
  );
}

export default NotiKeyword;