package com.kosta.deal.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.kosta.deal.entity.Admin;
import com.kosta.deal.entity.User;
import com.kosta.deal.repository.AdminRepository;

public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminRepository adminAccountRepository;

	@Override
	public Admin login(String adminid, String password) throws Exception {
		Optional<Admin> oadminaccount = adminAccountRepository.findByAdminid(adminid);
		if(oadminaccount.isEmpty()) throw new Exception("아이디 오류");
		Admin adminaccount = oadminaccount.get();
		if(!adminaccount.getPassword().equals(password)) throw new Exception("비밀번호 오류");
		return adminaccount;
	}

}
