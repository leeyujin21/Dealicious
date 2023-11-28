import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

const NotiActivity = () => {

  return (
    <div className='main' style={{ overflow: "scroll", height: "742px", overflowX: "hidden", paddingTop:"10px"}}>
      <br />
      <div>
        <p style={{ fontWeight: "bold", textAlign: "left", fontSize:"20px"}}>알림</p>
        <div style={{display:"flex"}}>
          <Link to="/notiactivity" style={{textDecoration:"none", color:"black"}}>
            <td style={{ width: "200px", fontWeight: "bold", fontSize:"17px" }}>활동 알림</td>
          </Link>
          <Link to="/notikeyword" style={{textDecoration:"none", color:"black"}}>
            <td style={{ width: "200px",sfontSize:"17px" }}>키워드 알림</td>
          </Link>
        </div>
        <div style={{height:"2px", backgroundColor:"#D9D9D9", width:"330px", position:"relative"}}>
            <div style={{position:"absolute", height:"3px", width:"165px", backgroundColor:"#14C38E"}}/>
        </div>
        <table style={{marginTop:"15px",borderBottom: "1px solid gray", width:"330px" }}>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "60px" }} rowSpan={3}><img src='gg.png' style={{width:"50px"}}></img></td>
            <td style={{ width: "340px" ,textAlign:"left" }}>작성하신 “밥솥 팔아요...” 거래가 완료되었습니다.</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray" }}>후기를 작성해주세요!</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray"  }}>5분 전</td>
          </tr>
        </table>
        <table style={{marginTop:"15px",borderBottom: "1px solid gray", width:"330px" }}>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "60px" }} rowSpan={3}><img src='gg.png' style={{width:"50px"}}></img></td>
            <td style={{ width: "340px" ,textAlign:"left" }}>작성하신 “밥솥 팔아요...” 거래가 완료되었습니다.</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray" }}>후기를 작성해주세요!</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray"  }}>5분 전</td>
          </tr>
        </table>
        <table style={{marginTop:"15px",borderBottom: "1px solid gray", width:"330px" }}>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "60px" }} rowSpan={3}><img src='gg.png' style={{width:"50px"}}></img></td>
            <td style={{ width: "340px" ,textAlign:"left" }}>작성하신 “밥솥 팔아요...” 거래가 완료되었습니다.</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray" }}>후기를 작성해주세요!</td>
          </tr>
          <tr style={{ height: "35px"}} >
            <td style={{ width: "340px" ,textAlign:"left", color:"gray"  }}>5분 전</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default NotiActivity;
