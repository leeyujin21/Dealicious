import React ,{useState}from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import { Input } from 'reactstrap';

function SaleDetail(){
    return(
    <div className='main' style={{textAlign:'left',overflow:"scroll", height:"742px", overflowX:"hidden"}}> 
        <br/>
         <IoArrowBackOutline size="30" color="14C38E"/>
         <div style={{color:"#14C38E" ,fontSize:"25px" ,textAlign:"center"}}><b>디스펜서 팝니다!</b></div>
        <b>가전제품</b><br/>
        <img src="./1.png"style={{width:"324px", height:"209px"}}/>
        <table style={{marginTop:"15px"}}>
                    <tr>
                    <td rowSpan={2}><img src="./profile.png"/></td>
                    <td style={{fontSize:"16px",width:"50px"}}><b>홍길동</b></td>
                    <td style={{border:"2px solid black",borderRadius:"3px",width:"170px",height:"45px",textAlign:"center"}}>판매중
                    </td>
                    </tr>
                    <tr>
                        <div style={{width:"100px",height:"21px"}}>인하대학교</div>
                       
                    </tr>
                    
                    &nbsp;&nbsp;&nbsp;
        </table>
        
        <table><tr colSpan={3}>상세설명</tr><td style={{textAlign:"right"}}>A동 근처</td></table>
        <div>
        <Input type="text" placeholder="디스펜서 팔아요!산지는 3개월 됐는데
            거의 안 써서 미개봉 제품이랑 별 차이
            없습니다!
            A동 8층까지 오시면 5천원 깎아드려요" cols="40" rows="10" style={{width:"330px",height:"300px"}}>
           
               
        </Input>
        <img src="./zzimheart.png"/>&nbsp; <span>60000원</span>&nbsp;&nbsp;&nbsp;<img src="./ggulpay2.png"className="right-align"style={{marginLeft:"auto"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{textAlign:"right"}}><input type="submit" value="채팅하기" style={{borderRadius:"10px",width:"103px", height:"44px",backgroundColor:'#14C38E',color:"white"}}></input></span>
        </div>
        
        </div>
      );
};
export default SaleDetail;