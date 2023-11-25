import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";

const NotiActivity = () => {

  return (
    <div className='notiActivity' style={{ overflow: "scroll", height: "742px", overflowX: "hidden" }}>
      <br />
      <div style={{ marginLeft: "15px" }}>
        <p style={{ fontWeight: "bold", textAlign: "left" }}>알림</p>
        <table>
          <tr>
            <td style={{ width: "200px", borderBottom: "3px solid #14C38E", fontWeight: "bold" }}>활동 알림</td>
            <td style={{ width: "200px", borderBottom: "1px solid black" }}>키워드 알림</td>

          </tr>
        </table>
        <table style={{marginTop:"15px",borderBottom: "1px solid gray" }}>
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
        <table style={{marginTop:"15px",borderBottom: "1px solid gray" }}>
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
        <table style={{marginTop:"15px",borderBottom: "1px solid gray" }}>
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
