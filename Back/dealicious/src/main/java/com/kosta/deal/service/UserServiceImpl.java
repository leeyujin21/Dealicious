package com.kosta.deal.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.User;
import com.kosta.deal.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User login(String email, String password) throws Exception {
		Optional<User> ouser = userRepository.findByEmail(email);
		if(ouser.isEmpty()) throw new Exception("아이디 오류");
		User user = ouser.get();
		if(!user.getPassword().equals(password)) throw new Exception("비밀번호 오류");
		return user;
	}

	@Override
	public boolean checkNickname(String nickname) throws Exception {
		boolean checknickname = userRepository.existsByNickname(nickname);
		if(checknickname) {
			return false;
		} return true;
	}

}
