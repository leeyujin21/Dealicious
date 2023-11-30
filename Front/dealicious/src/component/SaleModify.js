import React, { useRef, useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import './text.css';
import { Button, Input } from 'reactstrap';
import { FaCamera } from "react-icons/fa";

function SaleModify(){
    const [Image, setImage] = useState()
    const fileInput = useRef(null)
    const [files, setFiles] = useState([]);
    const fileChange = (e) => {
        if(e.target.files.length>0){
            setFiles([...files, e.target.files[0]]);
        }
    }
    return(
        <div className='main' style={{textAlign:'left',overflow:"scroll", height:"732px", overflowX:"hidden"}}> 
        <br/>
         <IoArrowBackOutline size="30" color="14C38E"/>
         <span style={{color:"#14C38E",fontSize:"25px",marginLeft:"105px"}}><b>판매글수정</b></span> 
         <br/><br/>
         <div style={{backgroundColor:"#E9E9E9", width:"48px", height:"63px", textAlign:"center", paddingTop:"5px", position:"relative", cursor:"pointer"}}
             onClick={()=>document.getElementById("file").click()}>
        <FaCamera size="30" color='gray'/>
            <div style={{position:"absolute", textAlign:"center", width:"48px", paddingBottom:"5px", fontWeight:"bold"}}>
                0/5
            </div>
            <Input name="file" type="file" id="file" accept="image/*" onChange={fileChange} hidden/>
        </div>
        <div style={{marginBottom:"5px", fontSize:"18px", marginTop:"20px"}}>제목</div>
        <Input type="text" placeholder="제목을 입력해주세요" style={{width:"385px",height:"40px" ,borderColor:"lightgray"}}></Input>
        
        <div style={{marginTop:"20px",display:"flex"}}>
            <div>
                <div style={{marginBottom:"5px", fontSize:"18px"}}>카테고리</div>
                <select style={{width:"180px",height:"40px",textAlign:"center",borderRadius:"5px",float:"left", borderColor:"lightgray"}}>
                    <option value="" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;선택</option>   
                    <option value="mobile" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;모바일/태블릿</option>
                    <option value="pc" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;노트북/PC</option>
                    <option value="ticket" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;티켓/쿠폰</option>
                    <option value="clothes" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;의류</option>
                    <option value="free" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;나눔</option>
                    <option value="others" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;기타</option>
                </select> 
            </div>
            <div style={{marginLeft:"25px"}}>
                <div style={{marginBottom:"5px", fontSize:"18px"}}>꿀페이</div>
                <img src="./ggul2.png" style={{width:"50px"}}/>
            </div>
        </div>
        <div style={{marginBottom:"20px"}}/>
        <div style={{display:"flex"}}>
            <div>
                <div style={{marginBottom:"5px", fontSize:"18px"}}>가격</div>
                <div><Input type="text" placeholder="10,000원" style={{borderRadius:"5px",height:"40px" ,width:"180px",float:"left"}}></Input></div>
            </div>
            <div>
                <div style={{marginBottom:"5px", fontSize:"18px", marginLeft:"25px"}}>장소</div>
                <div><Input type="text" placeholder="A동 1층" style={{borderRadius:"5px",height:"40px",width:"180px",marginLeft:"25px"}}></Input></div>
            </div>   
        </div>
        <div>
            <div style={{fontSize:"18px", marginBottom:"10px", marginTop:"20px"}}>상세설명</div>
            <Input type='textarea' required="required"
             style={{width:"385px",height:"300px", resize:"none"}}
             value='산지는 3개월 됐는데
거의 안 써서 미개봉 제품이랑 별 차이 없습니다!
A동 8층까지 오시면 5천원 깎아드려요'></Input>
            
        </div>
        <br/> <p style={{textAlign:"center"}}><input type="submit" value="등록하기" style={{fontWeight:"bold", fontSize:"18px" ,borderRadius:"10px",width:"385px", height:"50px",backgroundColor:'#14C38E',color:"white", borderStyle:"none"}}></input></p>
        
        </div>



    )
}
export default SaleModify;