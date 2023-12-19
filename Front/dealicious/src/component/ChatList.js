import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Stomp } from '@stomp/stompjs'; //npm install --save @stomp/stompjs
import * as SockJS from 'sockjs-client'; //npm install --save sockjs-client
import { useSelector } from 'react-redux';

function ChatList() {
    const [chatRoomList, setChatRoomList] = useState([]);
    const token = useSelector(state => state.persistedReducer.token);
    const client = useRef({});
    const [channelIdList, setChannelIdList] = useState([]);
    useEffect(() => { //컴포넌트가 마운트될 때 connect() 함수를 호출하여 Stomp 클라이언트를 연결하고, 컴포넌트가 언마운트될때  disconnect() 함수를 호출하여 연결을 끊습니다.
        connect();
        axios.get(`http://localhost:8090/chatroomlist`, {
            headers: {
                Authorization: token,
            }
        })
            .then(res => {
                console.log(res.data);
                setChatRoomList((_chat_room_list) => [
                    ..._chat_room_list, ...res.data
                ]);
                // setChannelIdList((channel_list) => [
                //     ...channel_list, ...res.data.chatroomlist.channelId
                // ])
            })
            .catch(err => {
                console.log(err);
            })


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
        for (const channelId of channelIdList) {
            client.current.subscribe('/sub/chat/' + channelId, (body) => {
                if (body.headers['content-type'] === 'application/octet-stream') {  //binary
                } else {
                    const receive = JSON.parse(body.body);
                    console.log(receive)
                    setChatRoomList((_chat_list) => [
                        ..._chat_list, receive
                    ]);
                }
            })
        };
    }
    return (
        <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden", paddingLeft: "20px", paddingRight: "20px" }}>
            <div style={{ borderBottom: "1px solid", fontSize: "20px", paddingBottom: "10px" }}><b>채팅</b></div>
            {chatRoomList.map((item, index) =>
            <Link to={"/chat/"+item.channelId} key={index} style={{ textDecoration: "none", color: "black" }}>
            <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray" }}>
                <table>
                    <tr>
                        <td rowSpan={2}>{ item.profileimgurl==null?<img src='/profile.png' />:<img src={`http://localhost:8090/img/${item.profileimgurl}`} alt='' style={{ width: "20px", height: "20px"}}/>}</td>
                        <td style={{ width: "120px", fontSize: "15px", paddingLeft: "10px" }}> {item.nickname}</td>
                        <td style={{ width: "140px", color: "gray", fontSize: "12px" }}>{item.category}</td>&nbsp;
                        <td style={{ width: "120px", color: "gray", fontSize: "15px" }}>{item.chatdate}</td>&nbsp;
                        <td rowSpan={2}><img src={`http://localhost:8090/img/${item.fileurl}`} alt='' style={{ width: "20px", height: "20px"}} /></td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{ width: "300px", fontSize: "13px", color: "gray", paddingLeft: "10px" }}>{item.chat}</td>
                    </tr>

                </table>
            </div>
        </Link>
            )}
            

        </div>
    )
}
export default ChatList;