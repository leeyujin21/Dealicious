package com.kosta.deal.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.User;

@Service
public class UserListService {
	@Autowired
	private SimpMessageSendingOperations sendingOperations;
	
	private final List<User> loginUserList = new ArrayList<>();
	
	public void add(User user) {
		loginUserList.add(user);
	}
	
	public void remove(User user) {
		loginUserList.remove(user);
	}
	
	public void sendPayNoti(Chat chat, String buyer, String writer) {
		for(User u : loginUserList) {
			if(u.getEmail().equals(writer)) {
				sendingOperations.convertAndSend("/sub/chat/" + writer, chat);
			}
			if(u.getEmail().equals(buyer)) {
				sendingOperations.convertAndSend("/sub/chat/" + buyer, chat);
			}
		}
	}
	
	public void sendCompleteNoti(Chat chat, String buyer, String writer) {
		for(User u : loginUserList) {
			if(u.getEmail().equals(writer)) {
				sendingOperations.convertAndSend("/sub/chat/" + writer, chat);
			}
			if(u.getEmail().equals(buyer)) {
				sendingOperations.convertAndSend("/sub/chat/" + buyer, chat);
			}
		}
	}
	public void sendKeywordNoti(Chat chat, String email) {
		for(User u : loginUserList) {
			if(u.getEmail().equals(email)) {
				sendingOperations.convertAndSend("/sub/chat/" + email, chat);
			}
		}
	}
}
