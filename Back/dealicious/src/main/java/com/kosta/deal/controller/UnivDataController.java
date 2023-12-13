package com.kosta.deal.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.kosta.deal.service.UnivDataService;

@Component
public class UnivDataController implements CommandLineRunner{
	
	@Autowired
	private UnivDataService univDataService;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("김형섭");
        try {
            univDataService.univDataList();
        } catch(Exception e) {
            e.printStackTrace();
        }
		System.out.println("MyControllerInitializer 실행됨");
	}
}
