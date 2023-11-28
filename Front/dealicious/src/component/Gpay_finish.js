import { IoArrowBackOutline } from "react-icons/io5";
import { FormGroup, Label } from "reactstrap";

const Gpay_finish = () => {
    return (
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"20px"}}>
            <div style={{textAlign:"left", paddingBottom:"10px"}}>
                <IoArrowBackOutline style={{marginRight:"80px"}} size="30" color="lightgray"/>
            </div>
            <div style={{textAlign:"left", marginLeft:"10px"}}>
                <Label style={{fontSize:"20px", fontWeight:"bold", color:"black"}}>꿀페이 결제하기</Label>
            </div>
            <div style={{textAlign:"left", paddingBottom:"20px", borderBottom:"1px solid lightgray", display:"flex"}}>
                &nbsp;&nbsp;
                <img src="..\1.png"></img>
                <div style={{marginLeft:"10px"}}>
                    디스펜서 팔아요<br/>
                    60,000원
                </div>
            </div>
            <div style={{textAlign:"left", borderBottom:"1px solid lightgray", paddingBottom:"20px"}}>
                &nbsp;&nbsp;
                <div>
                    <span style={{color:"gray",}}>거래방법</span>
                    <span style={{fontWeight:"bold", paddingLeft:"10px"}}>직거래</span>
                </div>
                <div>
                    <span style={{color:"gray",}}>결제수단</span>
                    <img src="../ggul.png" style={{paddingLeft:"10px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Gpay_finish;