import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";

const AdminMy = () => {

  return (
    <div className='adminMy' style={{overflow:"scroll", height:"742px", overflowX:"hidden"}}>
      <br/>
      <div style={{marginLeft:"15px"}}>
      <div style={{textAlign:"left",color:"gray"}}>
      <GoArrowLeft style={{color:"gray"}}/>&nbsp;&nbsp;&nbsp;관리자 마이페이지
      </div>
      <div style={{marginTop:"20px",width:"400px", borderTop:"1px solid",borderBottom:"1px solid"}}>
        <p style={{marginTop:"15px", marginLeft:"20px", textAlign:"left",fontWeight:"bold"}}>기본정보</p>
        <hr></hr>
        <table style={{marginLeft:"20px"}}>
          <tr>
            <td style={{width:"200px",height:"50px",textAlign:"left", fontWeight:"bold"}}>아이디</td>
            <td>dealadmin1</td>
          </tr>
          <tr>
            <td style={{width:"200px",height:"50px",textAlign:"left", fontWeight:"bold"}}>관리자코드</td>
            <td>*********</td>
          </tr>
          <tr>
            <td style={{width:"200px",height:"50px",textAlign:"left", fontWeight:"bold"}}>비밀번호</td>
            <td>*********</td>
          </tr>
        </table>
        <br/>
      </div>
      <br/><br/>
      <button style={{width:"360px",height:"50px",borderRadius:"10px", backgroundColor:"#14C38E",border:"white",fontWeight:"bold",color:"white"}}>회원 정보 수정</button>
    </div>
    </div>
  );
}

export default AdminMy;
