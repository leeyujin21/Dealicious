import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import Modal from 'react-modal';

const AdminSettle = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='admin' style={{ overflow: "scroll", height: "742px", overflowX: "hidden" }}>
      <div style={{ marginLeft: "15px" }}>
        <br />
        <table>
          <tr>
            <td style={{ textAlign: "left", width: "300px", fontWeight: "bold" }}>수령완료 상품 정산</td>
            <td><button style={{ width: "90px", borderRadius: "5px", backgroundColor: "#14C38E", border: "white", fontWeight: "bold", color: "white" }} onClick={() => setModalIsOpen(true)}>정산하기</button>

              <Modal className='main' style={{
                content: {
                  width: "350px", height: "160px", position: "absolute",
                  top: "30%",left: "50%", transform: "translate(-50%, -50%)",backgroundColor:"white", border:"1px solid lightgray", borderRadius:"10px"
                }
              }} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div style={{ textAlign: "center" }}>
                  <br/>
                  <p>N건의 거래를 정산 하시겠습니까?</p>
                  <button style={{ width: "90px", borderRadius: "5px", backgroundColor: "gray", border: "white", fontWeight: "bold", color: "white" }} onClick={() => setModalIsOpen(false)}>취소하기</button>&nbsp;&nbsp;&nbsp;
                  <button style={{ width: "90px", borderRadius: "5px", backgroundColor: "#14C38E", border: "white", fontWeight: "bold", color: "white" }} onClick={() => setModalIsOpen(false)}>정산하기</button>
                </div>
              </Modal>
            </td>
          </tr>
        </table>
        <br />
        <table style={{ height: "40px", marginBottom: "10px", borderBottom: "2px solid gray" }}>
          <tr>
            <td style={{ width: "30px", fontWeight: "bold" }}>No.</td>
            <td style={{ width: "170px", fontWeight: "bold" }}>Subject</td>
            <td style={{ width: "100px", fontWeight: "bold" }}>Price</td>
            <td style={{ width: "100px", fontWeight: "bold" }}><input type="checkbox" name="xxx" value="yyy" ></input></td>
          </tr>
        </table>
        <table>
          <tr style={{ height: "40px", borderBottom: "1px solid lightgray" }}>
            <td style={{ width: "30px" }}>1</td>
            <td style={{ width: "170px" }}>에어팟 프로팔아요</td>
            <td style={{ width: "100px" }}>150,000</td>
            <td style={{ width: "100px", fontWeight: "bold" }}><input type="checkbox" name="xxx" value="yyy" ></input></td>
          </tr>
          <tr style={{ height: "40px", borderBottom: "1px solid lightgray" }}>
            <td style={{ width: "30px" }}>1</td>
            <td style={{ width: "170px" }}>에어팟 프로팔아요</td>
            <td style={{ width: "100px" }}>150,000</td>
            <td style={{ width: "100px", fontWeight: "bold" }}><input type="checkbox" name="xxx" value="yyy" ></input></td>
          </tr>
          <tr style={{ height: "40px", borderBottom: "1px solid lightgray" }}>
            <td style={{ width: "30px" }}>1</td>
            <td style={{ width: "170px" }}>에어팟 프로팔아요</td>
            <td style={{ width: "100px" }}>150,000</td>
            <td style={{ width: "100px", fontWeight: "bold" }}><input type="checkbox" name="xxx" value="yyy" ></input></td>
          </tr>
          <tr style={{ height: "40px", borderBottom: "1px solid lightgray" }}>
            <td style={{ width: "30px" }}>1</td>
            <td style={{ width: "170px" }}>에어팟 프로팔아요</td>
            <td style={{ width: "100px" }}>150,000</td>
            <td style={{ width: "100px", fontWeight: "bold" }}><input type="checkbox" name="xxx" value="yyy" ></input></td>
          </tr>
          <tr style={{ height: "40px", borderBottom: "1px solid lightgray" }}>
            <td style={{ width: "30px" }}>1</td>
            <td style={{ width: "170px" }}>에어팟 프로팔아요</td>
            <td style={{ width: "100px" }}>150,000</td>
            <td style={{ width: "100px", fontWeight: "bold" }}><input type="checkbox" name="xxx" value="yyy" ></input></td>
          </tr>

        </table>
      </div>
    </div>
  );
}

export default AdminSettle;
