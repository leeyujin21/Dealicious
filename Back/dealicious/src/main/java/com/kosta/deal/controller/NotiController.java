package com.kosta.deal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.deal.config.auth.PrincipalDetails;
import com.kosta.deal.entity.Hot;
import com.kosta.deal.entity.Notification;
import com.kosta.deal.entity.User;
import com.kosta.deal.service.NotiService;

@RestController
public class NotiController {
	
	@Autowired
	private NotiService notiService;
	
	@GetMapping("/hotlist")
	public ResponseEntity<List<Hot>> hotlist() {
		List<Hot> hotlist;
		try {
			hotlist = notiService.getHotList();
			return new ResponseEntity<List<Hot>>(hotlist, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<Hot>>( HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/search/{keyword}")
	public ResponseEntity<String> search(@PathVariable String keyword) {
		try {
			System.out.println(keyword);
			notiService.addKeyword(keyword);
			return new ResponseEntity<String>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/noticnt")
	public ResponseEntity<Integer> noticnt(Authentication authentication) {
		try {
			PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
			User user = principalDetails.getUser();
			Integer cnt = notiService.findNotiCnt(user.getEmail());
			return new ResponseEntity<Integer>(cnt,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/notiactivity")
	public ResponseEntity<List<Notification>> notiactivity(Authentication authentication) {
		try {
			PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
			User user = principalDetails.getUser();
			List<Notification> notilist = notiService.findNotiActiList(user.getEmail());
			return new ResponseEntity<List<Notification>>(notilist,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<Notification>>(HttpStatus.BAD_REQUEST);
		}
	}
}
