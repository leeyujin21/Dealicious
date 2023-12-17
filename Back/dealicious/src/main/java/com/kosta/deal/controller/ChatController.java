package com.kosta.deal.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;
import com.kosta.deal.entity.User;
import com.kosta.deal.service.ChatService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ChatController {
	 private static final Logger LOGGER = LoggerFactory.getLogger( ChatController.class );

    private final SimpMessageSendingOperations sendingOperations;
    private final ChatService chatService;
    // 새로운 사용자가 웹 소켓을 연결할 때 실행됨
    // @EventListener은 한개의 매개변수만 가질 수 있다.
    @EventListener
    public void handleWebSocketConnectListener(SessionConnectEvent event) {
        StompHeaderAccessor headerAccesor = StompHeaderAccessor.wrap(event.getMessage());
        String sessionId = headerAccesor.getSessionId();        
        System.out.println("event:");
        System.out.println(event);
        LOGGER.info("Received a new web socket connection : "+sessionId);
    }

    // 사용자가 웹 소켓 연결을 끊으면 실행됨
    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccesor = StompHeaderAccessor.wrap(event.getMessage());
        String sessionId = headerAccesor.getSessionId();
        LOGGER.info("sessionId Disconnected : " + sessionId);
    }
    
    @MessageMapping("/chat")
    public void sendMessage(Chat chat, SimpMessageHeaderAccessor accessor) {
    	try {
    		
    		ChatRoom chatRoom = ChatRoom.builder().channelId(chat.getChannelId()).creator(chat.getWriterId()).build();
    		chatService.addChatRoom(chatRoom);
			chatService.addChat(chat);
			sendingOperations.convertAndSend("/sub/chat/" + chat.getChannelId(), chat);
		} catch (Exception e) {
			e.printStackTrace();
		}
    	
    }
    
    public void sendNotifications(User user) {
    	sendingOperations.convertAndSend("/sub/notifications/" + user.getEmail(), "알림 추가");
    }
    
//    @GetMapping("/chatroom/{channelid}")
//	public ResponseEntity<List<ChatDto>> boardDetail(Authentication authentication,@PathVariable String channelid) {    	
//    	System.out.println("여기옴?");
//    	List<ChatDto> channel = chatlist.get(channelid);
//    	System.out.println(channel);
//    	if(channel==null) { //이미 생성
//    		channel = new ArrayList<>();
//        	chatlist.put(channelid, channel);    		
//    	}
//    	try {
//			return new ResponseEntity<List<ChatDto>>(channel, HttpStatus.OK);
//		} catch(Exception e) {
//			e.printStackTrace();
//			return new ResponseEntity<List<ChatDto>>(HttpStatus.BAD_REQUEST);
//		}
//	}
}