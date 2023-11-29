import Avvvatars from "avvvatars-react";
import { useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button, FormGroup, Label } from "reactstrap";

const Mypage_review = () => {
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const fileInput = useRef(null)
    function toProfileDetail(e) {
        window.location.href="/profiledetail"
    }
    
    return (
        
        <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden", paddingTop:"50px"}}>
            <FormGroup style={{ textAlign: "left", paddingBottom: "10px" }}>
                <IoArrowBackOutline style={{ marginRight: "100px" }} size="30" color="#14C38E" />
                <Label style={{ fontSize: "25px", fontWeight: "bold", color: "#14C38E" }}>마이페이지</Label>
            </FormGroup>
            <div style={{ paddingBottom: "30px", display: "flex", paddingBottom: "30px" }}>
                <Avvvatars
                    src={Image}
                    style={{ margin: '20px' }}
                    size={65}
                    onClick={() => { fileInput.current.click() }}
                />
                <div style={{ fontSize: "20px", fontWeight: "bold", textAlign: "left", paddingLeft: "20px", width: "220px" }}>
                    &nbsp;홍길동
                    <br />
                    <div>
                        <FaStar size="25" color="#F2D43E" />
                        <FaStar size="25" color="#F2D43E" />
                        <FaStar size="25" color="#F2D43E" />
                        <FaStar size="25" color="#F2D43E" />
                    </div>
                </div>

                <Button onClick={toProfileDetail} style={{
                    width: "100px", height: "35px", fontSize: "15px",
                    backgroundColor: "#D9D9D9", borderStyle: "none", borderRadius: "20px"
                }}>내 정보 수정
                </Button>
            </div>
            <div style={{ display: "flex", textAlign: "left", marginBottom:"3px" }}>
                <div style={{ width: "100px", marginLeft: "5px", marginRight: "5px" }}><Link to="/mypage" style={{ fontSize: "18px", color: "black", textDecoration: "none" }}>내가 쓴 글(9)</Link></div>
                <div style={{ width: "80px"}}><Link to="/myzzim" style={{ fontSize: "18px", color: "black", textDecoration: "none" }}>찜한 글(3)</Link></div>
                <div style={{ width: "100px", marginLeft:"15px" }}><Link to="/myreview" style={{ fontSize: "18px", color: "black", textDecoration: "none", fontWeight: "bold" }}>받은 후기(2)</Link>   </div>
            </div>
            <div style={{ height: "2px", backgroundColor: "#D9D9D9", width: "385px", position: "relative" }}>
                <div style={{ position: "absolute", height: "3px", width: "105px", backgroundColor: "#14C38E", marginLeft:"198px" }} />
            </div>
            <div style={{height:"20px"}}/>
            <div style={{marginLeft:"5px", display:"flex", width:"100%", height:"90px", borderBottom:"1px solid lightgray"}}>
                <div style={{marginTop:"7.5px", height:"70px"}}>
                    <Avvvatars 
                        src={Image} 
                        style={{margin:'20px'}} 
                        size={55} 
                        onClick={()=>{fileInput.current.click()}}
                    />
                </div>
                <div style={{marginLeft:"10px", textAlign:"left", width:"130px", marginTop:"9px"}}>
                    &nbsp;<a style={{fontSize:"17px", fontWeight:"bold"}}>어깡이</a>
                    <br/>
                    <div>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                    </div>
                </div>
                <div style={{width:"95px", textAlign:"right", marginRight:"15px", marginTop:"10px"}}>
                    <div style={{fontSize:"14px", color:"black", marginBottom:"7px"}}>2023.11.28</div>
                    <img src="\ggul.png" style={{width:"34px", height:"19px"}}/>
                </div>
                <div style ={{width:"70px", height:"70px", borderRadius:"10px", textAlign:"right"}}>
                    <img src="\1.png" style={{width:"70px", height:"70px", borderRadius:"10px"}}/>
                </div>
            </div>
            <div style={{marginLeft:"5px", display:"flex", width:"100%", height:"90px", borderBottom:"1px solid lightgray", marginTop:"20px"}}>
                <div style={{marginTop:"7.5px", height:"70px"}}>
                    <Avvvatars 
                        src={Image} 
                        style={{margin:'20px'}} 
                        size={55} 
                        onClick={()=>{fileInput.current.click()}}
                    />
                </div>
                <div style={{marginLeft:"10px", textAlign:"left", width:"130px", marginTop:"9px"}}>
                    &nbsp;<a style={{fontSize:"17px", fontWeight:"bold"}}>어좁이</a>
                    <br/>
                    <div>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                        <FaStar size="25" color="#F2D43E"/>
                    </div>
                </div>
                <div style={{width:"95px", textAlign:"right", marginRight:"15px", marginTop:"10px"}}>
                    <div style={{fontSize:"14px", color:"black", marginBottom:"7px"}}>2023.11.25</div>
                    <img src="\ggul2.png" style={{width:"34px", height:"19px"}}/>
                </div>
                <div style ={{width:"70px", height:"70px", borderRadius:"10px", textAlign:"right"}}>
                    <img src="\1.png" style={{width:"70px", height:"70px", borderRadius:"10px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Mypage_review;