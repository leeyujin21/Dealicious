import { AiFillHome } from 'react-icons/ai';
import { TbExchange } from 'react-icons/tb';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { IoPerson } from 'react-icons/io5';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DEALBottom = () => {
  const user = useSelector(state => state.persistedReducer.user);
  console.log(user.email)

  return (
    <Nav className="b_wrapper nav">
      <div>
        <Link to="/">
          <AiFillHome size="23" color="72DBBB" />
        </Link>
      </div>
      <div>
        <Link to="/salelist">
          <TbExchange size="23" color="72DBBB" />
        </Link>
      </div>
      <div>
        <Link to={user.email===""||user.email===undefined?"/mypagenl":"/chatlist"}>
          <IoChatboxEllipsesOutline size="23" color="72DBBB" />
        </Link>
      </div>
      <div>
        <Link to={user.email===""||user.email===undefined?"/mypagenl":"/mypage"}>
          <IoPerson size="23" color="72DBBB" />
        </Link>
      </div>
    </Nav>
  );
};

export default DEALBottom;
