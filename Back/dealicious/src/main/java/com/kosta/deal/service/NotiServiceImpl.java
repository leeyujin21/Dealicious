package com.kosta.deal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.Hot;
import com.kosta.deal.repository.DslRepository;
import com.kosta.deal.repository.HotRepository;

@Service
public class NotiServiceImpl implements NotiService {
	
	@Autowired
	private DslRepository dslRepository;
	
	@Autowired
	private HotRepository hodRepository;
	
	@Override
	public List<Hot> getHotList() throws Exception {
		
		return dslRepository.findHotList();
	}

	@Override
	public void addKeyword(String keyword) throws Exception {
		Optional<Hot> ohot = hodRepository.findByContent(keyword);
		System.out.println("1");
		if(!ohot.isEmpty()) {
			System.out.println("2");
			Hot hot = ohot.get();
			System.out.println("3");
			hot.setSearchcnt(hot.getSearchcnt()+1);
			System.out.println("4");
			hodRepository.save(hot);
		} else {
			System.out.println("5");
			hodRepository.save(new Hot(keyword));
		}
		
	}

}
