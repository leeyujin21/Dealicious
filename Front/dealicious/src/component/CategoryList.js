import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
function CategoryList(){

    return(
      <div className='main' style={{textAlign:'left',overflow:"scroll", height:"742px", overflowX:"hidden"}}> 
       <IoArrowBackOutline size="30" color="14C38E" style={{margintop:"0px"}} /><span style={{color:"#14C38E" ,fontSize:"25px", marginLeft:"20px"}}><b>기타</b></span>
       
              <div style={{ marginLeft: "300px", marginTop: "550px", textAlign: "right", position: "absolute" }}>
                <FiPlusCircle size="50" color="#14C38E"/>

              </div>
              <Link to="/saledetail" style={{ textDecoration: "none",color:"black" }}>
              <div style={{paddingTop:"10px",paddingBottom:"10px",borderBottom:"1px solid lightgray"}}>
  
                <table style={{marginTop:"15px"}}>
                  <tr style={{ height: "35px"}} >
                    <td style={{ width: "100px"}} rowSpan={3}><img src="./1.png"/></td>
                    <td style={{width: "100px"}}><div style={{marginLeft:"20px",fontSize:"16px",width: "100px"}}>커피 디스펜서</div></td>
                  </tr>
                  <tr>
                    <td style={{ marginLeft:"50px",width: "340px"  ,color:"gray"}}><div style={{ marginLeft:"20px"}}>A동 2층</div></td><img src="./ggul.png" style={{marginLeft:"10px"}}></img>
                  </tr>
                
                  <tr>
                    <td style={{width:"100px" }}><div style={{marginLeft:"20px"}}>42,000원</div></td> 
                    <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>12분 전</td>   
                  </tr>
                </table>

              </div>
              </Link>

              <Link to="/saledetail" style={{ textDecoration: "none",color:"black" }}>
              <div style={{paddingTop:"10px",paddingBottom:"10px",borderBottom:"1px solid lightgray"}}>

                <table style={{marginTop:"15px"}}>
                  <tr style={{ height: "35px"}} >
                    <td style={{ width: "60px"}} rowSpan={3}><img src="./1.png"/></td>
                    <td style={{fontSize:"16px",textAlign:"center"}}>커피 디스펜서</td>
                  </tr>
                  <tr>
                    <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"}}><div style={{ marginLeft:"20px"}}>A동 2층</div></td>
                  </tr>
                
                  <tr>
                      <td style={{width:"100px" ,textAlign:"left"}}><div style={{marginLeft:"20px"}}>42,000원</div></td> 
                      <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>12분 전</td>   
                  </tr>
                </table>
          
              </div>
              </Link>

              <Link to="/saledetail" style={{ textDecoration: "none",color:"black" }}>

              <div style={{paddingTop:"10px",paddingBottom:"10px",borderBottom:"1px solid lightgray"}}>

                <table style={{marginTop:"15px"}}>
                  <tr style={{ height: "35px"}} >
                    <td style={{ width: "60px"}} rowSpan={3}><img src="./1.png"/></td>
                    <td style={{fontSize:"16px",textAlign:"center"}}>커피 디스펜서</td>
                  </tr>
                  <tr>
                    <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"}}><div style={{ marginLeft:"20px"}}>A동 2층</div></td>
                  </tr>
                
                  <tr>
                    <td style={{width:"100px" ,textAlign:"left"}}><div style={{marginLeft:"20px"}}>42,000원</div></td> 
                    <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>12분 전</td>   
                  </tr>
                </table>
              </div>

              </Link>

           

              <table>
                
                <tr style={{ height: "35px"}} >
                  <td rowSpan={3}><img src="./2.png"/></td>
                  <td style={{fontSize:"16px", textAlign:"left"}}> LGTV</td>
                </tr>
                <tr>
                  <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"  }}> B동 1층</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="./ggul.png"/>
                </tr>          
                <tr>              
                  <td style={{width:"100px" ,textAlign:"left"}}> 332,000원</td> 
                  <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>1시간 전</td>   
                </tr>            
              </table>
              
              
              <table style={{marginTop:"15px",borderTop:"1px solid lightgray"}}>
                <tr style={{ height: "35px"}} >
                  <td style={{ width: "60px"}} rowSpan={3}><img src="./3.png"/></td>
                  <td style={{fontSize:"16px"}} colSpan={2}> 에보나이트 터보R-볼링공</td>
                </tr>
                <tr>
                  <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"  }}> C동 3층</td>
                </tr>
                
                <tr>               
                  <td style={{width:"100px" ,textAlign:"left"}}> 22,000원</td> 
                  <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>2시간 전</td>   
                </tr>
            
              </table>
              
              <table style={{marginTop:"15px",borderTop:"1px solid lightgray"}}>
                <tr style={{ height: "35px"}} >
                  <td style={{ width: "60px"}} rowSpan={3}><img src="./4.png"/></td>
                  <td style={{fontSize:"16px"}}colSpan={2}> 닥터바이크 서스펜션</td>
                </tr>
                <tr>
                  <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"  }}> 학교 1층</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="./ggul.png"/>
                </tr>
                <tr>              
                  <td style={{width:"100px" ,textAlign:"left"}}> 20,000원</td> 
                  <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>5시간 전</td>                  
                </tr>            
              </table>
              
              <table style={{marginTop:"15px",borderTop:"1px solid lightgray"}}>
                <tr style={{ height: "35px"}} >
                  <td style={{ width: "60px"}} rowSpan={3}><img src="./5.png"/></td>
                  <td style={{fontSize:"16px"}}> 뉴발란스 2002</td>
                </tr>
                <tr>
                  <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"}}> 학교 3층</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="./ggul.png"/>
                </tr>
                <tr>              
                  <td style={{width:"100px" ,textAlign:"left"}}> 100,000원</td> 
                  <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>9시간 전</td> 
                </tr>           
              </table>
            </div>
      
    )
}
export default CategoryList;