import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stomp } from '@stomp/stompjs'; //npm install --save @stomp/stompjs
import * as SockJS from 'sockjs-client'; //npm install --save sockjs-client
import axios from 'axios';
import { useSelector } from 'react-redux';

const StompChatting = () => {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState('');
  const { channelId, writerId } = useParams();
  const token = useSelector(state => state.persistedReducer.token);
  const client = useRef({});

  const chatBox = {border:"1px solid gray",borderRadius:"20%",width:"87px",height:"41px",textAlign:"center",float:"right",backgroundColor:"#14C38E",color:"white",marginTop:"-30px"};
  const opponent={backgroundColor:"#D9D9D9",borderRadius:"20%",width:"87px",height:"41px",textAlign:"center",paddingTop:"5px",marginLeft:"70px",marginTop:"-10px"}

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

  return (
    <div>
      <div style={{width:"300px",height:"600px", border:"1px solid black", padding:"10px"}}>
        {chatList.map((item, index) =>
          
          <div key={index}>
            {item.writerId!==writerId&&(
              <div>
                  <div>{item.writerId}</div>
                  <div style={opponent}>{item.chat}</div>
                  {item.data!=null&&item.data!=='' && <img src={item.data} alt='' width={"20%"} style={{marginTop:"20px",float:"right"}}/>}

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

            
             
            {item.writerId==writerId&&item.data!=null&&item.data!=='' && <img src={item.data} alt='' width={"20%"} style={{marginTop:"20px",float:"right"}}/>}
          
          
          </div>  
        )}
      </div>
      <form onSubmit={(event) => handleSubmit(event, chat)}>
        <input type={'file'} onChange={uploadFile} accept="image/*"/>
        <input type={'text'} name={'chatInput'} onChange={handleChange} value={chat} />
        <input type={'submit'} value={'의견 보내기'} />
      </form>
    </div>
  );
}

export default StompChatting;