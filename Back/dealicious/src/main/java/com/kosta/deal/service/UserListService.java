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
		System.out.println("로그인 유저리스트 추가:");
		System.out.println(loginUserList);
	}
	
	public void remove(User user) {
		loginUserList.remove(user);
		System.out.println("로그인 유저리스트 삭제:");
		System.out.println(loginUserList);
	}
	
	public void sendPayNoti(Chat chat, String buyer, String writer) {
		for(User u : loginUserList) {
			if(u.getEmail().equals(writer)) {
				System.out.println("작성자한테 보냄");
				sendingOperations.convertAndSend("/sub/chat/" + writer, chat);
			}
			if(u.getEmail().equals(buyer)) {
				System.out.println("구매자한테 보냄");
				sendingOperations.convertAndSend("/sub/chat/" + buyer, chat);
			}
		}
	}
	
	public void sendCompleteNoti(Chat chat, String buyer, String writer) {
		for(User u : loginUserList) {
			if(u.getEmail().equals(writer)) {
				System.out.println("작성자한테 보냄");
				sendingOperations.convertAndSend("/sub/chat/" + writer, chat);
			}
			if(u.getEmail().equals(buyer)) {
				System.out.println("구매자한테 보냄");
				sendingOperations.convertAndSend("/sub/chat/" + buyer, chat);
			}
		}
	}
	public void sendKeywordNoti(Chat chat, String email) {
		for(User u : loginUserList) {
			if(u.getEmail().equals(email)) {
				System.out.println("로그인한사람한테 보냄");
				sendingOperations.convertAndSend("/sub/chat/" + email, chat);
			}
		}
	}
}
