package com.kosta.deal.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kosta.deal.service.CorpDataService;
import com.kosta.deal.service.UnivDataService;

@RestController
@RequestMapping("/corp")
public class CorpDataRestController {
	@Autowired
	private CorpDataService corpDataService;

	@PostMapping("/getCorpName")
	public ResponseEntity<List<String>> getCorpName(@RequestBody Map<String, String> param) {
		String typename = param.get("typename");
		try {
			List<String> corpName = corpDataService.processUserInput(typename);
			System.out.println(corpName);
			return ResponseEntity.ok(corpName);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
}
