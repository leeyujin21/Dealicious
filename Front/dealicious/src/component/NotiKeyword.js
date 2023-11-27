import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";


const NotiKeyword = () => {

 
  return (
    <div className='notiKeyword' style={{ overflow: "scroll", height: "742px", overflowX: "hidden" }}>
      <br />
      <div style={{ marginLeft: "15px" }}>
        <p style={{ fontWeight: "bold", textAlign: "left" }}>알림</p>
        <table>
          <tr>
          <td style={{ width: "200px", borderBottom: "1px solid black" }}>활동 알림</td>
            <td style={{ width: "200px", borderBottom: "3px solid #14C38E", fontWeight: "bold" }}>키워드 알림</td>
          </tr>
        </table>
        <table style={{marginTop:"15px",borderBottom: "1px solid gray" }}>
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
        <table style={{marginTop:"15px",borderBottom: "1px solid gray" }}>
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
        <table style={{marginTop:"15px",borderBottom: "1px solid gray" }}>
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
    </div>
  );
}

export default NotiKeyword;