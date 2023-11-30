import { FaFire } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { GiLaptop } from "react-icons/gi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import {
  Card,
} from 'reactstrap';
import { Link } from "react-router-dom";
import { id } from "date-fns/locale";

const Main = () => {
  return (
    <div className='main' style={{ overflow: "scroll", height: "732px", overflowX: "hidden" }}>
      <div style={{ textAlign: "left", fontSize: "20px", fontWeight: "bold", marginBottom: "10px", marginTop: "10px" }}>
        딜리셔스란?
      </div>
      <Card style={{ height: "180px" }}>
        딜리셔스에 대한 설명
      </Card>
      <br /><br />
      <div style={{ textAlign: "left", fontSize: "20px", fontWeight: "bold", display: "flex" }}>
        <div style={{ height: "30px" }}>카테고리&nbsp;&nbsp;</div>
        <Link to="/salelist" style={{ fontSize: "15px", color: "gray", height: "30px", marginTop: "3px" }}>전체보기
          <MdArrowForward size="15" style={{ height: "30px", marginBottom: "2.5px" }} />
        </Link>
      </div>
      <br />
      <div style={{ display: "flex", width: "380px" }}>
        <Link style={{ color: "black", width: "33%" }}>
          <FaMobileAlt size="50" color="#E25D5D" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>모바일/태블릿</div>
        </Link>
        <Link style={{ color: "black", width: "33%" }}>
          <IoShirt size="50" color="#F39238" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>의류</div>
        </Link>
        <Link style={{ color: "black", width: "33%" }}>
          <BiSolidDonateHeart size="50" color="#F3E138" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>나눔</div>
        </Link>
      </div>
      <br />
      <div style={{ display: "flex", width: "380px" }}>
        <Link style={{ color: "black", width: "33%" }}>
          <IoTicketSharp size="50" color="#3FCC80" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>티켓/쿠폰</div>
        </Link>
        <Link style={{ color: "black", width: "33%" }}>
          <GiLaptop size="50" color="#3FA2CC" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>노트북/PC</div>
        </Link>
        <Link to="/categorylist" style={{ color: "black", width: "33%" }}>
          <MdOutlineMoreHoriz size="50" color="gray" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>기타</div>
        </Link>
      </div>
      <br /><br />
      <div style={{ textAlign: "left", fontSize: "20px", fontWeight: "bold" }}>
        지금 딜리셔스에서<br />
        가장 인기있는 상품&nbsp;<FaFire size='20' color='F4900C' />
      </div>
      <br />
      <div style={{ display: "flex", marginBottom:"10px" }}>
        <div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{textAlign:"left"}}>
            <div style={{fontSize:"13px"}}>사과 팔아요 맛있는...</div>
            <div style={{fontSize:"16px", fontWeight:"bold"}}>5,000원</div>
          </div>
        </div>&nbsp;&nbsp;&nbsp;
        <div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}> 
          </img>
          <div style={{textAlign:"left"}}>
            <div style={{fontSize:"13px"}}>사과 팔아요 맛있는...</div>
            <div style={{fontSize:"16px", fontWeight:"bold"}}>5,000원</div>
          </div>
        </div>&nbsp;&nbsp;&nbsp;<div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{textAlign:"left"}}>
            <div style={{fontSize:"13px"}}>사과 팔아요 맛있는...</div>
            <div style={{fontSize:"16px", fontWeight:"bold"}}>5,000원</div>
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
          <div style={{textAlign:"left"}}>
            <div style={{fontSize:"13px"}}>사과 팔아요 맛있는...</div>
            <div style={{fontSize:"16px", fontWeight:"bold"}}>5,000원</div>
          </div>
        </div>&nbsp;&nbsp;&nbsp;
        <div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{textAlign:"left"}}>
            <div style={{fontSize:"13px"}}>사과 팔아요 맛있는...</div>
            <div style={{fontSize:"16px", fontWeight:"bold"}}>5,000원</div>
          </div>
        </div>&nbsp;&nbsp;&nbsp;<div>
          <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2429257734724726-4e817a3f-5f48-4bdd-a45a-9153ca81caf0.jpg" style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{textAlign:"left"}}>
            <div style={{fontSize:"13px"}}>사과 팔아요 맛있는...</div>
            <div style={{fontSize:"16px", fontWeight:"bold"}}>5,000원</div>
          </div>
        </div>
      </div>
      
      <div style={{ height: "50px" }} />
    </div>
  );
}

export default Main;
