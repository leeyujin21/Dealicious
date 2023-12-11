import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {useParams} from 'react-router-dom';

const SaleList=()=> {
  const [timeAgo, setTimeAgo] = useState('');
  const [saleList,setSaleList] = useState([]);
  const {category} =useParams();

  useEffect(() => {
    // 판매 정보가 등록된 시간
    const saleSubmissionTime = new Date(); // 여기에 실제 서버에서 받은 판매 정보 제출 시간

    // 현재 시간
    const currentTime = new Date();

    // 시간 차이 계산
    const timeDiffInMs = currentTime.getTime() - saleSubmissionTime.getTime();
    const minutesAgo = Math.floor(timeDiffInMs / (1000 * 60)); // 분 단위로 시간 차이 계산
    
    setTimeAgo(`${minutesAgo}분 전`);
    if(category==null) {
    axios.get(`http://localhost:8090/salelist`)
      .then(res => {
        console.log(res);
        setSaleList([]);
        setSaleList((_sale_list) => [
          ..._sale_list, ...res.data.saleList
        ]);
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      axios.post(`http://localhost:8090/salelist`,{cat:category})
      .then(res => {
        console.log(res);
        setSaleList([]);
        // setSaleList((_sale_list) => [
        //   ..._sale_list, ...res.data.saleList
        // ]);
      })
      .catch(err => {
        console.log(err);
      })
    }
}, []); // 페이지가 로드될 때 한 번만 실행되도록 빈 배열 전달
     
      

  return (
    <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden", paddingLeft: "20px", paddingRight: "20px", paddingTop: "0px" }}>
      <Link to="/salewrite" style={{ marginLeft: "330px", marginTop: "650px", textAlign: "right", position: "absolute", backgroundColor:"white", width:"45px", height:"45px",borderRadius:"50px" }}>
        <FiPlusCircle size="50" color="#14C38E"/>
      </Link>
      {saleList.map((item, index) =>
      <Link to={"/saledetail/"+item.num} key={index} style={{textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}>   
              
              <img src={`http://localhost:8090/img/${item.fileurl}`} width="50px" alt='' style={{marginRight:"10px"}}/>
                                    
                                
        </div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>{item.title}</a><br />
                <div style={{display:"flex"}}>
                  <div style={{ fontSize: "15px", width:"180px" }}>{item.place}</div>
                  <div style={{textAlign:"right"}}><img src={item.ggull} style={{width:"34px", height:"19px"}}/></div><br />
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "170px" }}>{item.price}</div>
                  <div style={{ textAlign: "right", color: "gray" }}>{item.date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>)}

    </div>

  )
}
export default SaleList;