import { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { TbExchange } from 'react-icons/tb';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { IoPerson } from 'react-icons/io5';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DEALBottom = () => {
  const [hasToken, setHasToken] = useState(false);
  const token = useSelector(state => state.persistedReducer.token);
  useEffect(() => {
    console.log('Token:', token); // 토큰이 콘솔에 출력됩니다.
    
    if (token) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, []);

  const handleLinkClick = (path) => {
    // 토큰이 있을 때와 없을 때 각각의 링크를 처리합니다.
    if (hasToken) {
      window.location.href = path; // 토큰이 있을 경우 정상적인 페이지로 이동
    } else {
      // 토큰이 없을 경우 mypagenl로 리다이렉션
      if (path === '/mypage' || path === '/chatlist') {
        window.location.href = '/mypagenl';
      } 
    }
  };

  return (
    <Nav className="b_wrapper nav">
      <div>
        <Link to="/" onClick={() => handleLinkClick('/')}>
          <AiFillHome size="23" color="72DBBB" />
        </Link>
      </div>
      <div>
        <Link to="/salelist" onClick={() => handleLinkClick('/salelist')}>
          <TbExchange size="23" color="72DBBB" />
        </Link>
      </div>
      <div>
        <Link onClick={() => handleLinkClick('/chatlist')}>
          <IoChatboxEllipsesOutline size="23" color="72DBBB" />
        </Link>
      </div>
      <div>
        <Link onClick={() => handleLinkClick('/mypage')}>
          <IoPerson size="23" color="72DBBB" />
        </Link>
      </div>
    </Nav>
  );
};

export default DEALBottom;
