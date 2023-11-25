import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";

const AdminSettle = () => {

  return (
    <div className='adminSettle' style={{ overflow: "scroll", height: "742px", overflowX: "hidden" }}>
      <div style={{marginLeft:"15px"}}>
      <br/>
      <table>
        <tr>
          <td style={{textAlign:"left",width:"300px", fontWeight:"bold"}}>수령완료 상품 정산</td>
          <td><button style={{width:"90px",borderRadius:"5px", backgroundColor:"#14C38E",border:"white",fontWeight:"bold",color:"white"}}>정산하기</button></td>
        </tr>
      </table>
      <br/>
      <table style={{height:"40px",marginBottom:"10px",borderBottom:"2px solid gray"}}>
        <tr>
          <td style={{width:"30px", fontWeight:"bold"}}>No.</td>
          <td style={{width:"170px", fontWeight:"bold"}}>Subject</td>
          <td style={{width:"100px", fontWeight:"bold"}}>Price</td>
          <td style={{width:"100px", fontWeight:"bold"}}><input type="checkbox" name="xxx" value="yyy" ></input></td>
        </tr>
      </table>
      <table>
        <tr style={{height:"40px",borderBottom:"1px solid gray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
          <td style={{width:"100px", fontWeight:"bold"}}><input type="checkbox" name="xxx" value="yyy" ></input></td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid gray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
          <td style={{width:"100px", fontWeight:"bold"}}><input type="checkbox" name="xxx" value="yyy" ></input></td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid gray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
          <td style={{width:"100px", fontWeight:"bold"}}><input type="checkbox" name="xxx" value="yyy" ></input></td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid gray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
          <td style={{width:"100px", fontWeight:"bold"}}><input type="checkbox" name="xxx" value="yyy" ></input></td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid gray"}}>
          <td style={{width:"30px"}}>1</td>
          <td style={{width:"170px"}}>에어팟 프로팔아요</td>
          <td style={{width:"100px"}}>150,000</td>
          <td style={{width:"100px", fontWeight:"bold"}}><input type="checkbox" name="xxx" value="yyy" ></input></td>
        </tr>

      </table>
      </div>
    </div>
  );
}

export default AdminSettle;
