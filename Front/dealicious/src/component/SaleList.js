import React, { useRef, useState, useEffect } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const SaleList=()=> {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    // 판매 정보가 등록된 시간
    const saleSubmissionTime = new Date(); // 여기에 실제 서버에서 받은 판매 정보 제출 시간

    // 현재 시간
    const currentTime = new Date();

    // 시간 차이 계산
    const timeDiffInMs = currentTime.getTime() - saleSubmissionTime.getTime();
    const minutesAgo = Math.floor(timeDiffInMs / (1000 * 60)); // 분 단위로 시간 차이 계산

    setTimeAgo(`${minutesAgo}분 전`);
}, []); // 페이지가 로드될 때 한 번만 실행되도록 빈 배열 전달

  return (
    <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden", paddingLeft: "20px", paddingRight: "20px", paddingTop: "0px" }}>
      <Link to="/salewrite" style={{ marginLeft: "330px", marginTop: "650px", textAlign: "right", position: "absolute", backgroundColor:"white", width:"45px", height:"45px",borderRadius:"50px" }}>
        <FiPlusCircle size="50" color="#14C38E"/>
      </Link>
      <Link to="/saledetail" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./1.png" /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>커피 디스펜서</a><br />
                <div style={{display:"flex"}}>
                  <div style={{ fontSize: "15px", width:"180px" }}>A동 8층</div>
                  <div style={{textAlign:"right"}}><img src='..\ggul.png' style={{width:"34px", height:"19px"}}/></div><br />
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>42,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>{timeAgo}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail2" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "8px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./2.png" style={{ width: "130px", height: "87px"}} /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>LG TV</a><br />
                <a style={{ fontSize: "15px" }}>B동 1층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>332,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>1시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail3" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "5px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./3.png" style={{width: "130px", height: "87px"}}/></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>에보나이트 터보R-볼링공</a><br />
                <a style={{ fontSize: "15px" }}>C동 3층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>22,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>2시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail4" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "5px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./4.png" style={{ width: "130px", height: "87px" }}/></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>닥터바이크 서스펜션</a><br />
                <a style={{ fontSize: "15px" }}>학교 1층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>20,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>5시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail5" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "5px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <img src="./5.png" style={{width:"130px",height:"100px"}}/>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px", marginTop:"50px" }}>뉴발란스 2002</a><br />
                <a style={{ fontSize: "15px" }}>학교 3층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>100,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>9시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail6" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "5px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./cloth1.png" style={{width: "130px", height: "87px" }}/></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>반 목폴라 니트</a><br />
                <a style={{ fontSize: "15px" }}>A동 9층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>40분 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail7" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "150px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./cloth2.png" style={{width: "130px", height: "87px" }}/></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>벤힛 스트릿 로고 세미 오버핏 특양면 맨투맨</a><br />
                <a style={{ fontSize: "15px" }}>B동 8층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>2시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail7" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "150px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./drawer.png" style={{width: "130px", height: "87px" }}/></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>서랍</a><br />
                <a style={{ fontSize: "15px" }}>B동 6층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>40,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>3시간 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

    </div>

  )
}
export default SaleList;