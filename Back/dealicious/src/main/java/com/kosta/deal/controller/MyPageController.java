package com.kosta.deal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.deal.entity.Sale;
import com.kosta.deal.service.MyPageService;

@RestController
public class MyPageController {
	@Autowired
	private MyPageService mypageService;

	@GetMapping("/mypagelist/{email}")
    public ResponseEntity<List<Sale>> mypageList(@PathVariable String email) {
        System.out.println("MyPageController" + email);
        try {
            List<Sale> mySaleList = mypageService.saleListByEmail(email);
            return ResponseEntity.ok(mySaleList);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}