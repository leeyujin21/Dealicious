import React, { useState, useEffect ,Button} from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import "./img.css";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SaleDetail() {
  const { num } = useParams();
  const [currentImage, setCurrentImage] = useState("/noheart.png");
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
    image: "",
    ggull:"",
    viewcount: null,
    zzimcnt: null,
    buyeremail: "",
    writerdate: "",
  });
  
  const [heart, setHeart] = useState(false);
  const navigate = useNavigate();

  const [writer, setwriter] = useState({nickname:'',typename:'',fileurl:'',ggull:''});
  
  
  useEffect(() => {
    axios
      .get(`http://localhost:8090/saledetail/${num}`)
      .then((res) => {
        console.log(res.data);
        setSale(res.data.sale);
        setwriter({nickname:res.data.nickname,typename:res.data.typename,fileurl:res.data.profileimgurl})
        console.log(sale);
        setHeart(res.data.heart);
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
  const changeImage = () => {
    if (currentImage === "/noheart.png") {
        setCurrentImage("/zzimheart.png");
        setSale({ ...sale, zzimcnt: 1 });
    } else if(currentImage==='/zzimheart.png') {
        setCurrentImage("/noheart.png"); // 처음 이미지로 다시 변경.
        setSale({ ...sale, zzimcnt: 0 });
    }
};

    const submit=(e)=>{
        const formData= new FormData();
        formData.append("title",sale.title);
        formData.append("category",sale.category);
        formData.append("amount",sale.amount);
        formData.append("place",sale.place);
        formData.append("content",sale.content);
       
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
            
            
                <div>
                        <select  style={{border:"1px solid lightgray", marginTop:"12.5px", borderRadius: "10px", width: "133px", height: "45px", textAlign: "left" }}>
                            <option value="category">&nbsp;&nbsp;&nbsp;판매중</option>
                            <option value="mobile">&nbsp;&nbsp;&nbsp;예약중</option>
                        </select>
                    </div>
              
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
            <img src={currentImage} style={{ verticalAlign: "middle" }}onClick={changeImage} />
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
            {sale.ggull==1?<img src="/ggul.png" style={{width:"50px",height:"50px"}}/> :<img src="/ggul2.png"  style={{width:"50px",height:"50px"}}/>}
          
            <Link to="/chat/1">
              <span style={{ textAlign: "right", marginLeft:"25px" }}>
                <Button
                  type="button"
                  onClick={submit}
                  
                  style={{
                    borderRadius: "5px",
                    width: "100px",
                    height: "45px",
                    backgroundColor: "#14C38E",
                    color: "white",
                    borderStyle: "none",
                    marginLeft: "10px",
                  }}
                >수정하기</Button>
              </span>
            </Link>
          </div>
        </div>
        </div>
      </div>
    
  );
}
export default SaleDetail;
