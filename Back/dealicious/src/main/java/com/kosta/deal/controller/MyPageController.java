package com.kosta.deal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kosta.deal.entity.Sale;
import com.kosta.deal.service.MyPageService;

public class MyPageController {
	@Autowired
	private MyPageService mypageService;
	
//	@GetMapping("/mypagelist")
//	public ResponseEntity<List<Sale>> mypageList(@RequestParam("email") String email){
//		try {
//			List<Sale> mySaleList = mypageService.saleListByEmail(email);
//			return ResponseEntity<List<Sale>>(mySaleList,HttpStatus.OK);
//		} catch (Exception e) {
//			e.printStackTrace();
//			return null;
//		}
//		System.out.println("MyPageController"+email);
//	}
}
