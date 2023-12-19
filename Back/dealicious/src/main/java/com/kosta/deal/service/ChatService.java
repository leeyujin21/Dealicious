package com.kosta.deal.service;

import java.util.List;
import java.util.Map;

import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;
import com.kosta.deal.entity.User;

public interface ChatService {
	void addChat(Chat chat) throws Exception;
	void addChatRoom(ChatRoom chatRoom) throws Exception;
	ChatRoom findChatRoomByChannelid(String channelId) throws Exception;
	ChatRoom findChatRoomBySaleNumAndEmail(Integer num, String Eamil) throws Exception;
	List<Chat> findChatListByChannelId(String channelId) throws Exception;
	List<Map<String,Object>> getChatListForm(User user) throws Exception;
}
