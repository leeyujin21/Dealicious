package com.kosta.deal.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketTransportRegistration;
import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer  {
	
	@Autowired
	private ChatPreHandler chatPreHandler;
	
	@Autowired
	private ChatErrorHandler chatErrorHandler;
	  
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
    	/*
			Client에서 websocket연결할 때 사용할 API 경로를 설정해주는 메서드.
			ex) var sock = new SockJS("/ws/chat");
			에서 새로운 핸드쉐이크 커넥션을 생성할 때 사용됨.
    	 */
        registry.addEndpoint("/ws").setAllowedOriginPatterns("*").withSockJS();
        registry.setErrorHandler(chatErrorHandler);
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
    	/*
        	# 메시지 받을 때 관련 경로 설정
        	"/queue", "/topic" 이 두 경로가 prefix(api 경로 맨 앞)에 붙은 경우, 
        	messageBroker가 잡아서 해당 채팅방을 구독하고 있는 클라이언트에게 메시지를 전달해줌
        	주로 "/queue"는 1대1 메시징, "/topic"은 1대다 메시징일 때 주로 사용함.
        */
        registry.enableSimpleBroker("/sub");
        
        //메시지 보낼 때 관련 경로 설정
        registry.setApplicationDestinationPrefixes("/pub"); 
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration){
        registration.interceptors(chatPreHandler);
    }    
	
    @Override
    public void configureWebSocketTransport(WebSocketTransportRegistration registration) {
    	registration.setMessageSizeLimit(2048 * 2048);
    	registration.setSendBufferSizeLimit(2048 * 2048);
    	registration.setSendTimeLimit(2048 * 2048);
    }	
    
    @Bean
    public ServletServerContainerFactoryBean createServletServerContainerFactoryBean() {
        ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();
        container.setMaxTextMessageBufferSize(2048 * 2048);
        container.setMaxSessionIdleTimeout(2048L * 2048L);
        container.setAsyncSendTimeout(2048L * 2048L);
        container.setMaxBinaryMessageBufferSize(2048 * 2048);
        return container;
    }

	   
}
