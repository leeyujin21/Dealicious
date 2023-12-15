package com.kosta.deal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import com.kosta.deal.service.CorpDataService;

public class CorpDataController implements CommandLineRunner {
	
	@Autowired
	private CorpDataService corpDataService;
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("김형섭 회사");
		try {
//			corpDataService.corpDataList(null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("MyControllerInitializer 2번 실행됨");
	}

}
