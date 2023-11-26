import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import './text.css';
function SaleModify(){
    return(
        <div className='main' style={{textAlign:'left',overflow:"scroll", height:"742px", overflowX:"hidden"}}> 
        <br/>
         <IoArrowBackOutline size="30" color="14C38E"/>
         <div style={{color:"#14C38E" ,fontSize:"25px" ,textAlign:"center"}}><b>판매글 수정</b></div>
       
           <img src="./cam1.png" className='image'></img>
           
       
        <br/>
        <div >제목</div>
        <input type="text" placeholder="디스펜서 팝니다" style={{borderRadius:"10px",width:"350px",height:"40px" ,borderColor:"gray"}}></input>
        <br/><br/>
        <select style={{width:"140px",height:"40px"}}>
        <option value="category">카테고리</option>   
        <option value="mobile">모바일/태블릿</option>
        <option value="others">기타</option>
        </select>
        <div className='ggull'>
        <img src="./꿀2.png"className="right-align"style={{marginLeft:"auto"}}/>
        </div>
        <form>

        <div className='price'>
        <p>가격</p>
        <input type="text" placeholder="10,000원" style={{borderRadius:"5px",height:"40px" ,width:"120px"}}></input>
        </div>
        <div className='place'>
        <p>장소</p>
        <input type="text" placeholder="A동 1층" style={{borderRadius:"5px",height:"40px",width:"120px"}}></input>
        </div>
        </form>
        <br/>
        
        <div>
            
            상세설명 <p><textarea cols="40" rows="10" placeholder="디스펜서 팔아요!산지는 3개월 됐는데
            거의 안 써서 미개봉 제품이랑 별 차이
            없습니다!
            A동 8층까지 오시면 5천원 깎아드려요 "style={{borderRadius:"10px"}}></textarea></p>
            
        </div>
        <p style={{textAlign:"center"}}><input type="submit" value="수정하기" style={{borderRadius:"10px",width:"330px", height:"50px",backgroundColor:'#14C38E',color:"white"}}></input></p>
        
        </div>


    )
}
export default SaleModify;