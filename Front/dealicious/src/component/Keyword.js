import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

const Keyword = () => {

  return (
    <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden"}}>
      <br/>
      <div style={{textAlign:"left",color:"gray"}}>
      <GoArrowLeft  size={30} style={{color:"gray"}}/>&nbsp;&nbsp;&nbsp;<a style={{fontSize:"18px"}}>알림 키워드 등록</a>
      </div>
      <br/>
      <table>
        <tr style={{height:"40px"}}>
          <td style={{width:"260px",borderBottom:"1px solid gray"}}><input style={{width:"260px", border:"white"}} placeholder='키워드를 입력해주세요.(예:자전거)'></input></td>
          <td style={{width:"10px"}}></td>
          <td style={{width:"55px"}}><button style={{width:"55px",borderRadius:"15px", backgroundColor:"#14C38E",border:"white",fontWeight:"bold",color:"white", height:"40px"}}>등록</button></td>
        </tr>
      </table>
      <br/>
      <p style={{fontWeight:"bold", textAlign:"left"}}>등록한 키워드</p>
      <table>
      <tr>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>밥솥</td>
        <td style={{width:"20px"}}></td>
        <td><AiOutlineClose /></td>
      </tr>
      <tr>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>자전거</td>
        <td style={{width:"20px"}}></td>
        <td><AiOutlineClose /></td>
      </tr>
      <tr>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>스마트폰</td>
        <td style={{width:"20px"}}></td>
        <td><AiOutlineClose /></td>
      </tr>
      </table>
    </div>
  );
}

export default Keyword;
