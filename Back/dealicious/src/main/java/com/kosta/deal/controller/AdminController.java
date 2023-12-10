package com.kosta.deal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.deal.entity.Admin;
import com.kosta.deal.repository.AdminRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AdminController {
	
	@Autowired
	private final AdminRepository adminaccountRepository;

	@PostMapping("adminjoin")
	public String join(@RequestBody Admin adminuser) {
		Admin aadminuser = Admin.builder()
				.adminid(adminuser.getAdminid())
				.admincode(adminuser.getAdmincode())
				.password(adminuser.getPassword()).build();
		adminaccountRepository.save(aadminuser);
		return "회원가입완료";
	}
}
