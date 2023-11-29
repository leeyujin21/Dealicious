import { IoIosSearch } from "react-icons/io";
import { PiBell } from "react-icons/pi";
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const DEALTop = () => {
  return (
    <div className="t_wrapper" style={{zIndex:0}}>
      <Navbar color='white' expand="md" className="navbar-expand-md">
        <NavbarBrand href="/" className="d-flex justify-content-between align-items-center w-100">
          <div className="logo">
            DEALicious
          </div>
          <div className="d-flex">
            <Link to='/search'>
                <IoIosSearch size='38' color='14C38E' />
            </Link>
            <Link to='/notiactivity'>
                <PiBell size='38' color='14C38E' />
            </Link>
          </div>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default DEALTop;
