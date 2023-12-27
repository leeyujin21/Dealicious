import { IoArrowBackOutline } from "react-icons/io5";
import { Button, Label } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useWebSocket } from './WebSocketProvider';

const Gpay_finish = () => {
    const { num } = useParams();
    const { url } = useWebSocket();
    const [sale, setSale] = useState({
        num: "",
        email: "",
        title: "",
        type: "",
        amount: "",
        category: "",
        content: "",
        place: "",
        fileurl: "",
        status: "",
        ggull: "",
        viewcount: null,
        zzimcnt: null,
        buyeremail: "",
        writerdate: "",
    });
    useEffect(() => {
        axios
            .get(url+`gpay/${num}`)
            .then(res => {
                console.log(res.data);
                setSale(res.data);
            })
            .catch((err) => {
                console.log(err);
            });



    }, []);


    return (
        <div className='main' style={{overflow:"scroll", height:"632px", overflowX:"hidden"}}>
            <div style={{textAlign:"left"}}>
                <Label style={{fontSize:"18px", fontWeight:"bold", color:"black"}}>꿀페이 결제완료</Label>
            </div>
            <div style={{textAlign:"left", paddingBottom:"20px", borderBottom:"1px solid lightgray", display:"flex", width:"390px"}}>
                <img src={url+`img/${sale.fileurl.split(',')[0]}`}style={{ width: "70px", height: "70px", borderRadius:"10px" }}></img>
                <div style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "17px" }}> {sale.title}</div>
                    <div style={{ }}> {sale.amount*1.05} 원</div>
                </div>
            </div>
            <div style={{textAlign:"left", borderBottom:"1px solid lightgray", paddingBottom:"20px"}}>
                &nbsp;&nbsp;
                <div style={{marginBottom:"10px", paddingLeft:"5px"}}>
                    <span style={{color:"gray",}}>거래방법</span>
                    <span style={{fontWeight:"bold", paddingLeft:"20px", fontSize:"18px"}}>직거래</span>
                </div>
                <div style={{paddingLeft:"5px"}}>
                    <span style={{color:"gray"}}>결제수단</span>
                    <img src="../ggul.png" style={{width:"40px", marginLeft:"20px"}}/>
                </div>
            </div>
            <div style={{textAlign:"left", borderBottom:"1px solid lightgray", paddingBottom:"20px"}}>
                &nbsp;&nbsp;
                <div style={{paddingLeft:"5px", fontWeight:"bold", paddingBottom:"10px"}}>꿀페이 결제수단</div>
                <div style={{paddingLeft:"5px"}}>
                    <Button style={{backgroundColor:"black", fontWeight:"bold"}}>신용카드</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
            <div style={{textAlign:"right", marginRight:"10px"}}>
                &nbsp;&nbsp;
                <div>
                    수수료: {sale.amount * 0.05}원
                </div>
                <div style={{fontWeight:"bold"}}>
                    결제 금액: {sale.amount * 1.05}원
                </div>
            </div>
            <br/>
            <Link to="/">
                <Button style={{width:"330px", height:"55px", fontSize:"20px", backgroundColor:"#14C38E", borderStyle:"none"}}>메인화면으로 이동</Button>
            </Link>
        </div>
    )
}

export default Gpay_finish;