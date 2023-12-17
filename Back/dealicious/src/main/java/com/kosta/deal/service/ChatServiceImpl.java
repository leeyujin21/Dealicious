package com.kosta.deal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;
import com.kosta.deal.repository.ChatRepository;
import com.kosta.deal.repository.ChatRoomRepository;

@Service
public class ChatServiceImpl implements ChatService {

	@Autowired
	private ChatRepository chatRepository;
	
	@Autowired
	private ChatRoomRepository chatRoomRepository;
	
	@Override
	public void addChat(Chat chat) throws Exception {
		chatRepository.save(chat);
	}
	@Override
	public void addChatRoom(ChatRoom chatRoom) throws Exception {
		chatRoomRepository.save(chatRoom);
	}

}
