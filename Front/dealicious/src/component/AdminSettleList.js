import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Col, FormGroup, Modal, Table } from 'reactstrap';

const AdminSettleList = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const minEndDate = startDate; // 두 번째 DatePicker의 최소 날짜를 첫 번째 DatePicker의 선택된 날짜로 설정
  return (
    <div className='admin' style={{ overflow: "scroll", height: "732px", overflowX: "hidden", paddingTop: "10px" }}>
      <div style={{ width: "395px", textAlign: "left", fontSize: "20px", fontWeight: "bold", paddingLeft: "15px", paddingTop: "20px", paddingBottom: "20px" }}>
        정산완료 내역
      </div>
      <div style={{ display: "flex", paddingBottom:"20px", paddingLeft:"15px"}}>
        <div style={{display:"flex"}}>
          <div>
            <div style={{ textAlign: "left", width: "320px", display: "flex" }}>
              <div style={{ lineHeight: "39px", width: "49px", textAlign:"right" }}>
                FROM:
              </div>
              <div style={{ marginLeft: "10px" }}>
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  maxDate={new Date()} // 오늘 이후의 날짜를 선택할 수 없도록 설정
                />
              </div>
            </div>
            <div style={{ textAlign: "center", width: "320px", display: "flex", marginTop: "5px" }}>
              <div style={{ lineHeight: "39px", width: "49px", textAlign:"right" }}>
                TO:
              </div>
              <div style={{ marginLeft: "10px" }}>
                <DatePicker
                  showIcon
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  minDate={minEndDate} // 최소 날짜를 첫 번째 DatePicker의 선택된 날짜로 설정
                  maxDate={new Date()} // 오늘 이후의 날짜를 선택할 수 없도록 설정
                />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginLeft:"5px", lineHeight:"75px" }}>
            <Button style={{ backgroundColor: "#14C38E", borderStyle: "none" }}>검색</Button>
          </div>
        </div>
      </div>
      <Table style={{ marginBottom: "10px", borderBottom: "2px solid gray" }}>
        <thead>
          <td>번호</td>
          <td>판매자</td>
          <td>정산액</td>
          <td>수수료</td>
          <td>결제금액</td>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>홍길동</td>
            <td style={{ textAlign: "right" }}>150,000</td>
            <td style={{ textAlign: "right" }}>7,500</td>
            <td style={{ textAlign: "right" }}>157,500</td>
          </tr>
          <tr>
            <td>2</td>
            <td>홍길동</td>
            <td style={{ textAlign: "right" }}>50,000</td>
            <td style={{ textAlign: "right" }}>2,500</td>
            <td style={{ textAlign: "right" }}>52,500</td>
          </tr>
          <tr>
            <td>3</td>
            <td>어깡이</td>
            <td style={{ textAlign: "right" }}>60,000</td>
            <td style={{ textAlign: "right" }}>3,000</td>
            <td style={{ textAlign: "right" }}>63,000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>어좁이</td>
            <td style={{ textAlign: "right" }}>150,000</td>
            <td style={{ textAlign: "right" }}>7,500</td>
            <td style={{ textAlign: "right" }}>157,500</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <tr>
          <td style={{ textAlign: "right", width: "300px", fontWeight: "bold" }}>총 정산액 : </td>
          <td style={{ textAlign: "right", width: "100px" }}>410,000 원</td>
        </tr>
        <tr>
          <td style={{ textAlign: "right", width: "300px", fontWeight: "bold" }}>총 수수료 : </td>
          <td style={{ textAlign: "right", width: "100px" }}>20,500 원</td>
        </tr>
      </div>
    </div>
  );
}

export default AdminSettleList;
