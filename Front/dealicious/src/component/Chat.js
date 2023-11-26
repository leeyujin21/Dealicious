import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { FaImage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const Chat = () => {

  return (
    <div className='main' style={{ overflow: "scroll", height: "742px", overflowX: "hidden" }}>
      <br />
      <div style={{ textAlign: "left", color: "#14C38E" }}>
        <GoArrowLeft style={{ color: "#14C38E" }} />&nbsp;&nbsp;&nbsp;어깡이
      </div>
      <div style={{ marginTop: "20px", width: "330px", borderTop: "1px solid gray", borderBottom: "1px solid gray" }}>
        <table  style={{ marginTop: "10px",marginBottom: "10px"}}>
          <tr>
            <td rowSpan={3}><img src='gg.png' style={{width:"100px"}}></img></td>
            <td style={{width:"160px", textAlign:"left"}}>디스펜서 팔아요</td>
            <td>판매중</td>
          </tr>
          <tr>
            <td style={{textAlign:"left"}}>60,000원</td>
          </tr>
          <tr>
            <td></td>
            <td><img src='ggulpay1.png' style={{width:"50px"}}></img></td>
          </tr>
        </table>
      </div>
      <br/>
      <p style={{color:"gray"}}>2023년 11월 17일</p>
      <br/>
      <div style={{textAlign:"left",marginBottom:"15px"}}>
      <div style={{display: "inline-block",marginRight:"8px"}}><img src='ggulpay1.png' style={{width:"50px"}}></img></div>
      <div style={{display: "inline-block",width:"auto",maxWidth:"210px",borderRadius:"10px",backgroundColor:"#D9D9D9", fontWeight:"bold",padding:"10px"}}>안녕하세요 구매 원하는데 혹시 장소 변경 가능할까요?</div>
      </div>
      <div style={{textAlign:"right",marginBottom:"15px"}}>
      <div style={{display: "inline-block",width:"auto",maxWidth:"210px",borderRadius:"10px",backgroundColor:"#14C38E", fontWeight:"bold",padding:"10px",color:"white"}}>되겠냐?</div>
      </div>
      <div style={{textAlign:"left",marginBottom:"15px"}}>
      <div style={{display: "inline-block",marginRight:"8px"}}><img src='ggulpay1.png' style={{width:"50px"}}></img></div>
      <div style={{display: "inline-block",width:"auto",maxWidth:"210px",borderRadius:"10px",backgroundColor:"#D9D9D9", fontWeight:"bold",padding:"10px"}}>인성보소</div>
      </div>
      <br/>
      <div style={{borderLeft:"3px solid #D9D9D9",paddingLeft:"10px",textAlign:"left",marginBottom:"15px"}}>
      <img src='dealicious1.png' style={{marginBottom:"10px",width:"100px"}}></img>
      <p style={{fontWeight:"bold"}}>디스펜서 팔아요! 의 결제가 완료되었어요.</p>
      <p style={{color:"gray"}}>구매자에게 물건을 전달해주세요:)</p>
      </div>
      <br/>
      <div style={{borderLeft:"3px solid #D9D9D9",paddingLeft:"10px",textAlign:"left",marginBottom:"15px"}}>
      <img src='dealicious1.png' style={{marginBottom:"10px",width:"100px"}}></img>
      <p style={{fontWeight:"bold"}}>디스펜서 팔아요!  의 거래가 완료되었어요.</p>
      <p style={{color:"gray"}}>거래는 만족스러우셨나요? 후기를 남겨주세요 :)</p>
      <button style={{width:"310px", backgroundColor:"#C7FBEB", border:"white", padding:"5px",borderRadius:"10px",  color:"#14C38E",fontWeight:"bold"}}>후기 작성하기</button>
      </div>
      <br/>
      <div style={{textAlign:"left",marginBottom:"20px"}}>
      <FaImage size="30" style={{color:"#D9D9D9"}}/>
      <input style={{marginLeft:"10px",border:"white", width:"240px",borderRadius:"10px",backgroundColor:"#D9D9D9"}} placeholder='  채팅하기'></input>
      <IoMdSend size="30" style={{marginLeft:"10px",color:"#D9D9D9"}}/>
      </div>
    </div>

  );
}

export default Chat;
