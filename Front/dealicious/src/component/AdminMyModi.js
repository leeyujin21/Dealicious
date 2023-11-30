import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { Button, Input, Table } from 'reactstrap';

const AdminMyModi = () => {

  return (
    <div className='admin' style={{ overflow: "scroll", height: "732px", overflowX: "hidden", paddingTop: "10px" }}>
      <div style={{ width: "395px", textAlign: "left", fontSize: "20px", fontWeight: "bold", paddingLeft: "15px", paddingTop: "20px", paddingBottom: "20px" }}>
        마이페이지 수정하기
      </div>
      <div style={{ width: "395px", borderTop: "1px solid", borderBottom: "1px solid" }}>
        <Table borderless style={{ textAlign: "left" }}>
          <thead style={{borderBottom:"1px solid lightgray"}}>
            <th>기본정보</th><th></th><th></th>
          </thead>
          <tbody>
            <tr>
              <td>아이디</td><td>dealadmin1</td><td></td>
            </tr>
            <tr>
              <td>관리자코드</td><td>*********</td><td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div style={{ width: "395px", borderBottom: "1px solid", marginBottom:"20px" }}>
        <Table borderless style={{ textAlign: "left" }}>
          <thead style={{borderBottom:"1px solid lightgray"}}>
            <th>비밀번호 변경</th>
          </thead>
          <tbody>
            <tr>
              <td><Input type='password' style={{ width: "371px", height: "45px", borderRadius: "10px", border: "1px solid gray" }} placeholder='현재 비밀번호를 입력하세요'></Input></td>
            </tr>
            <tr>
              <td><Input type='password' style={{ width: "371px", height: "45px", borderRadius: "10px", border: "1px solid gray" }} placeholder='현재 비밀번호를 입력하세요'></Input></td>
            </tr>
            <tr>
              <td><Input type='password' style={{ width: "371px", height: "45px", borderRadius: "10px", border: "1px solid gray" }} placeholder='현재 비밀번호를 입력하세요'></Input></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Link to="/adminmy">
        <Button style={{ width: "200px", height: "45px", backgroundColor: "#14C38E", borderStyle:"none", color: "white" }}>변경하기</Button>
      </Link>
    </div>
  );
}

export default AdminMyModi;
