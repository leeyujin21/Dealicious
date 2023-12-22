package com.kosta.deal.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;

@Configuration
public class ChatPreHandler implements ChannelInterceptor {
	@Override
	public Message<?> preSend(Message<?> message, MessageChannel channel) {
		StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
//		if (accessor.getCommand().toString().equals("CONNECT")) {
//			try {
//				String token = accessor.getNativeHeader("Authorization").get(0).replace(JwtProperties.TOKEN_PREFIX, "");
//				// 토큰 검증
//				String username = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET)).build().verify(token)
//						.getClaim("username").asString();
//				User user = userRepository.findByUsername(username);
//				if(user==null) throw new Exception();
//			} catch (Exception e) {
//				System.out.println(e.getMessage());
//				throw new MessageDeliveryException("UNAUTHORIZED");
//			}
//		}
		return message;
	}
}
