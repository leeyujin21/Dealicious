import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stomp } from '@stomp/stompjs'; //npm install --save @stomp/stompjs
import * as SockJS from 'sockjs-client'; //npm install --save sockjs-client
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaImage } from "react-icons/fa6";
import './img.css';



const StompChatting = () => {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState('');
  const { channelId, writerId } = useParams();
  const token = useSelector(state => state.persistedReducer.token);
  const client = useRef({});

  const chatBox = {border:"1px solid gray",borderRadius:"20%",width:"87px",height:"41px",textAlign:"center",float:"right",backgroundColor:"#14C38E",color:"white",marginTop:"-30px"};
  const opponent={backgroundColor:"#D9D9D9",borderRadius:"20%",width:"87px",height:"41px",textAlign:"center",paddingTop:"5px",marginLeft:"20px",marginTop:"20px"}

  console.log(token);
  useEffect(() => {
    connect();

    axios.get(`http://localhost:8090/chatroom/` + channelId, {
      headers: {
        Authorization: token,
      }
    })
      .then(res => {
        console.log(res);
        setChatList((_chat_list) => [
          ..._chat_list, ...res.data
        ]);
      })
      .catch(err => {
        console.log(err);
      })
    // return () => disconnect();
  }, [])

  const connect = () => {
    client.current = Stomp.over(() => {
      const sock = new SockJS("http://localhost:8090/ws")
      return sock;
    })
    client.current.connect(null, subscribe);
    client.current.activate();
  };

  const publish = (chat) => {
    if (!client.current.connected) return;
    console.log("chat:" + chat);
    client.current.send('/pub/chat', {},
      JSON.stringify({
        channelId: channelId,
        writerId: writerId,
        chat: chat,
      }),
    );
    setChat('');
  };

  const uploadFile = (input) => {
    if (input.target.files.length > 0) {
      console.log('파일 선택됨')
      var FR = new FileReader();
      FR.onload = function (base64) {
        const image = new Image();
        image.src = base64.target.result;
        image.onload = (e) => {
          const $canvas = document.createElement(`canvas`);
          const ctx = $canvas.getContext(`2d`);

          $canvas.width = e.target.width;
          $canvas.height = e.target.height;

          ctx.drawImage(e.target, 0, 0);

          // 용량이 줄어든 base64 이미지
          publishFile($canvas.toDataURL(`image/jpeg`, 0.5))
        }

      };
      FR.readAsDataURL(input.target.files[0]);
    }
  }

  const publishFile = (data) => {
    if (!client.current.connected) return;
    console.log(data.length)
    client.current.send('/pub/chat', {},
      JSON.stringify({
        channelId: channelId,
        writerId: writerId,
        data: data,
      }),
    );
    setChat('');
  };

  const subscribe = () => {
    client.current.subscribe('/sub/chat/' + channelId, (body) => {
      if (body.headers['content-type'] === 'application/octet-stream') {  //binary
      } else {
        const receive = JSON.parse(body.body);
        console.log(receive)
        setChatList((_chat_list) => [
          ..._chat_list, receive
        ]);
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
  useEffect(() => {     //컴포넌트가 마운트될 때 connect() 함수를 호출하여 Stomp 클라이언트를 연결하고, 컴포넌트가 언마운트될때  disconnect() 함수를 호출하여 연결을 끊습니다.
    connect();

    return () => disconnect();
  }, []);

  return (
    <div>
      <div style={{width:"300px",height:"600px", border:"1px solid black", padding:"10px"}}>
        {chatList.map((item, index) =>
          
          <div key={index}>
            {item.writerId!==writerId&&(
              <div>
                  <div>{item.writerId}</div>
                  <div style={opponent}>{item.chat}</div>
                  
         
              </div>
              
            )}
            {item.writerId==writerId&&(
              <div style={{marginTop:"50px"}}>
                <div>
                <div>{item.chat!=null&&item.chat!==''}</div>
                <br/>
                <div style={chatBox}>{item.chat}</div>
                 
                </div>
              </div>

            )}
           {item.data!=null&&item.data!==''&& item.chat!=null&&item.chat!==''&&(
            <img src={item.data} alt='' width={"20%"} style={{marginTop:"20px",float:"right"}}/>
           )}

          </div>  
        )}
      </div>
      <form onSubmit={(event) => handleSubmit(event, chat)}>
        <label for="file" style={{cursor:"pointer",marginLeft:"-90px",width:'30px',height:"30px",borderRadius:"50%",backgroundColor:"#D9D9D9"}} onChange={uploadFile} accept="image/*"><FaImage /></label>
        <input type={'file'} id="file" style={{display:"none"}}></input>
        <input type={'text'} style={{marginLeft:"10px",backgroundColor:"#D9D9D9",borderRadius:"10px",borderColor:"white"}} placeholder='채팅하기' name={'chatInput'} onChange={handleChange} value={chat} />
        <input type="image" style={{marginLeft:"10px",marginTop:"30px"}} src="..\Sent.png" name="submit"  />
      </form>
    </div>
  );
}

export default StompChatting;