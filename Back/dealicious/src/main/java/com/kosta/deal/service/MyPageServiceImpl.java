package com.kosta.deal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.Review;
import com.kosta.deal.entity.Sale;
import com.kosta.deal.repository.DslRepository;
import com.kosta.deal.repository.SaleRepository;

@Service
public class MyPageServiceImpl implements MyPageService {
	@Autowired
	private SaleRepository saleRepository;
	@Autowired
	private DslRepository dslRepository;

	@Override
	public List<Sale> saleListByEmail(String email) throws Exception {
		return saleRepository.findByEmail(email);
	}

	@Override
	public List<Sale> saleListByZzimNum(String email) throws Exception {
		List<Sale> zzimList = dslRepository.findZzimListByUserEmail(email);
		return zzimList;
	}

	@Override
	public List<Review> reviewListByReceiver(String email) {
		System.out.println("마이페이지 서비스: " + email);
		List<Review> reviewList = dslRepository.findReviewByReceiver(email);
		System.out.println("마이페이지 서비스: " + reviewList);
		return reviewList;
	}
}
