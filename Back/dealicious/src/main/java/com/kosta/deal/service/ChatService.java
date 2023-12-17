package com.kosta.deal.service;

import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;

public interface ChatService {
	void addChat(Chat chat) throws Exception;
	void addChatRoom(ChatRoom chatRoom) throws Exception;
}
