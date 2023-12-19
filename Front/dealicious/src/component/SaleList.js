import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";


const SaleList = () => {
  const [saleList, setSaleList] = useState([]);
  const { category } = useParams();
  const [page, setPage] = useState(1); // 페이지 번호



  const user = useSelector(state => state.persistedReducer.user);

  const observerRef = useRef(null);
 
  useEffect(() => {


    const observer = new IntersectionObserver((entries) => {//IntersectionObserver를 생성하여 관찰 대상 요소(observerRef.current)의 교차점을 감시
      if (entries[0].isIntersecting && saleList.length > 0) {//관찰 대상 요소가 뷰포트와 교차되고 데이터가 있을 때(saleList.length > 0), Axios를 사용하여 서버에서 데이터를 가져오는 GET 요청
        axios.get(`http://localhost:8090/salelist/${page + 1}`)
          .then(res => {
            const newSaleList = res.data.saleList;//새로운 데이터가 수신되면(newSaleList.length > 0), setSaleList 함수를 사용하여 새 데이터를 기존 saleList에 추가하고 페이지 번호를 업데이트
            if (newSaleList.length > 0) {
              setSaleList(prevSaleList => [...prevSaleList, ...newSaleList]);
              setPage(page + 1);
            } else {    //새로운 데이터가 없으면 Intersection Observer를 중지하여 추가 요청을 방지
              observer.disconnect();
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

    return () => {//컴포넌트가 언마운트되거나 의존성인 page 또는 saleList.length가 변경될 때 옵저버를 해제
      if (observerRef.current) {
        observer.disconnect(); // 컴포넌트가 언마운트될 때 Observer를 해제합니다.
      }
    };

  }, [page, saleList.length]);

  useEffect(() => {

    if (category == null) {
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
      axios.post(`http://localhost:8090/salelist`, { cat: category })
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

     
  console.log(user.email);    

  return (
    <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden", paddingLeft: "20px", paddingRight: "20px", paddingTop: "0px" }}>
      {user.email!==''?
      <Link to="/salewrite" style={{ marginLeft: "300px", marginTop: "650px", textAlign: "right", position: "absolute", backgroundColor:"white", width:"45px", height:"45px"}}>
        <FiPlusCircle size="50" color="#14C38E"/>
      </Link>: <Link to="/mypagenl"style={{ marginLeft: "300px", marginTop: "650px", textAlign: "right", position: "absolute", backgroundColor:"white", width:"45px", height:"45px"}}><FiPlusCircle size="50" color="#14C38E"/></Link> }   
      
      {saleList.map((item, index) =>
      
      <Link to={"/saledetail/only-detail/"+item.num} key={index}  style={{textDecoration: "none", color: "black" }}>
      
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >


    

                {item.fileurl == null ? <img src='./profile.png' width="130px" height="87px" />
                  : <img src={`http://localhost:8090/img/${item.fileurl[0]}${item.fileurl[1]}`} width="130px" height="87px" />}

                <div style={{ textAlign: "left", marginLeft: "20px" }}>
                  <a style={{ fontSize: "18px" }}>
                    {item.title.length > 13 ? `${item.title.slice(0, 13)}...` : item.title}
                  </a>
                  <div style={{ display: "flex" }}>
                    <div style={{ fontSize: "15px", width: "180px" }}>{item.place}</div>
                    <div style={{ textAlign: "right" }}>
                      {item.ggull == 0 ? <img src='' /> : <img src='/ggul.png' style={{ width: "35px" }} onClick={"뭐라도 하셈"} />}
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "150px" }}>{item.amount}</div>
                    <div style={{ textAlign: "right", color: "gray", marginRight: "20px" }}></div>
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