import React, { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import "./img.css";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SaleDetail() {
  const user = useSelector(state => state.persistedReducer.user);
  const [writer, setwriter] = useState({ nickname: '', typename: '', fileurl: '', ggull: '', email: '' });
  const selectList = [
    { value: "판매중", name: "판매중" },
    { value: "예약", name: "예약중" },
  ];
  const [selected, setSelected] = useState("상태 선택");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  }

  const [showEditButton, setShowEditButton] = useState(true);

  const { sect, num } = useParams();
  const token = useSelector(state => state.persistedReducer.token);
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
    ggull: "",
    viewcount: null,
    zzimcnt: null,
    buyeremail: "",
    writerdate: "",
  });
  const [heart, setHeart] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    axios
      .get(`http://localhost:8090/saledetail/${sect}/${num}`)
      .then(res => {
        console.log(res.data);

        setwriter({
          nickname: res.data.nickname,
          typename: res.data.typename,
          fileurl: res.data.profileimgurl,
          email: res.data.email,
        });

        setSale(res.data.sale);
        const fileurlList = res.data.sale.fileurl.split(',').map(url => url.trim());
        setSale((prevSale) => ({ ...prevSale, fileurlList }));

        // 작성자 정보를 가져온 이후에 상태 변경
        setShowEditButton(user.email === res.data.email);

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
      .then(res => {
        console.log(res.data)
        setSale({ ...sale, likeCount: res.data.likeCount });
        setHeart(res.data.isSelect);
      })
  };

  const gochat = () => {
    const uniqueString = uuidv4();
    navigate(`/chat/${uniqueString}/${num}`);
  }
  const goToEditPage = () => {
    navigate(`/salemofity/${num}`);
  }

  const fileurlList = sale.fileurl.split(',').map(url => url.trim());
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      <div style={{ marginTop: "10px", marginBottom: "20px", display: "flex" }}>
        <Link to="/salelist">
          <IoArrowBackOutline size="30" color="14C38E" />
        </Link>
        <div
          style={{
            color: "#14C38E",
            fontSize: "20px",
            textAlign: "center",
            width: "360px"
          }}
        >
          <b>{sale.title}</b>
        </div>
      </div>

      <div>
        <div style={{ paddingBottom: "20px" }}>
          <Slider {...settings}>
            {fileurlList.map((url, index) => (
              <div key={index}>
                <img
                  src={`http://localhost:8090/img/${url}`}
                  alt={`slide-${index}`}
                  style={{ width: "385px", height: "210px", borderRadius: "10px" }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div style={{ marginTop: "15px" }}>
          <div style={{ display: "flex" }}>
            <div rowSpan={2}>
              {writer.fileurl == null ? <img src='/profile.png' alt='' style={{ width: "60px", height: "60px", marginRight: "10px", borderRadius: "50px" }} /> : <img src={`http://localhost:8090/img/${writer.fileurl}`} alt='' style={{ width: "60px", height: "60px", marginRight: "10px", borderRadius: "50px" }} />}
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
              {writer.typename.length > 9
                ? `${writer.typename.slice(0, 9)}...`
                : writer.typename}
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
              <div>
                <select value={selected} style={{ borderStyle: "none", borderRadius: "10px", width: "130px", height: "42px", textAlign: "left" }} onChange={handleSelect}>
                  {selectList.map((item) => {
                    return <option value={item.value} key={item.value}>
                      &nbsp;&nbsp;{item.name}
                    </option>;
                  })}
                </select>
              </div>


            </div>
          </div>
        </div>
        <br />
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
            height: "285px",
            resize: "none",
            backgroundColor: "white",
          }}
          disabled
          value={sale.content}
        ></Input>
        <div style={{ display: "flex" }}>
          <div style={{ position: "relative", marginTop: "8px" }}>
            <img src={heart ? "/zzimheart.png" : "/noheart.png"} style={{ verticalAlign: "middle", width: "40px" }} onClick={selectGood} />
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
          <div style={{ marginLeft: "165px", lineHeight: "45px" }}>
            {sale.ggull == 1 ? <img src="/ggul.png" style={{ height: "35px", lineHeight: "100px" }} />
              : <img src="/ggul2.png" style={{ height: "35px" }} />}
          </div>
          <div style={{ marginLeft: "15px" }} onClick={user.email == writer.email ? goToEditPage : gochat}>
            <input
              type="submit"
              value={user.email == writer.email ? "수정하기" : "채팅하기"}
              style={{
                borderRadius: "5px",
                width: "100px",
                height: "45px",
                backgroundColor: "#14C38E",
                color: "white",
                borderStyle: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SaleDetail;
