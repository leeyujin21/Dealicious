import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";

const AdminMy = () => {

  return (
    <div className='admin' style={{ overflow: "scroll", height: "732px", overflowX: "hidden", paddingTop: "10px" }}>
      <div style={{ width: "395px", textAlign: "left", fontSize: "20px", fontWeight: "bold", paddingLeft: "15px", paddingTop: "20px", paddingBottom: "20px" }}>
        마이페이지
      </div>
      <div style={{ width: "395px", borderTop: "1px solid", borderBottom: "1px solid", marginBottom:"20px" }}>
        <Table borderless style={{ textAlign: "left" }}>
          <thead style={{borderBottom:"1px solid lightgray"}}>
            <th>기본정보</th><th></th><th></th>
          </thead>
          <tbody>
            <tr>
              <td>아이디</td><td>dealadmin1</td><td></td>
            </tr>
            <tr>
              <td>비밀번호</td><td>1234</td><td></td>
            </tr>
            <tr style={{lineHeight:"30px"}}>
              <td>관리자코드</td><td>*********</td><td><Button>코드보기</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Link to="/adminmymodi">
        <Button style={{ width: "200px", height: "45px", backgroundColor: "#14C38E", borderStyle:"none", color: "white" }}>회원 정보 수정</Button>
      </Link>
    </div>
  );
}

export default AdminMy;
