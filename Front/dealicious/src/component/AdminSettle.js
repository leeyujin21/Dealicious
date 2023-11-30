import { useState } from 'react';
import Modal from 'react-modal';
import { Button, Col, FormGroup, Input, Table } from 'reactstrap';

const AdminSettle = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='admin' style={{ overflow: "scroll", height: "742px", overflowX: "hidden" }}>
      <div>
        <FormGroup row style={{ width: "395px", margin: "0 auto", paddingTop: "20px" }}>
          <Col sm={6} style={{ textAlign: "left", fontWeight: "bold", fontSize: "20px" }}>
            수령완료 상품 정산
          </Col>
          <Col sm={6} style={{ textAlign: "right" }}>
            <Button style={{ backgroundColor: "#14C38E", borderStyle: "none" }} onClick={() => setModalIsOpen(true)}>정산하기</Button>
            <Modal className='main' style={{
              content: {
                width: "350px", height: "160px", position: "absolute",
                top: "30%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", border: "1px solid lightgray", borderRadius: "10px"
              }
            }} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
              <div style={{ textAlign: "center" }}>
                <br />
                <p>N건의 거래를 정산 하시겠습니까?</p>
                <button style={{ width: "90px", borderRadius: "5px", backgroundColor: "gray", border: "white", fontWeight: "bold", color: "white" }} onClick={() => setModalIsOpen(false)}>취소하기</button>&nbsp;&nbsp;&nbsp;
                <button style={{ width: "90px", borderRadius: "5px", backgroundColor: "#14C38E", border: "white", fontWeight: "bold", color: "white" }} onClick={() => setModalIsOpen(false)}>정산하기</button>
              </div>
            </Modal>
          </Col>
        </FormGroup>
        <Table className="table" style={{ margin: "0 auto", width: "395px" }}>
          <thead>
            <tr style={{ fontWeight: "bold" }}>
              <td>번호</td><td>제목</td><td>가격</td><td><Input type="checkbox" name="xxx" value="yyy" ></Input></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>에어팟 프로 팔아요..</td>
              <td>150,000</td>
              <td><Input type="checkbox" name="xxx" value="yyy" ></Input></td>
            </tr>
            <tr>
              <td>2</td>
              <td>커피 디스펜서 팔아..</td>
              <td>60,000</td>
              <td><Input type="checkbox" name="xxx" value="yyy" ></Input></td>
            </tr>
            <tr>
              <td>3</td>
              <td>사과 팔아요 맛있는..</td>
              <td>50,000</td>
              <td><Input type="checkbox" name="xxx" value="yyy" ></Input></td>
            </tr>
            <tr>
              <td>4</td>
              <td>커피 디스펜서 팔아..</td>
              <td>150,000</td>
              <td><Input type="checkbox" name="xxx" value="yyy" ></Input></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AdminSettle;
