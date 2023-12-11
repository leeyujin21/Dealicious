import { FaFire } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { GiLaptop } from "react-icons/gi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { Link,useParams  } from "react-router-dom";
import React, { useState,useEffect} from 'react';
import axios from 'axios';

const Main = () => {
  const {category} =useParams();
  const [saleList,setSaleList] = useState([]);    
  // useEffect(()=>{
  //   axios.get(`http://localhost:8090/salelist/${category}`)
  //   .then(res => {
  //     console.log(res);
  //     setSaleList([]);
  //     setSaleList((_sale_list) => [
  //       ..._sale_list, ...res.data.saleList
  //     ]);
  //   })
  //         .catch(err=>{
  //           console.log(err)
  //       })
        

  //   },[])
  return (
    <div className='main' style={{ overflow: "scroll", height: "732px", overflowX: "hidden" }}>
      <Link><img src="..\dealmain.png" style={{width:"385px"}}></img></Link>
      <br /><br />
      <div style={{ textAlign: "left", fontSize: "20px", fontWeight: "bold" }}>
        지금 <a style={{color:"#72DBBB"}}>딜리셔스</a>에서<br />
        가장 인기있는 상품&nbsp;<FaFire size='20' color='F4900C' />
      </div>
      <br />
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "13px" }}>사과 팔아요 맛있는...</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>5,000원</div>
          </div>
        </div>&nbsp;&nbsp;&nbsp;
        <div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "13px" }}>사과 팔아요 맛있는...</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>5,000원</div>
          </div>
        </div>&nbsp;&nbsp;&nbsp;
          <div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "13px" }}>사과 팔아요 맛있는...</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>5,000원</div>
          </div>
         </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "13px" }}>사과 팔아요 맛있는...</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>5,000원</div>
          </div>
        </div>&nbsp;&nbsp;&nbsp;
        <div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "13px" }}>사과 팔아요 맛있는...</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>5,000원</div>
          </div>
        </div>&nbsp;&nbsp;&nbsp;<div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "13px" }}>사과 팔아요 맛있는...</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>5,000원</div>
          </div>
        </div>
      </div>
      <br /><br/>
    
      
      <div style={{ textAlign: "left", fontSize: "20px", fontWeight: "bold", display: "flex" }}>
        <div style={{ height: "30px" }}>카테고리&nbsp;&nbsp;</div>
        
          <Link to="/salelist" style={{ fontSize: "15px", color: "gray", height: "30px", marginTop: "3px" }}>전체보기
            <MdArrowForward size="15" style={{ height: "30px", marginBottom: "2.5px" }} />
          </Link>
       
      </div>
      <br />
      <div style={{ display: "flex", width: "385px" }}>
       {saleList.map((item, index) =>
        <Link to={item.category} style={{ color: "black", width: "33%" }} key={index}>
          <FaMobileAlt size="50" color="#E25D5D" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>{item.category}</div>
        </Link>
        )}
     
        <Link to="/salelist/{category}" style={{ color: "black", width: "33%" }}>
          <IoShirt size="50" color="#F39238" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>의류</div>
        </Link>

        <Link to="/salelist/{category}" style={{ color: "black", width: "33%" }}>
          <BiSolidDonateHeart size="50" color="#F3E138" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>나눔</div>
        </Link>
      
      </div>
      <br />
      <div style={{ display: "flex", width: "385px", paddingBottom:"10px" }}>
          <Link to="/salelist/ticket" style={{ color: "black", width: "33%" }}>
            <IoTicketSharp size="50" color="#3FCC80" style={{ marginBottom: "5px" }} /><br />
            <div style={{ color: "gray" }}>티켓/쿠폰</div>
          </Link>
          <Link to="/salelist/{category}" style={{ color: "black", width: "33%" }}>
            <GiLaptop size="50" color="#3FA2CC" style={{ marginBottom: "5px" }} /><br />
            <div style={{ color: "gray" }}>노트북/PC</div>
          </Link>
          <Link to="/salelist/{category}" style={{ color: "black", width: "33%" }}>
            <MdOutlineMoreHoriz size="50" color="gray" style={{ marginBottom: "5px" }} /><br />
            <div style={{ color: "gray" }}>기타</div>
          </Link>
          
      </div>
    </div>
   
      
  );
}

export default Main;
