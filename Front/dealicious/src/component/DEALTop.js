import { IoIosSearch } from "react-icons/io";
import { PiBell } from "react-icons/pi";
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Stomp } from "@stomp/stompjs";
import * as SockJS from 'sockjs-client'; //npm install --save sockjs-client
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const DEALTop = () => {
  const client = useRef({});
  const user = useSelector(state => state.persistedReducer.user);
  const [noticnt, setNoticnt] = useState(0);

  useEffect(() => { //컴포넌트가 마운트될 때 connect() 함수를 호출하여 Stomp 클라이언트를 연결하고, 컴포넌트가 언마운트될때  disconnect() 함수를 호출하여 연결을 끊습니다.
    connect();
    console.log(user.email);
    return () => disconnect();
  }, [])

  const connect = () => {
    client.current = Stomp.over(() => {
      const sock = new SockJS("http://localhost:8090/ws")
      return sock;
    })
    client.current.connect(null, subscribe);
    client.current.activate();
  };
  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    console.log("알림 구독됨")
    client.current.subscribe('/sub/notifications/' + user.email, (res) => {
      console.log("알림왔니?");
      console.log(res);
      setNoticnt(noticnt + 1);
    })
  };

  return (
    <div className="t_wrapper" style={{ zIndex: 0 }}>
      <Navbar color='white' expand="md" className="navbar-expand-md">
        <NavbarBrand href="/" className="d-flex justify-content-between align-items-center w-100">
          <div className="logo">
            DEALicious
          </div>
          <div className="d-flex">
            <Link to='/search'>
              <IoIosSearch size='38' color='14C38E' />
            </Link>
            <Link to={user.email !== undefined && user.email!=='' ?'/notiactivity':'mypagenl'}>
              {noticnt >= 1 && <div style={{ borderRadius: "50px", position: "absolute", marginLeft: "20px", width: "18px", height: "18px", backgroundColor: "red", justifyContent: "center", alignItems: "center", display: "flex", color: "white", fontSize: "15px" }}>{noticnt}</div>}
              <PiBell size='38' color='14C38E' />
            </Link>
          </div>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default DEALTop;
