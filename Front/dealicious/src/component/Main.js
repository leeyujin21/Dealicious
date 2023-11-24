import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { PiBell } from "react-icons/pi";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

const DEALTop = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className='main' style={{overflow:"scroll", height:"742px", overflowX:"hidden"}}>
      메인입니다!!!메인입니다!!!메인입니다!!!메인입니다!!!메인입니다!!!메인입니다!!!메인입니다!!!메인입니다!!!
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>메인입니다!!!</h1>
      <h1>이런씨</h1>
    </div>
  );
}

export default DEALTop;
