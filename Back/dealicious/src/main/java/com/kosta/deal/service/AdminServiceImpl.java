package com.kosta.deal.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.kosta.deal.entity.AdminAccount;
import com.kosta.deal.entity.User;
import com.kosta.deal.repository.AdminAccountRepository;

public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminAccountRepository adminAccountRepository;

	@Override
	public AdminAccount login(String adminid, String password) throws Exception {
		Optional<AdminAccount> oadminaccount = adminAccountRepository.findByAdminid(adminid);
		if(oadminaccount.isEmpty()) throw new Exception("아이디 오류");
		AdminAccount adminaccount = oadminaccount.get();
		if(!adminaccount.getPassword().equals(password)) throw new Exception("비밀번호 오류");
		return adminaccount;
	}

}
