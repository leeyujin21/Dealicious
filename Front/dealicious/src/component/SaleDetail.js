import React, { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import "./img.css";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function SaleDetail() {
  const { sect,num } = useParams();
  const [sale, setSale] = useState({
    num: "",
    email: "",
    title: "",
    type: "",
    amount: "",
    category: "",
    content: "",
    place: "",
    fileurl: "",
    status: "",
    ggull:"",
    viewcount: null,
    zzimcnt: null,
    buyeremail: "",
    writerdate: "",
  });
  const user = useSelector(state => state.persistedReducer.user);
  
  const [heart, setHeart] = useState(false);
  const navigate = useNavigate();
 

  const [writer, setwriter] = useState({nickname:'',typename:'',fileurl:'',ggull:'',email:''});
  
  
  useEffect(() => {
  

    axios
      .get(`http://localhost:8090/saledetail/${sect}/${num}`)
      .then(res => {
        console.log(res.data);
        setSale(res.data.sale);
        setwriter({nickname:res.data.nickname,typename:res.data.typename,fileurl:res.data.profileimgurl,email:res.data.email})
        console.log(sale);
        
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, []);

  const convertCategoryToKorean = (category) => {
    switch (category) {
      case "mobile":
        return "모바일/태블릿";
      case "pc":
        return "노트북/PC";
      case "ticket":
        return "티켓/쿠폰";
      case "clothes":
        return "의류";
      case "free":
        return "나눔";
      case "others":
        return "기타";
      default:
        return category;
    }
  };
  const selectGood = () => {
   
    axios.get(`http://localhost:8090/salelike/${num}`)
    .then(res=>{
        console.log(res.data)
        setSale({...sale,likeCount:res.data.likeCount});
        setHeart(res.data.isSelect);
    })
  };

  const gochat = () => {
    if(user.nickname===writer.nickname) {
      alert("자신과는 채팅할 수 없습니다.") 
    } else {
      const uniqueString = uuidv4();
      navigate(`/chat/${uniqueString}/${num}`);
    }
  }
 

  return (
    <div
      className="main"
      style={{
        textAlign: "left",
        overflow: "scroll",
        height: "732px",
        overflowX: "hidden",
      }}
    >
      <div style={{ marginTop: "10px", marginBottom: "20px" }}>
        <Link to="/salelist">
          <IoArrowBackOutline size="30" color="14C38E" />
        </Link>
        <span
          style={{
            color: "#14C38E",
            fontSize: "25px",
            textAlign: "center",
            marginLeft: "75px",
          }}
        >
          <b>{sale.title} 팝니다!</b>
        </span>
      </div>

      <div>
        <img
          src={`http://localhost:8090/img/${sale.fileurl}`}
          style={{ width: "385px", height: "210px", borderRadius: "10px" }}
        />

        <div style={{ marginTop: "15px" }}>
          <div style={{ display: "flex" }}>
            <div rowSpan={2}>
            {writer.fileurl==null ?<img src='/profile.png' alt='' style={{width: "60px", height: "60px",marginRight:"10px"}}/> : <img src={`http://localhost:8090/img/${writer.fileurl}`} alt='' style={{width: "60px", height: "60px",marginRight:"10px"}}/>}
            </div>
            <div
              style={{
                marginTop: "7.5px",
                fontSize: "16px",
                width: "180px",
                marginLeft: "10px",
              }}
            >
              <b>{writer.nickname}</b>
              <br />
              {writer.typename}
            </div>
            <div
              style={{
                border: "1px solid lightgray",
                marginTop: "12.5px",
                borderRadius: "10px",
                width: "133px",
                height: "45px",
                textAlign: "center",
              }}
            >
              
              {writer.email!==null?
               <select style={{border:"none",font:"20px"}}>
                      <option value="category">&nbsp;&nbsp;&nbsp;판매중</option>
                      <option value="mobile">&nbsp;&nbsp;&nbsp;예약중</option>
                </select>:<div>{sale.status}</div>}
              
              
            </div>
          </div>
        </div>
        <br/>
        <div style={{ textAlign: "left" }}>
          <b>{convertCategoryToKorean(sale.category)}</b>
        </div>
        <tr >
          <td style={{ textAlign: "left", width: "200px" }}>{sale.place}</td>
          <td
            style={{ width: "250px", fontWeight: "bold", textAlign: "right" }}
          >
            {sale.amount}
          </td>
        </tr>
        <Input
          type="textarea"
          style={{
            width: "385px",
            marginTop: "10px",
            marginBottom: "15px",
            height: "300px",
            resize: "none",
            backgroundColor: "white",
          }}
          disabled
          value="디스펜서 팔아요!
                        산지는 3개월 됐는데 거의 안 써서 미개봉 제품이랑 별 차이없습니다!
                        A동 8층까지 오시면 5천원 깎아드려요."
        ></Input>
        <div style={{ display: "flex" }}>
          <div style={{ position: "relative", marginTop: "2px" }}>
            <img src={heart?"/zzimheart.png":"/noheart.png"} style={{ verticalAlign: "middle" ,width:"40px" }}onClick={selectGood} />
            <div>{sale.likecount}</div>
            <div
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                transform: "translate(70%, -165%)",
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
            
            </div>
          </div>
          <div>
            <div style={{marginLeft:"150px"}}>
            {sale.ggull==1?<img src="/ggul.png" style={{width:"60px",height:"40px"}}/> 
            :<img src="/ggul2.png"  style={{width:"60px",height:"40px"}}/>}
          
            
              <span style={{ textAlign: "right", marginLeft:"25px" }} onClick={gochat}>
                <input
                  type="submit"
                  value="채팅하기"
                  style={{
                    borderRadius: "5px",
                    width: "100px",
                    height: "45px",
                    backgroundColor: "#14C38E",
                    color: "white",
                    borderStyle: "none",
                    marginLeft: "10px",
                  }}
                ></input>
              </span>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default SaleDetail;
