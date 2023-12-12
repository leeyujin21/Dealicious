import React, { useState,useEffect } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


function SaleDetail() {
    const {num} =useParams();
    const [sale,setSale] = useState({
        num:'',email:'',title:'',type:'',amount:'',category:'',content:'',place:'',fileurl:'',status:'',image:'',viewcount:null,zzimcnt:null,
        buyeremail:'',writerdate:''})
        const [heart, setHeart] = useState(false);
        const navigate = useNavigate();
        const [saleList,setSaleList] = useState([]);
        const [imges, setImages] = useState([]);
    
        useEffect(()=>{
            axios.get(`http://localhost:8090/saledetail/${num}`)
            .then(res=>{
                console.log(res.data.sale);
                setSale(res.data.sale);
                console.log(sale);
                setHeart(res.data.heart);
            })
            .catch(err=>{
                console.log(err)
            })
                axios.get(`http://localhost:8090/salelist`)
                .then(res => {
                console.log(res);
                setSaleList([]);
                setSaleList((_sale_list) => [
                    ..._sale_list, ...res.data.saleList
                ]);
                })
                .catch(err => {
                console.log(err);
                })

            },[])
            const convertCategoryToKorean = (category) => {
                switch (category) {
                case 'mobile':
                    return '모바일/태블릿';
                case 'pc':
                    return '노트북/PC';
                case 'ticket':
                    return '티켓/쿠폰';
                case 'clothes':
                    return '의류';
                case 'free':
                    return '나눔';
                case 'others':
                    return '기타';
                default:
                    return category;
                }
            };
      
 
     return (
       
        <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden" }}>
            <div style={{marginTop:"10px", marginBottom:"20px"}}>
            <Link to="/salelist">
                <IoArrowBackOutline size="30" color="14C38E" />
            </Link>
                <span style={{ color: "#14C38E", fontSize: "25px", textAlign: "center", marginLeft: "75px" }}><b>{sale.title} 팝니다!</b></span>
            </div>
            
                
                <img src={sale.fileurl} style={{ width: "385px", height: "210px", borderRadius:"10px"}} />
                <div style={{ marginTop: "15px" }}>
                    <div style={{display:"flex"}}>
                        <div rowSpan={2}><img src="./profile.png" /></div>
                        <div style={{marginTop:"7.5px", fontSize: "16px", width: "180px", marginLeft:"10px" }}>
                            <b>홍길동</b><br/>
                            인하대학교
                        </div>
                        <div style={{border:"1px solid lightgray", marginTop:"12.5px", borderRadius: "10px", width: "133px", height: "45px", textAlign: "center" }}>
                            <div style={{marginTop:"8.5px"}}>판매중</div>
                        </div>
                    </div>

                    &nbsp;&nbsp;&nbsp;
                </div>
                <div style={{textAlign:"left"}}><b>{convertCategoryToKorean(sale.category)}</b></div>
                <tr>
                    <td style={{ textAlign: "left", width:"200px" }}>{sale.place}</td>
                    <td style={{ width: "250px", fontWeight: "bold",textAlign:"right" }}>{sale.price}</td>
                </tr>
                        <Input type="textarea" style={{ width: "385px", marginTop: "10px", marginBottom: "15px", height: "300px", resize: "none", backgroundColor: "white" }} disabled
                            value="디스펜서 팔아요!
                        산지는 3개월 됐는데 거의 안 써서 미개봉 제품이랑 별 차이없습니다!
                        A동 8층까지 오시면 5천원 깎아드려요.">

                        </Input>
                    <div style={{ display: "flex" }}>
                        <div style={{position:"relative", marginTop:"2px"}}>
                            <img src="./zzimheart.png" style={{verticalAlign:"middle"}}/>
                            <div style={{width:"20px", height:"20px" ,position:"absolute", transform: "translate(70%, -165%)", textAlign:"center", color:"white", fontWeight:"bold"}}>12</div>
                        </div>
                        <div>
                            <img src="ggul2.png" style={{ width: "50px", marginLeft: "176px"}} />
                            <Link to="/chat/1">
                                <span style={{ textAlign: "right" }}><input type="submit" value="채팅하기" style={{ borderRadius: "5px", width: "100px", height: "45px", backgroundColor: '#14C38E', color: "white", borderStyle: "none", marginLeft:"10px" }}></input></span>
                            </Link>
                        </div>
                    </div>
                
                   
        </div>
            
    );
   
};
export default SaleDetail;