import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Stomp } from '@stomp/stompjs'; //npm install --save @stomp/stompjs
import * as SockJS from 'sockjs-client'; //npm install --save sockjs-client
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaImage } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import './img.css';



const StompChatting = () => {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState('');
  const token = useSelector(state => state.persistedReducer.token);
  const [sale, setSale] = useState({
    num: "",
    email: "",
    title: "",
    type: "",
    amount: "",
    category: "",
    content: "",
    place: "",
    fileurl: "",
    status: "",
    ggull: "",
    viewcount: null,
    zzimcnt: null,
    buyeremail: "",
    writerdate: "",
  });
  const [chatpartner, setChatpartner] = useState({email:'', nickname:'', password:'', type:'', typename:'', tel:'', accountbank:'', accountbank:'', admincode:'', profileimgurl:''});
  const messagesRef = useRef(null);
  const client = useRef({});
  const { channelId } = useParams();
  const user = useSelector(state => state.persistedReducer.user);

  // const chatBox = { border: "1px solid gray", borderRadius: "20%", width: "87px", height: "41px", textAlign: "center", float: "right", backgroundColor: "#14C38E", color: "white", marginTop: "-30px" };
  // const opponent = { backgroundColor: "#D9D9D9", borderRadius: "20%", width: "87px", height: "41px", textAlign: "center", paddingTop: "5px", marginLeft: "20px", marginTop: "20px" }

  console.log(token);
  useEffect(() => { //컴포넌트가 마운트될 때 connect() 함수를 호출하여 Stomp 클라이언트를 연결하고, 컴포넌트가 언마운트될때  disconnect() 함수를 호출하여 연결을 끊습니다.
    connect();
    axios.get(`http://localhost:8090/chatroom/` + channelId, {
      headers: {
        Authorization: token,
      }
    })
      .then(res => {
        console.log(res.data);
        setChatList((_chat_list) => [
          ..._chat_list, ...res.data.chatlist
        ]);
        setSale(res.data.sale);
        setChatpartner(res.data.chatpartner);
      })
      .catch(err => {
        console.log(err);
      })


    if (messagesRef.current) {
      console.log("실행됨?")
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
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

  const publish = () => {
    if (!client.current.connected) return;
    console.log("chat:" + chat);
    client.current.send('/pub/chat', {},
      JSON.stringify({
        channelId: channelId,
        writerId: user.email,
        receiverId: '',
        chat: chat,
      }),
    );
    setChat('');
  };

  // const uploadFile = (input) => {
  //   if (input.target.files.length > 0) {
  //     console.log('파일 선택됨')
  //     var FR = new FileReader();
  //     FR.onload = function (base64) {
  //       const image = new Image();
  //       image.src = base64.target.result;
  //       image.onload = (e) => {
  //         const $canvas = document.createElement(`canvas`);
  //         const ctx = $canvas.getContext(`2d`);

  //         $canvas.width = e.target.width;
  //         $canvas.height = e.target.height;

  //         ctx.drawImage(e.target, 0, 0);

  //         // 용량이 줄어든 base64 이미지
  //         publishFile($canvas.toDataURL(`image/jpeg`, 0.5))
  //       }

  //     };
  //     FR.readAsDataURL(input.target.files[0]);
  //   }
  // }

  // const publishFile = (data) => {
  //   if (!client.current.connected) return;
  //   console.log(data.length)
  //   client.current.send('/pub/chat', {},
  //     JSON.stringify({
  //       channelId: channelId,
  //       writerId: user.email,
  //       data: data,
  //     }),
  //   );
  //   setChat('');
  // };

  const subscribe = () => {
    client.current.subscribe('/sub/chat/' + channelId, (body) => {
      if (body.headers['content-type'] === 'application/octet-stream') {  //binary
      } else {
        const receive = JSON.parse(body.body);
        console.log(receive)
        setChatList((_chat_list) => [
          ..._chat_list, receive
        ]);
        console.log(chatList);
      }
    })
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const handleChange = (event) => { // 채팅 입력 시 state에 값 설정
    setChat(event.target.value);
  };

  const handleSubmit = (event, chat) => { // 보내기 버튼 눌렀을 때 publish
    event.preventDefault();

    publish(chat);
  };

  return (
    <div ref={messagesRef} className='main' style={{ overflow: "scroll", height: "732px", overflowX: "hidden" }}>
      <div style={{ paddingTop: "8px", position: "absolute", textAlign: "left", marginBottom: "20px", width: "390px", height: "100px", marginTop: "650px", backgroundColor: "white" }}>
        <FaImage size="30" style={{ color: "#D9D9D9" }} />
        <input style={{ marginLeft: "10px", border: "white", width: "300px", height: "40px", borderRadius: "10px", backgroundColor: "#D9D9D9" }} placeholder='  채팅하기' onChange={handleChange} value={chat}></input>
        <IoMdSend size="40" style={{ marginLeft: "10px", color: "#D9D9D9" }} onClick={publish} />
      </div>

      <div style={{ textAlign: "left", color: "#14C38E", display: "flex", verticalAlign: "middle" }}>
        <Link to="/chatlist"><GoArrowLeft size={30} style={{ color: "#14C38E", height: "40px" }} /></Link>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", height: "40px", lineHeight: "40px" }}>{chatpartner.nickname}</div>
      </div>

      <div style={{ marginTop: "20px", width: "385px", borderTop: "1px solid gray", borderBottom: "1px solid gray", height: "105px" }}>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <div style={{ display: "flex" }}>
            <div><img src={`http://localhost:8090/img/${sale.fileurl}`} style={{ width: "80px" }}></img></div>
            <div style={{ width: "230px", textAlign: "left", lineHeight: "40px" }}>
              <Link to={"/saledetail/"+sale.num} style={{ color: "black", textDecoration: "none" }}><div style={{ textAlign: "left" }}>{sale.title}</div></Link>
              <div style={{ textAlign: "left", fontSize: "18px" }}>{sale.amount}원</div>
            </div>
            <div style={{ lineHeight: "40px", width: "80px", textAlign: "right", marginRight: "10px" }}>
              <div>{sale.status == 1 ? "판매중" : "예약중"}</div>
              <div>{sale.ggull == 1 ? <Link to="/gpay"><img src='/ggul.png' style={{ width: "34px", height: "19px" }}></img></Link> : ""}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <br />
        {chatList.map((item, index) => <div key={index}>{

          item.writerId == user.email ? <div style={{ textAlign: "right", marginBottom: "15px" }}>
            <div style={{ display: "inline-block", width: "auto", maxWidth: "210px", borderRadius: "10px", backgroundColor: "#14C38E", padding: "10px", color: "white" }}>{item.chat}</div>
          </div>
            :
            <div style={{ textAlign: "left", marginBottom: "15px" }}>
              <div style={{ display: "inline-block", marginRight: "8px" }}><img src='/profile.png' style={{ width: "50px" }}></img></div>
              <div style={{ display: "inline-block", width: "auto", maxWidth: "210px", borderRadius: "10px", backgroundColor: "#D9D9D9", padding: "10px" }}>{item.chat}</div>
            </div>
        }
        </div>)}
      </div>
      <div style={{ height: "50px" }}></div>
    </div>



    // <div>
    //   <div style={{width:"300px",height:"600px", border:"1px solid black", padding:"10px"}}>
    //     {chatList.map((item, index) =>

    //       <div key={index}>
    //         {item.writerId!==writerId&&(
    //           <div>
    //               <div>{item.writerId}</div>
    //               <div style={opponent}>{item.chat}</div>


    //           </div>

    //         )}
    //         {item.writerId==writerId&&(
    //           <div style={{marginTop:"50px"}}>
    //             <div>
    //             <div>{item.chat!=null&&item.chat!==''}</div>
    //             <br/>
    //             <div style={chatBox}>{item.chat}</div>

    //             </div>
    //           </div>

    //         )}
    //        {item.data!=null&&item.data!==''&& item.chat!=null&&item.chat!==''&&(
    //         <img src={item.data} alt='' width={"20%"} style={{marginTop:"20px",float:"right"}}/>
    //        )}

    //       </div>  
    //     )}
    //   </div>
    //   <form onSubmit={(event) => handleSubmit(event, chat)}>
    //     <label for="file" style={{cursor:"pointer",marginLeft:"-90px",width:'30px',height:"30px",borderRadius:"50%",backgroundColor:"#D9D9D9"}} onChange={uploadFile} accept="image/*"><FaImage /></label>
    //     <input type={'file'} id="file" style={{display:"none"}}></input>
    //     <input type={'text'} style={{marginLeft:"10px",backgroundColor:"#D9D9D9",borderRadius:"10px",borderColor:"white"}} placeholder='채팅하기' name={'chatInput'} onChange={handleChange} value={chat} />
    //     <input type="image" style={{marginLeft:"10px",marginTop:"30px"}} src="..\Sent.png" name="submit"  />
    //   </form>
    // </div>
  );
}

export default StompChatting;