import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";

function SaleList(){

    return(
      <div className='main' style={{textAlign:'left',overflow:"scroll", height:"742px", overflowX:"hidden"}}> 
      <br/>
       
        
              <table style={{marginTop:"15px"}}>
              <tr style={{ height: "35px"}} >
                <td style={{ width: "60px"}} rowSpan={3}><img src="./1.png"/></td>
                <td style={{fontSize:"16px"}}> 커피 디스펜서</td>
              </tr>
              <tr>
                <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"  }}> A동 2층</td><img src="./꿀.png"/>
                </tr>
              <tr>
               
                <td style={{width:"100px" ,textAlign:"left"}}> 42,000원</td> 
                <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>12분 전</td>   
                </tr>
              </table>
              <br/>
              <img src="./선1.png" style={{width:"350px",color:"#797979"}}/>
              
              <table style={{marginTop:"15px"}}>
              <tr style={{ height: "35px"}} >
                <td style={{ width: "60px"}} rowSpan={3}><img src="./2.png"/></td>
                <td style={{fontSize:"16px"}}> LGTV</td>
              </tr>
              <tr>
                <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"  }}> B동 1층</td>
                </tr>
              
              <tr>
               
                <td style={{width:"100px" ,textAlign:"left"}}> 332,000원</td> 
                <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>1시간 전</td>   
                </tr>
            
              </table>
              <img src="./선1.png" style={{width:"350px",color:"#797979"}}/>
              
              <table style={{marginTop:"15px"}}>
              <tr style={{ height: "35px"}} >
                <td style={{ width: "60px"}} rowSpan={3}><img src="./3.png"/></td>
                <td style={{fontSize:"16px"}}> 에보나이트 터보R-볼링공</td>
              </tr>
              <tr>
                <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"  }}> C동 3층</td>
                </tr>
              <tr>
               
                <td style={{width:"100px" ,textAlign:"left"}}> 22,000원</td> 
                <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>2시간 전</td>   
                </tr>
            
              </table>
              <img src="./선1.png" style={{width:"350px",color:"#797979"}}/>
              <table style={{marginTop:"15px"}}>
              <tr style={{ height: "35px"}} >
                <td style={{ width: "60px"}} rowSpan={3}><img src="./4.png"/></td>
                <td style={{fontSize:"16px"}}><p style={{width:"150px"}}>닥터바이크 서스펜션</p></td>
              </tr>
              <tr>
                <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"  }}> 학교 1층</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </tr>
              <tr>
               
                <td style={{width:"100px" ,textAlign:"left"}}> 20,000원</td> 
                <td style={{ width:"200px" ,color:"gray",textAlign:"right"}}><p>5시간전</p></td> 
                </tr>
            
              </table>
              
             
              
              <img src="./선1.png" style={{width:"250px",color:"#797979"}}/><FiPlusCircle size="70" color="#14C38E"/>
              <table style={{marginTop:"15px"}}>
              <tr style={{ height: "35px"}} >
                <td style={{ width: "60px"}} rowSpan={3}><img src="./5.png"/></td>
                <td style={{fontSize:"16px"}}> 뉴발란스 2002</td>
              </tr>
              <tr>
                <td style={{ width: "340px" ,textAlign:"left" ,color:"gray"  }}> 학교 3층</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </tr>
              <tr>
               
                <td style={{width:"100px" ,textAlign:"left"}}> 100,000원</td> 
                <td style={{ width:"200px" ,color:"gray",textAlign:"right"  }}>9시간 전</td>   
                </tr>
            
              </table>
        </div>
      
    )
}
export default SaleList;