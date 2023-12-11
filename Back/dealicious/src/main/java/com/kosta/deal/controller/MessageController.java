package com.kosta.deal.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import com.kosta.deal.dto.ChatDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MessageController {
	 private static final Logger LOGGER = LoggerFactory.getLogger( MessageController.class );

    private final SimpMessageSendingOperations sendingOperations;
    // 새로운 사용자가 웹 소켓을 연결할 때 실행됨
    // @EventListener은 한개의 매개변수만 가질 수 있다.
    @EventListener
    public void handleWebSocketConnectListener(SessionConnectEvent event) {
        StompHeaderAccessor headerAccesor = StompHeaderAccessor.wrap(event.getMessage());
        String sessionId = headerAccesor.getSessionId();        
        LOGGER.info("Received a new web socket connection : "+sessionId);
    }
    
    public Map<Integer, List<ChatDto>> chatlist = new HashMap<>();

    // 사용자가 웹 소켓 연결을 끊으면 실행됨
    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccesor = StompHeaderAccessor.wrap(event.getMessage());
        String sessionId = headerAccesor.getSessionId();
        LOGGER.info("sessionId Disconnected : " + sessionId);
    }
    
    @MessageMapping("/chat")
    public void sendMessage(ChatDto chatDto, SimpMessageHeaderAccessor accessor) {
    	System.out.println(chatDto);
    	List<ChatDto> channel = chatlist.get(chatDto.getChannelId());
    	channel.add(chatDto);
    	sendingOperations.convertAndSend("/sub/chat/" + chatDto.getChannelId(), chatDto);
    }
    
    @GetMapping("/chatroom/{channelid}")
	public ResponseEntity<List<ChatDto>> boardDetail(Authentication authentication,@PathVariable Integer channelid) {    	
    	System.out.println("여기옴?");
    	List<ChatDto> channel = chatlist.get(channelid);
    	System.out.println(channel);
    	if(channel==null) { //이미 생성
    		channel = new ArrayList<>();
        	chatlist.put(channelid, channel);    		
    	}
    	try {
			return new ResponseEntity<List<ChatDto>>(channel, HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<ChatDto>>(HttpStatus.BAD_REQUEST);
		}
	}
}