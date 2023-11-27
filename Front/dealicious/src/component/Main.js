import { FaFire } from "react-icons/fa6";
import {
  Card,
} from 'reactstrap';

const Main = () => {
  return (
    <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden"}}>
      <Card style={{height:"180px"}}>
        딜리셔스에 대한 설명
      </Card>
      <br/>
      <div style={{textAlign:"left", fontSize:"20px", fontWeight:"bold"}}>
        카테고리
      </div>
      <br/>
      <div>
        모바일/태블릿
        노트북/PC 
        티켓/쿠폰
      </div>
      <div>
        의류 나눔 기타
      </div>
      <br/>
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
    </div>
  );
}

export default Main;
