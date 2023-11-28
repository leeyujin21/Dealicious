import { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GoArrowLeft } from "react-icons/go";

const AdminSettleList = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='admin' style={{ overflow: "scroll", height: "742px", overflowX: "hidden" }}>
      <div style={{marginLeft:"15px"}}>
      <br/>
      <table style={{marginBottom:"15px"}}>
        <tr>
          <td style={{textAlign:"left",width:"280px", fontWeight:"bold"}}>정산 내역</td>
          <td><button style={{width:"120px",borderRadius:"5px", backgroundColor:"#14C38E",border:"white",fontWeight:"bold",color:"white"}}>일자별 검색</button></td>
        </tr>
      </table>
      <table>
        <tr style={{height:"60px"}}>
          <td style={{width:"80px"}}>From:</td>
          <td><DatePicker style={{width:"70px"}}
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    /></td>
        </tr>
        <tr>
        <td style={{width:"80px"}}>To:</td>
        <td>
        <DatePicker style={{width:"70px"}}
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    /></td>
        </tr>
      </table>
      <br/>
      <table style={{height:"40px",marginBottom:"10px",borderBottom:"2px solid gray"}}>
        <tr>
          <td style={{width:"40px", fontWeight:"bold"}}>No.</td>
          <td style={{width:"220px", fontWeight:"bold"}}>Subject</td>
          <td style={{width:"140px", fontWeight:"bold"}}>Price</td>
        </tr>
      </table>
      <table>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"40px"}}>1</td>
          <td style={{width:"220px"}}>에어팟 프로팔아요</td>
          <td style={{width:"140px"}}>150,000</td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"40px"}}>1</td>
          <td style={{width:"220px"}}>에어팟 프로팔아요</td>
          <td style={{width:"140px"}}>150,000</td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"40px"}}>1</td>
          <td style={{width:"220px"}}>에어팟 프로팔아요</td>
          <td style={{width:"140px"}}>150,000</td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"40px"}}>1</td>
          <td style={{width:"220px"}}>에어팟 프로팔아요</td>
          <td style={{width:"140px"}}>150,000</td>
        </tr>
        <tr style={{height:"40px",borderBottom:"1px solid lightgray"}}>
          <td style={{width:"40px"}}>1</td>
          <td style={{width:"220px"}}>에어팟 프로팔아요</td>
          <td style={{width:"140px"}}>150,000</td>
        </tr>
      </table>
      <br/><br/>
      <table>
        <tr>
          <td style={{textAlign:"right",width:"300px", fontWeight:"bold"}}>총 정산 금액 : </td>
          <td style={{textAlign:"right",width:"100px"}}>990,000 원</td>
        </tr>
        <tr>
          <td style={{textAlign:"right",width:"300px", fontWeight:"bold"}}>발생 수수료 : </td>
          <td style={{textAlign:"right",width:"100px"}}>49,500 원</td>
        </tr>
      </table>
      </div>
    </div>
  );
}

export default AdminSettleList;
