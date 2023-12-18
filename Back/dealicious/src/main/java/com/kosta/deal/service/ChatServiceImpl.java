package com.kosta.deal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;
import com.kosta.deal.repository.ChatRepository;
import com.kosta.deal.repository.ChatRoomRepository;
import com.kosta.deal.repository.DslRepository;

@Service
public class ChatServiceImpl implements ChatService {

	@Autowired
	private ChatRepository chatRepository;
	
	@Autowired
	private ChatRoomRepository chatRoomRepository;
	
	@Autowired
	private DslRepository dslRepository;
	
	@Override
	public void addChat(Chat chat) throws Exception {
		chatRepository.save(chat);
	}
	@Override
	public void addChatRoom(ChatRoom chatRoom) throws Exception {
		chatRoomRepository.save(chatRoom);
	}
	@Override
	public ChatRoom findChatRoomByChannelid(String channelId) throws Exception {
		return chatRoomRepository.findByChannelId(channelId).get();
	}
	@Override
	public ChatRoom findChatRoomBySaleNum(Integer num) throws Exception {
		return dslRepository.findChatRoomBySaleNum(num);
	}
	@Override
	public List<Chat> findChatListByChannelId(String channelId) throws Exception {
		return dslRepository.findChatListByChannelId(channelId);
	}
	

}
