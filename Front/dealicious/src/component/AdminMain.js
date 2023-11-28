import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";

const AdminMain = () => {

  return (
    <div className='admin' style={{ overflow: "scroll", height: "742px", overflowX: "hidden" }}>
      <br/>
      <div style={{marginLeft:"15px"}}>
      <table style={{marginBottom:"10px"}}>
        <tr>
          <td style={{width:"100px", borderBottom:"3px solid #14C38E",fontWeight:"bold"}}>전체(20)</td>
          <td style={{width:"100px", borderBottom:"1px solid black"}}>결제완료(3)</td>
          <td style={{width:"100px", borderBottom:"1px solid black"}}>수령완료(10)</td>
          <td style={{width:"100px", borderBottom:"1px solid black"}}>정산완료(7)</td>
        </tr>
      </table>
      <table style={{height:"40px",marginBottom:"10px",borderBottom:"2px solid gray"}}>
        <tr>
          <td style={{width:"30px", fontWeight:"bold"}}>No.</td>
          <td style={{width:"100px", fontWeight:"bold"}}>Status</td>
          <td style={{width:"170px", fontWeight:"bold"}}>Subject</td>
          <td style={{width:"100px", fontWeight:"bold"}}>Price</td>
        </tr>
      </table>
      <table>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"100px"}}>결제완료</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"100px"}}>결제완료</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"100px"}}>결제완료</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"100px"}}>결제완료</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"100px"}}>결제완료</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
        </tr>
        
      </table>
      </div>
    </div>
  );
}

export default AdminMain;
