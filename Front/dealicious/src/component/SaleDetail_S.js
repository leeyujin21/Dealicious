import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
function SaleDetail_S(){
    return(
    <div className='main' style={{textAlign:'left',overflow:"scroll", height:"742px", overflowX:"hidden"}}> 
        <br/>
         <IoArrowBackOutline size="30" color="14C38E"/>
         <div style={{color:"#14C38E" ,fontSize:"25px" ,textAlign:"center"}}><b>디스펜서 팝니다!</b></div>
        <b>가전제품</b><br/>
        <img src="./1.png"style={{width:"353px", height:"209px"}}/>
        <br/><br/>
        <table style={{marginTop:"15px"}}>
                    <tr>
                    <td rowSpan={2}><img src="./profile.png"/></td>
                    <td style={{fontSize:"16px",width:"50px"}}><b>홍길동</b></td>
                    <select style={{width:"140px",height:"40px"}}>
                     <option value="category">판매중</option>   
                    <option value="mobile">예약중</option>
                    <option value="others">판매완료</option>
                    </select>
                    </tr>
                    <tr>
                        <div style={{width:"100px",height:"21px"}}>인하대학교</div>
                    </tr>

                    &nbsp;&nbsp;&nbsp;
        </table>
        <div>
        &nbsp;&nbsp;<span>상세설명</span><textarea cols="40" rows="10" placeholder="
            디스펜서 팔아요!산지는 3개월 됐는데
            거의 안 써서 미개봉 제품이랑 별 차이
            없습니다!
            A동 8층까지 오시면 5천원 깎아드려요 "style={{borderRadius:"10px"}}></textarea>
        </div>
        <div>
        <img src="./zzimheart.png"/>&nbsp; <span>60000원</span>&nbsp;&nbsp;&nbsp;<img src="./꿀2.png"className="right-align"style={{marginLeft:"auto"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{textAlign:"right"}}><input type="submit" value="수정하기" style={{borderRadius:"10px",width:"103px", height:"44px",backgroundColor:'#14C38E',color:"white"}}></input></span>
        </div>
        
        </div>
      );
};
export default SaleDetail_S;