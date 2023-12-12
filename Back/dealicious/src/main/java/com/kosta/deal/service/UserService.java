package com.kosta.deal.service;

import com.kosta.deal.entity.User;

public interface UserService {
	User login(String email, String password) throws Exception;
	boolean checkNickname(String nickname) throws Exception;
}
