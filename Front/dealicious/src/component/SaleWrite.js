import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import './text.css';
import { Input } from 'reactstrap';
function SaleWrite(){
    return(
        <div className='main' style={{textAlign:'left',overflow:"scroll", height:"742px", overflowX:"hidden"}}> 
        <br/>
         <IoArrowBackOutline size="30" color="14C38E"/>
         <div style={{color:"#14C38E" ,fontSize:"25px" ,float:"left"}}>  </div>
         <div style={{color:"#14C38E",fontSize:"25px",textAlign:"center"}}>판매글작성</div>
         <br/>
       
           
           <img src="./사진추가.png" className='image'></img>
           
       
        <br/> <br/>
        <div >제목</div>
        <Input type="text" placeholder="디스펜서 팝니다" style={{borderRadius:"10px",width:"328px",height:"40px" ,borderColor:"gray"}}></Input>
        <br/><br/>
        <select style={{width:"140px",height:"40px"}}>
        <option value="category">카테고리</option>   
        <option value="mobile">모바일/태블릿</option>
        <option value="others">기타</option>
        </select> <span className='ggull'>
        <img src="./꿀2.png"className="right-align"style={{marginLeft:"auto"}}/>
        </span>
       
        <form>

        <div className='price'>
        <p>가격</p>
        <Input type="text" placeholder="10,000원" style={{borderRadius:"5px",height:"40px" ,width:"120px"}}></Input>
        </div>
        <div className='place'>
        <p>장소</p>
        <Input type="text" placeholder="A동 1층" style={{borderRadius:"5px",height:"40px",width:"120px"}}></Input>
        </div>
        </form>
        <br/>
        
        <div>
            
            상세설명 <p><Input cols="40" rows="10" placeholder="디스펜서 팔아요!산지는 3개월 됐는데
            거의 안 써서 미개봉 제품이랑 별 차이
            없습니다!
            A동 8층까지 오시면 5천원 깎아드려요 "style={{borderRadius:"10px",width:"328px",height:"300px"}}></Input></p>
            
        </div>
        <p style={{textAlign:"center"}}><input type="submit" value="등록하기" style={{borderRadius:"10px",width:"328px", height:"50px",backgroundColor:'#14C38E',color:"white"}}></input></p>
        
        </div>



    )
}
export default SaleWrite;