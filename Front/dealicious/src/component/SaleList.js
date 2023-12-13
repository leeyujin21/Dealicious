import axios from 'axios';
import React, { useRef, useState, useEffect} from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';


const SaleList=()=> {
  const [timeAgo, setTimeAgo] = useState('');
  const [saleList,setSaleList] = useState([]);
  const {category} =useParams();
  const [page, setPage] = useState(1); // 페이지 번호
 
  
  const observerRef = useRef(null);

  useEffect(() => {
   
    // 판매 정보가 등록된 시간
    const saleSubmissionTime = new Date(); // 여기에 실제 서버에서 받은 판매 정보 제출 시간

    // 현재 시간
    const currentTime = new Date();

    // 시간 차이 계산
    const timeDiffInMs = currentTime.getTime() - saleSubmissionTime.getTime();
    const minutesAgo = Math.floor(timeDiffInMs / (1000 * 60)); // 분 단위로 시간 차이 계산
    
    setTimeAgo(`${minutesAgo}분 전`);
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && saleList.length > 0) {
          axios.get(`http://localhost:8090/salelist/${page + 1}`)
              .then(res => {
                  const newSaleList = res.data.saleList;
                  if (newSaleList.length > 0) {
                      setSaleList(prevSaleList => [...prevSaleList, ...newSaleList]);
                      setPage(page + 1);
                  } else {
                      observer.disconnect(); // 새로운 데이터가 없으면 Intersection Observer를 중지합니다.
                  }
              })
              .catch(err => {
                  console.log(err);
              });
      }
  }, { threshold: 1 });

  if (observerRef.current) {
      observer.observe(observerRef.current);
  }

  return () => {
      if (observerRef.current) {
          observer.disconnect(); // 컴포넌트가 언마운트될 때 Observer를 해제합니다.
      }
  };
}, [page, saleList.length]);
  useEffect(() => {

    if(category==null) {
    axios.get(`http://localhost:8090/salelist/${page}`)
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
        console.log(res.data);
        setSaleList((_sale_list) => [
          ..._sale_list, ...res.data
        ]);
      })
      .catch(err => {
        console.log(err);
      })
    }
    
  }, []); // 페이지가 로드될 때 한 번만 실행되도록 빈 배열 전달
     
      

  return (
    <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden", paddingLeft: "20px", paddingRight: "20px", paddingTop: "0px" }}>
      
      <Link to="/salewrite" style={{ marginLeft: "300px", marginTop: "650px", textAlign: "right", position: "absolute", backgroundColor:"white", width:"45px", height:"45px"}}>
        <FiPlusCircle size="50" color="#14C38E"/>
      </Link>       
      
      {saleList.map((item, index) =>
      
      <Link to={"/saledetail/"+item.num} key={index}  style={{textDecoration: "none", color: "black" }}>
      
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >

              {item.fileurl==null ?<img src='./profile.png' width="130px" height="87px"/> 
              :<img src={`http://localhost:8090/img/${item.fileurl}`} width="130px" height="87px" />}
  
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>{item.title}</a>
                <div style={{display:"flex" }}>
                  <div style={{ fontSize: "15px", width:"150px" }}>{item.place}</div>
                  <div style={{textAlign:"right"}}>
                    {item.ggull==0 ?<img src=''/>:<img src='/ggul.png' style={{width:"50px",height:"30px"}} />}
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "150px" }}>{item.amount}</div>
                  <div style={{ textAlign: "right", color: "gray", marginRight:"20px"}}>{timeAgo}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </Link>
      
      )}
     <div ref={observerRef} style={{ height: '10px' }} />
    </div>

  )
}
export default SaleList;