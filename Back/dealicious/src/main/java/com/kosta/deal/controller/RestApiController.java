package com.kosta.deal.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.deal.config.auth.PrincipalDetails;
import com.kosta.deal.entity.Admin;
import com.kosta.deal.entity.User;
import com.kosta.deal.repository.AdminRepository;
import com.kosta.deal.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class RestApiController {
	private final UserRepository userRepository;
	private final AdminRepository adminaccountRepository;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;

	@GetMapping("user")
	public ResponseEntity<User> user(Authentication authentication) {
		PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
		System.out.println(principalDetails.getUser().getId());
		System.out.println(principalDetails.getUser().getUsername());
		System.out.println(principalDetails.getUser().getPassword());
		System.out.println(principalDetails.getUser().getRoles());
		return new ResponseEntity<User>(principalDetails.getUser(), HttpStatus.OK);
	}

	@GetMapping("manager/reports")
	public String reports() {
		return "reports";
	}

	@GetMapping("admin/users")
	public List<User> users() {
		return userRepository.findAll();
	}

	@PostMapping("join")
	public String join(@RequestBody User user, Authentication authentication) {
		if (authentication == null) {
			System.out.println("어림도 없지");
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
			user.setRoles("ROLE_USER");
			user.setUsername(user.getName());
			userRepository.save(user);

		} else {
			PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
			System.out.println(principalDetails.getUser());
			System.out.println(principalDetails.getUser().getId());
			System.out.println(principalDetails.getUser().getUsername());
			System.out.println(principalDetails.getUser().getPassword());
			System.out.println(principalDetails.getUser().getRoles());
			User auser = User.builder().id(principalDetails.getUser().getId())
					.provider(principalDetails.getUser().getProvider())
					.providerId(principalDetails.getUser().getProviderId())
					.socialemail(principalDetails.getUser().getSocialemail())
					.createDate(principalDetails.getUser().getCreateDate())
					.roles(principalDetails.getUser().getRoles())
					.username(principalDetails.getUser().getUsername())
					.name(user.getName())
					.email(user.getEmail())
					.nickname(user.getNickname())
					.password(bCryptPasswordEncoder.encode(user.getPassword()))
					.tel(user.getTel())
					.type(user.getType())
					.typename(user.getTypename())
					.build();
			userRepository.save(auser);
		}
		return "회원가입완료";
	}
	
	
}
