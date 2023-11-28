import { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";

const Search = () => {

  return (
    <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden"}}>
      <br/>
      <div style={{textAlign:"left",color:"gray", borderBottom:"1px solid gray",height:"40px"}}>
      <GoArrowLeft size={30} style={{color:"gray"}}/><input style={{marginLeft:"10px",border:"white"}}placeholder='어떤 물품을 원하시나요?'></input>
      </div>
      <br/>
      <p style={{fontWeight:"bold", textAlign:"left"}}>인기 검색어</p>
      <table>
      <tr style={{height:"40px"}}>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>에어팟</td>
      </tr>
      <tr style={{height:"40px"}}>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>에어프라이어</td>
      </tr>
      <tr style={{height:"40px"}}>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>갤럭시탭</td>
      </tr>
      <tr style={{height:"40px"}}>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>수학의정석</td>
      </tr>
      <tr style={{height:"40px"}}>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>야구 티켓</td>
      </tr>
      <tr style={{height:"40px"}}>
        <td style={{width:"20px"}}></td>
        <td style={{textAlign:"left"}}>선풍기</td>
      </tr>
      </table>
    </div>
  );
}

export default Search;
