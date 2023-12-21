package com.kosta.deal.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kosta.deal.config.auth.PrincipalDetails;
import com.kosta.deal.entity.User;
import com.kosta.deal.repository.UserRepository;
import com.kosta.deal.service.UserListService;
import com.kosta.deal.service.UserService;
import com.kosta.deal.validation.CustomAnnotaionCollection.CustomEmail;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
public class RestApiController {
	private final UserRepository userRepository;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	private final UserService userService;
	private final UserListService userListService;

	//로그인 후 user정보 불러와서 redux에 넣는용도
	@GetMapping("user")
	public ResponseEntity<User> user(Authentication authentication) {
		PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
		System.out.println(principalDetails.getUser().getId());
		System.out.println(principalDetails.getUser().getUsername());
		System.out.println(principalDetails.getUser().getPassword());
		System.out.println(principalDetails.getUser().getRoles());
		userListService.add(principalDetails.getUser());
		return new ResponseEntity<User>(principalDetails.getUser(), HttpStatus.OK);
	}

	@PutMapping("profilemodify")
	public ResponseEntity<User> updateUser(@ModelAttribute User updatedUser, MultipartFile file) throws Exception {
		User currentUser = userService.findUserByEmail(updatedUser.getEmail());
		currentUser.setNickname(updatedUser.getNickname());
		System.out.println("---------------");
		System.out.println(updatedUser.getAccountbank());
		currentUser.setAccountbank(updatedUser.getAccountbank());
		currentUser.setAccountid(updatedUser.getAccountid());
		userService.uploadProfileimg(currentUser, file);
		System.out.println(currentUser);
		userRepository.save(currentUser);

		return new ResponseEntity<>(currentUser, HttpStatus.OK);
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
					.createDate(principalDetails.getUser().getCreateDate()).roles(principalDetails.getUser().getRoles())
					.username(principalDetails.getUser().getUsername()).name(user.getName()).email(user.getEmail())
					.nickname(user.getNickname()).password(bCryptPasswordEncoder.encode(user.getPassword()))
					.tel(user.getTel()).type(user.getType()).typename(user.getTypename()).build();
			userRepository.save(auser);
		}
		return "회원가입완료";
	}

	// 비밀번호 변경 엔드포인트
	@PutMapping("changepassword")
	public ResponseEntity<String> changePassword(@RequestBody Map<String, Object> request,
			Authentication authentication) {
		if (authentication == null) {
			return new ResponseEntity<>("로그인이 필요합니다.", HttpStatus.UNAUTHORIZED);
		}
		PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
		User currentUser = principalDetails.getUser();
		String currentPassword = (String) request.get("currentPassword");
		System.out.println(currentPassword);
		String newPassword = (String) request.get("newPassword");
		System.out.println(newPassword);
		String confirmNewPassword = (String) request.get("confirmNewPassword");
		System.out.println(confirmNewPassword);

		if (!bCryptPasswordEncoder.matches(currentPassword, currentUser.getPassword())) {
			return new ResponseEntity<>("현재 비밀번호가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
		}

		if (!newPassword.equals(confirmNewPassword)) {
			return new ResponseEntity<>("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
		}

		currentUser.setPassword(bCryptPasswordEncoder.encode(newPassword));
		userRepository.save(currentUser);

		return new ResponseEntity<>("비밀번호가 성공적으로 변경되었습니다.", HttpStatus.OK);
	}

	@GetMapping("/nicknamecheck/{nickname}")
	public ResponseEntity<Boolean> nicknamecheck(@PathVariable String nickname) {
		try {
			Boolean res = userService.checkNickname(nickname);
			return new ResponseEntity<Boolean>(res, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Boolean>(false, HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/emails/verification-requests")
	public ResponseEntity sendMessage(@RequestBody Map<String, Object> param) throws Exception {
		String email = (String) param.get("email");
		System.out.println(email);
		userService.sendCodeToEmail(email);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping("/emails/verifications")
	public ResponseEntity verificationEmail(@RequestBody Map<String, Object> param) throws Exception {
		try {
			String email = (String) param.get("email");
			System.out.println(email);
			String authCode = (String) param.get("code");
			System.out.println(authCode);
			userService.verifiedCode(email, authCode);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/logout1")
	public ResponseEntity<String> logout(Authentication authentication) {
		try {
			PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
			userListService.remove(principalDetails.getUser());
			return new ResponseEntity<String>("로그아웃성공", HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
	}
}
