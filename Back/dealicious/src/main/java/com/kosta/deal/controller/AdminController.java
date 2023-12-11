package com.kosta.deal.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.deal.entity.Admin;
import com.kosta.deal.repository.AdminRepository;

import lombok.RequiredArgsConstructor;

@RestController
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;

	@PostMapping("adminjoin")
	public String join(@RequestBody Admin adminuser) {
		Admin aadminuser = Admin.builder()
				.adminid(adminuser.getAdminid())
				.admincode(adminuser.getAdmincode())
				.password(adminuser.getPassword()).build();
		adminRepository.save(aadminuser);
		return "회원가입완료";
	}
	
	@PostMapping("adminlogin")
	public String login(@RequestBody Map<String, String> param) {
	    String adminid = param.get("adminid");
	    String password = param.get("password");

	    Optional<Admin> oadminUser = adminRepository.findByAdminidAndPassword(adminid, password);

	    if (oadminUser != null) {
	        return "로그인 성공";
	    } else {
	        return "로그인 실패";
	    }
	}
}
