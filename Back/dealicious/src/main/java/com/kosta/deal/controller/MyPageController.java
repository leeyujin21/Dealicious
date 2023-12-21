package com.kosta.deal.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.deal.entity.Review;
import com.kosta.deal.entity.Sale;
import com.kosta.deal.service.MyPageService;

@RestController
public class MyPageController {
	@Autowired
	private MyPageService mypageService;

	@GetMapping("/mypagelist/{email}")
    public ResponseEntity<List<Sale>> mypageList(@PathVariable String email) {
        System.out.println("MyPageController: " + email);
        try {
            List<Sale> mySaleList = mypageService.saleListByEmail(email);
            return ResponseEntity.ok(mySaleList);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
	@GetMapping("/myzzimlist/{email}")
	public ResponseEntity<List<Sale>> myzzimList(@PathVariable String email) {
		try {
			List<Sale> myZzimList = mypageService.saleListByZzimNum(email);
			return ResponseEntity.ok(myZzimList);
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	@GetMapping("/myreviewlist/{email}")
	public ResponseEntity<List<Map<String, Object>>> myReviewList(@PathVariable String email) {
		System.out.println("마이페이지 컨트롤러에 이메일이 오나? " + email);
		try {
			List<Map<String, Object>> myReviewList = mypageService.reviewListByReceiver(email);
			System.out.println(myReviewList.get(0));
			return ResponseEntity.ok(myReviewList);
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}