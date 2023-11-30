import { Table } from "reactstrap";

const AdminMain = () => {

  return (
    <div className='admin' style={{ overflow: "scroll", height: "732px", overflowX: "hidden" }}>
      <div style={{textAlign:"left", marginBottom:"10px"}}>
        <select style={{ border: "1px solid lightgray", marginTop: "12.5px", borderRadius: "10px", width: "133px", height: "45px", textAlign: "left" }}>
          <option value="all">&nbsp;&nbsp;&nbsp;전체</option>
          <option value="pay">&nbsp;&nbsp;&nbsp;결제완료</option>
          <option value="receive">&nbsp;&nbsp;&nbsp;수령완료</option>
          <option value="calculation">&nbsp;&nbsp;&nbsp;정산완료</option>
        </select>
      </div>
      <Table className="table" style={{ margin: "0 auto", width: "395px" }}>
        <thead>
          <tr style={{ fontWeight: "bold" }}>
            <td>번호</td><td>상태</td><td>제목</td><td>가격</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>결제완료</td>
            <td>에어팟 프로 팔아요..</td>
            <td>150,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>수령완료</td>
            <td>커피 디스펜서 팔아..</td>
            <td>60,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>정산완료</td>
            <td>사과 팔아요 맛있는..</td>
            <td>50,000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>정산완료</td>
            <td>커피 디스펜서 팔아..</td>
            <td>150,000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminMain;
