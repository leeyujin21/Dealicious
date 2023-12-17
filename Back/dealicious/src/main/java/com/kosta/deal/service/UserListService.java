package com.kosta.deal.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.kosta.deal.entity.User;

@Service
public class UserListService {
	private final List<User> loginUserList = new ArrayList<>();
	
	void add(User user) {
		loginUserList.add(user);
	}
	
	void remove(User user) {
		loginUserList.remove(user);
	}
}
