import { AiFillHome } from "react-icons/ai";
import { TbExchange } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import {
    Nav,
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const DEALBottom = () => {
  return (
    <Nav className="b_wrapper nav">
        <div>
          <Link to={"/"}>
            <AiFillHome size='38' color='72DBBB' />
          </Link>
        </div>
        <div>
          <Link to={"/salelist"}>
            <TbExchange size='38' color='72DBBB' />
          </Link>
        </div>
        <div>
          <Link to={"/chatlist"}>
            <IoChatboxEllipsesOutline size='38' color='72DBBB' />
          </Link>
        </div>
        <div>
          <Link to={"/mypage"}>
            <IoPerson size='38' color='72DBBB' />
          </Link>
        </div>
    </Nav>
  );
}

export default DEALBottom;
