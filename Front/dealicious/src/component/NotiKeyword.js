import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

const NotiKeyword = () => {

  return (
    <div className='main' style={{ overflow: "scroll", height: "742px", overflowX: "hidden", paddingTop:"10px", paddingLeft:"20px", paddingRight:"20px"}}>
      <br />
      <div>
        <div style={{display:"flex"}}>
          <Link to="/notiactivity" style={{textDecoration:"none", color:"black"}}>
            <td style={{ width: "200px", fontSize:"17px" }}>활동 알림</td>
          </Link>
          <Link to="/notikeyword" style={{textDecoration:"none", color:"black"}}>
            <td style={{ width: "200px", fontWeight: "bold",fontSize:"17px" }}>키워드 알림</td>
          </Link>
        </div>
        <div style={{height:"2px", backgroundColor:"#D9D9D9", width:"385px", position:"relative"}}>
            <div style={{position:"absolute", height:"3px", width:"192.5px", backgroundColor:"#14C38E", marginLeft:"192.5px"}}/>
        </div>
        {/* 알림 시작 */}
        <Link to="/saledetail" style={{color:"black", textDecoration:"none"}}>
          <div style={{borderBottom: "1px solid gray", width:"385px" }}>
            <div style={{display:"flex", paddingBottom:"15px", paddingTop:"15px"}}>
              <div><img src='gg.png' style={{width:"50px", height:"50px", marginTop:"5px"}}></img></div>
              <div style={{marginLeft:"10px", width:"330px"}}>
                <div style={{textAlign:"left", marginBottom:"5px" }}>등록하신 “미니니카트라이더”  키워드 상품이 등록되었습니다.</div>
                <div style={{display:"flex"}}>
                  <div style={{textAlign:"left", color:"gray", fontSize:"15px", width:"200px" }}>지금 바로 확인하러 가실까요?</div>
                  <div style={{textAlign:"right", color:"gray", fontSize:"14px", width:"125px"  }}>10분 전</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* 알림 끝 */}
        {/* 알림 시작 */}
        <Link to="/saledetail" style={{color:"black", textDecoration:"none"}}>
          <div style={{borderBottom: "1px solid gray", width:"385px" }}>
            <div style={{display:"flex", paddingBottom:"15px", paddingTop:"15px"}}>
              <div><img src='gg.png' style={{width:"50px", height:"50px", marginTop:"5px"}}></img></div>
              <div style={{marginLeft:"10px", width:"330px"}}>
                <div style={{textAlign:"left", marginBottom:"5px" }}>등록하신 “미니니카트라이더”  키워드 상품이 등록되었습니다.</div>
                <div style={{display:"flex"}}>
                  <div style={{textAlign:"left", color:"gray", fontSize:"15px", width:"200px" }}>지금 바로 확인하러 가실까요?</div>
                  <div style={{textAlign:"right", color:"gray", fontSize:"14px", width:"125px"  }}>10분 전</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* 알림 끝 */}
        {/* 알림 시작 */}
        <Link to="/saledetail" style={{color:"black", textDecoration:"none"}}>
          <div style={{borderBottom: "1px solid gray", width:"385px" }}>
            <div style={{display:"flex", paddingBottom:"15px", paddingTop:"15px"}}>
              <div><img src='gg.png' style={{width:"50px", height:"50px", marginTop:"5px"}}></img></div>
              <div style={{marginLeft:"10px", width:"330px"}}>
                <div style={{textAlign:"left", marginBottom:"5px" }}>등록하신 “미니니카트라이더”  키워드 상품이 등록되었습니다.</div>
                <div style={{display:"flex"}}>
                  <div style={{textAlign:"left", color:"gray", fontSize:"15px", width:"200px" }}>지금 바로 확인하러 가실까요?</div>
                  <div style={{textAlign:"right", color:"gray", fontSize:"14px", width:"125px"  }}>10분 전</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* 알림 끝 */}
        {/* 알림 시작 */}
        <Link to="/saledetail" style={{color:"black", textDecoration:"none"}}>
          <div style={{borderBottom: "1px solid gray", width:"385px" }}>
            <div style={{display:"flex", paddingBottom:"15px", paddingTop:"15px"}}>
              <div><img src='gg.png' style={{width:"50px", height:"50px", marginTop:"5px"}}></img></div>
              <div style={{marginLeft:"10px", width:"330px"}}>
                <div style={{textAlign:"left", marginBottom:"5px" }}>등록하신 “미니니카트라이더”  키워드 상품이 등록되었습니다.</div>
                <div style={{display:"flex"}}>
                  <div style={{textAlign:"left", color:"gray", fontSize:"15px", width:"200px" }}>지금 바로 확인하러 가실까요?</div>
                  <div style={{textAlign:"right", color:"gray", fontSize:"14px", width:"125px"  }}>10분 전</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* 알림 끝 */}
      </div>
      <br/><br/>
      <Link to="/keyword">
        <button style={{width:"150px",height:"40px",borderRadius:"5px", backgroundColor:"#D9D9D9",border:"white",fontWeight:"bold"}}>키워드 등록하기</button>
      </Link>
    </div>
  );
}

export default NotiKeyword;