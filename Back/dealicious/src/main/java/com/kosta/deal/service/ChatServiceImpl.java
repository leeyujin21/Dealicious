package com.kosta.deal.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;
import com.kosta.deal.entity.Sale;
import com.kosta.deal.entity.User;
import com.kosta.deal.repository.ChatRepository;
import com.kosta.deal.repository.ChatRoomRepository;
import com.kosta.deal.repository.DslRepository;
import com.querydsl.core.Tuple;

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
	public ChatRoom findChatRoomBySaleNumAndEmail(Integer num, String email) throws Exception {
		return dslRepository.findChatRoomBySaleNumAndEmail(num, email);
	}

	@Override
	public List<Chat> findChatListByChannelId(String channelId) throws Exception {
		return dslRepository.findChatListByChannelId(channelId);
	}

	@Override
	public List<Map<String, Object>> getChatListForm(User user) throws Exception {
		List<Map<String, Object>> res = new ArrayList<Map<String, Object>>();
		List<String> channelId = dslRepository.getChannelIdList(user.getEmail());
		System.out.println(channelId);
		System.out.println("---------------------");
		for (String s : channelId) {
			ChatRoom chatRoom = chatRoomRepository.findByChannelId(s).get();
			System.out.println(chatRoom);
			if (chatRoom.getCreator().equals(user.getEmail())) {
				System.out.println("구매자");
				User user1 = dslRepository.getUserFromBuyer(s);
				Sale sale = dslRepository.getSaleForChatlist(s);
				Chat chat = dslRepository.getChatForChatlist(s);
				Map<String, Object> map = new HashMap<>();
				map.put("profileimgurl", user1.getProfileimgurl());
				map.put("nickname", user1.getNickname());
				map.put("category", sale.getCategory());
				map.put("chatdate", chat.getChatdate());
				if(!chat.getWriterId().equals(user.getEmail())) {
					map.put("isRead", chat.getIsRead());
				}
				map.put("chat", chat.getChat());
				map.put("fileurl", sale.getFileurl());
				map.put("channelId", s);
				res.add(map);
			} else {
				System.out.println("판매자");
				User user1 = dslRepository.getUserFromSeller(s);
				System.out.println(user1);
				Sale sale = dslRepository.getSaleForChatlist(s);
				Chat chat = dslRepository.getChatForChatlist(s);
				Map<String, Object> map = new HashMap<>();
				map.put("profileimgurl", user1.getProfileimgurl());
				map.put("nickname", user1.getNickname());
				map.put("category", sale.getCategory());
				map.put("chatdate", chat.getChatdate());
				if(!chat.getWriterId().equals(user.getEmail())) {
					map.put("isRead", chat.getIsRead());
				}
				map.put("chat", chat.getChat());
				map.put("fileurl", sale.getFileurl());
				map.put("channelId", s);
				res.add(map);
			}
//			if (chatRoom.getCreator().equals(user.getEmail())) {
//				Sale sale = dslRepository.getSaleForChatlist(s);
//				
//				String profileimgurl = t.get(0, String.class);
//				String nickname = t.get(1, String.class);
//				String category = t.get(2, String.class);
//				Timestamp chatdate = t.get(3, Timestamp.class);
//				String chat = t.get(4, String.class);
//				String fileurl = t.get(5, String.class);
//
//				Map<String, Object> map = new HashMap<>();
//				map.put("profileimgurl", profileimgurl);
//				map.put("nickname", nickname);
//				map.put("category", category);
//				map.put("chatdate", chatdate);
//				map.put("chat", chat);
//				map.put("fileurl", fileurl);
//				res.add(map);
//			} else {
//				Tuple t = dslRepository.getChatListFormFromWriter(s);
//				
//				String profileimgurl = t.get(0, String.class);
//				String nickname = t.get(1, String.class);
//				String category = t.get(2, String.class);
//				Timestamp chatdate = t.get(3, Timestamp.class);
//				String chat = t.get(4, String.class);
//				String fileurl = t.get(5, String.class);
//
//				Map<String, Object> map = new HashMap<>();
//				map.put("profileimgurl", profileimgurl);
//				map.put("nickname", nickname);
//				map.put("category", category);
//				map.put("chatdate", chatdate);
//				map.put("chat", chat);
//				map.put("fileurl", fileurl);
//				res.add(map);
//			}
		}
//		Collections.sort(res, Comparator.comparing(m -> (String) m.get("chatdate")));
		return res;

	}
}
