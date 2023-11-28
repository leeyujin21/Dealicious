import { FaFire } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { GiLaptop } from "react-icons/gi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import {
  Card,
} from 'reactstrap';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden"}}>
      <div style={{textAlign:"left", fontSize:"20px", fontWeight:"bold", marginBottom:"10px", marginTop:"10px"}}>
        딜리셔스란?
      </div>
      <Card style={{height:"180px"}}>
        딜리셔스에 대한 설명
      </Card>
      <br/><br/>
      <div style={{textAlign:"left", fontSize:"20px", fontWeight:"bold"}}>
        카테고리
      </div>
      <br/>
      <div style={{display: "flex", width:"330px"}}>
        <Link style={{ color:"black", width:"33%"}}>
          <FaMobileAlt size="50" color="#E25D5D" style={{marginBottom:"5px"}}/><br/>
          <div style={{color:"gray"}}>모바일/태블릿</div>
        </Link>
        <Link style={{ color:"black", width:"33%"}}>
          <IoShirt size="50" color="#F39238" style={{marginBottom:"5px"}}/><br/>
          <div style={{color:"gray"}}>의류</div>
        </Link>
        <Link style={{color:"black", width:"33%"}}>
          <BiSolidDonateHeart size="50" color="#F3E138" style={{marginBottom:"5px"}}/><br/>
          <div style={{color:"gray"}}>나눔</div>
        </Link>
      </div>
      <br/>
      <div style={{display: "flex", width:"330px"}}>
        <Link style={{ color:"black", width:"33%"}}>
          <IoTicketSharp size="50" color="#3FCC80" style={{marginBottom:"5px"}}/><br/>
          <div style={{color:"gray"}}>티켓/쿠폰</div>
        </Link>
        <Link style={{ color:"black", width:"33%"}}>
          <GiLaptop size="50" color="#3FA2CC" style={{marginBottom:"5px"}}/><br/>
          <div style={{color:"gray"}}>노트북/PC</div>
        </Link>
        <Link style={{color:"black", width:"33%"}}>
          <MdOutlineMoreHoriz size="50" color="#5F5EAE" style={{marginBottom:"5px"}}/><br/>
          <div style={{color:"gray"}}>기타</div>
        </Link>
      </div>
      <br/><br/>
      <div style={{textAlign:"left", fontSize:"20px", fontWeight:"bold"}}>
        지금 딜리셔스에서<br/>
        가장 인기있는 상품&nbsp;<FaFire size='20' color='F4900C'/>
      </div>
      <br/>
      <div style ={{width:"100px",
        height:"100px",
        'background-color':"red",
        display:"inline-block"}}>
      </div>&nbsp;&nbsp;&nbsp;
      <div style ={{width:"100px",
        height:"100px",
        'background-color':"red",
        display:"inline-block"}}>
      </div>&nbsp;&nbsp;&nbsp;
      <div style ={{width:"100px",
        height:"100px",
        'background-color':"red",
        display:"inline-block"}}>
      </div>
      <br/>
      <div style={{height:"10px"}}></div>
      <div style ={{width:"100px",
        height:"100px",
        'background-color':"red",
        display:"inline-block"}}>
      </div>&nbsp;&nbsp;&nbsp;
      <div style ={{width:"100px",
        height:"100px",
        'background-color':"red",
        display:"inline-block"}}>
      </div>&nbsp;&nbsp;&nbsp;
      <div style ={{width:"100px",
        height:"100px",
        'background-color':"red",
        display:"inline-block"}}>
      </div>
    </div>
  );
}

export default Main;
