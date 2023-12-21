import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Stomp } from '@stomp/stompjs'; //npm install --save @stomp/stompjs
import * as SockJS from 'sockjs-client'; //npm install --save sockjs-client
import { useSelector } from 'react-redux';
import { useWebSocket } from './WebSocketProvider';

function ChatList() {
    const [chatRoomList, setChatRoomList] = useState([]);
    const token = useSelector(state => state.persistedReducer.token);
    const client = useRef({});
    const changedate = (e) => {
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // 날짜 데이터가 UTC로 전송되었다고 가정
        }).format(new Date(e));
        return formattedDate;
    }

    useEffect(() => { //컴포넌트가 마운트될 때 connect() 함수를 호출하여 Stomp 클라이언트를 연결하고, 컴포넌트가 언마운트될때  disconnect() 함수를 호출하여 연결을 끊습니다.
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
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const goChatRoom = (e) => {
        window.location.href = "/chat/" + e;
    }
    return (
        <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden", paddingLeft: "20px", paddingRight: "20px" }}>
            <div style={{ borderBottom: "1px solid", fontSize: "20px", paddingBottom: "10px" }}><b>채팅</b></div>
            {chatRoomList.map((item, index) =>
                <div key={index} style={{ cursor: "pointer", paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray" }} onClick={() => goChatRoom(item.channelId)}>
                    <table>
                        <tbody>
                            <tr>
                                <td rowSpan={2}>{item.profileimgurl == null ? <img src='/profile.png' alt='' style={{ width: "50px", height: "50px" }} /> : <img src={`http://localhost:8090/img/${item.profileimgurl}`} alt='' style={{ width: "50px", height: "50px" }} />}</td>
                                <td style={{ width: "120px", fontSize: "15px", paddingLeft: "10px" }}>{item.nickname}</td>
                                <td style={{ paddingRight: "15px", width: "70px", color: "gray", fontSize: "12px" }}>{item.category}&nbsp;</td>
                                <td style={{ width: "150px", color: "gray", fontSize: "13px" }}>{changedate(item.chatdate)}&nbsp;</td>
                                <td rowSpan={2}><img src={`http://localhost:8090/img/${item.fileurl.split(',')[0]}`} alt='' style={{ width: "50px", height: "50px" }} /></td>
                            </tr>
                            <tr>
                                <td colSpan={4} style={{ width: "300px", fontSize: "13px", color: "gray", paddingLeft: "10px" }}>{item.chat}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}


        </div>
    )
}
export default ChatList;