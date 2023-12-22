package com.kosta.deal.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.deal.service.UnivDataService;

@RestController
@RequestMapping("/univ")
public class UnivDataRestController {

	@Autowired
	private UnivDataService univDataService;

	@PostMapping("/getSchoolName")
	public ResponseEntity<List<String>> getSchoolName(@RequestBody Map<String, String> param) {
		String typename = param.get("typename");
		try {
			List<String> schoolName = univDataService.processUserInput(typename);
			return ResponseEntity.ok(schoolName);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
}
