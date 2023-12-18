package com.kosta.deal.service;

import java.util.List;

import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;

public interface ChatService {
	void addChat(Chat chat) throws Exception;
	void addChatRoom(ChatRoom chatRoom) throws Exception;
	ChatRoom findChatRoomByChannelid(String channelId) throws Exception;
	ChatRoom findChatRoomBySaleNum(Integer num) throws Exception;
	List<Chat> findChatListByChannelId(String channelId) throws Exception;
}
