import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";

function SaleWrite(){
    return(
        <div className='main' style={{textAlign:'left',overflow:"scroll", height:"742px", overflowX:"hidden"}}> 
        <br/>
         <IoArrowBackOutline size="30" color="14C38E" />&nbsp;&nbsp;&nbsp;<span style={{color:"#14C38E" ,fontSize:"25px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style={{textAlign:"right"}}>판매글 작성</b></span>
        <br/><br/>
        <div><img src="./사진추가.png"></img></div>
        <br/>
        <div>제목</div>
        <input type="text" placeholder="상품명을 입력하세요" style={{borderradius:"20px"}}></input>
        <br/><br/>
        <select>
        <option value="category">카테고리</option>
        <option value="mobile">모바일/태블릿</option>
        <option value="others">기타</option>
        </select>
        <br/><br/>
        가격&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{textAlign:"right"}}>장소</span>
        <br/>
        <input type="text" placeholder="10,000원" style={{borderRadius:"10px",height:"30px" ,width:"150px"}}></input>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="A동 1층" style={{borderRadius:"10px",height:"30px",width:"150px"}}></input>
        <br/><br/>
        
        <div>
            
            상세설명 <p><textarea cols="40" rows="10" placeholder="상세설명을 입력하세요
            구매날짜, 하자 등 자세하게 작성할수록
            구매자에게 편리합니다"style={{borderRadius:"10px"}}></textarea></p>
            
        </div>
        <p style={{textAlign:"center"}}><input type="submit" value="등록하기" style={{borderRadius:"10px",width:"300px", height:"50px",backgroundColor:'#14C38E',color:"white"}}></input></p>
        </div>


    )
}
export default SaleWrite;