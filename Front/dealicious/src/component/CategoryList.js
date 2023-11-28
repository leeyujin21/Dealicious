import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";

function CategoryList(){

    return(
      <div className='main' style={{textAlign:'left',overflow:"scroll", height:"742px", overflowX:"hidden"}}> 
      <br/>
       <IoArrowBackOutline size="30" color="14C38E" style={{margintop:"0px"}} /><span style={{color:"#14C38E" ,fontSize:"25px", marginLeft:"20px"}}><b>기타</b></span>
       <br/>
        
              <table style={{marginTop:"15px"}}>
              <tr style={{ height: "35px"}} >
                <td style={{ width: "60px"}} rowSpan={3}><img src="./1.png"/></td>
                <td style={{fontSize:"16px",textAlign:"left"}}>커피 디스펜서</td>
              </tr>
              <tr>
              <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"}}>A동 2층</td>
              </tr>
              
              <tr>
               <td style={{width:"100px" ,textAlign:"left"}}> 42,000원</td> 
              <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>12분 전</td>   
                </tr>
              </table>
              <br/>
              
              
              <table style={{borderTop:"1px solid lightgray"}}>
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
              <div style={{textAlign:"right"}}>
              <FiPlusCircle size="70" color="#14C38E" style={{position:"absolute"}} />
              </div>
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