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
         <div style={{color:"#14C38E" ,fontSize:"25px" ,textAlign:"center"}}><b>판매글 작성</b></div>
       
        <div><img src="./사진추가.png"></img></div>
        <br/>
        <div >제목</div>
        {/* <Input type="text" placeholder="상품명을 입력하세요" style={{width:"350px",height:"40px" ,borderColor:"gray"}}></Input> */}
        <Input type="text" name="title" id="title" style={{height:"55px", width:"330px"}}/>
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
        <Input type="text" placeholder="10,000원" style={{height:"40px" ,width:"120px"}}></Input>
        </div>
        <div className='place'>
        <p>장소</p>
        <Input type="text" placeholder="A동 1층" style={{height:"40px",width:"120px"}}></Input>
        </div>
        </form>
        <br/>
        
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