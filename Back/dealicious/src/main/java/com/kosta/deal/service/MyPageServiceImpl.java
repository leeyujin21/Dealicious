package com.kosta.deal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.kosta.deal.entity.Sale;
import com.kosta.deal.repository.SaleRepository;

public class MyPageServiceImpl implements MyPageService {
	@Autowired
	private SaleRepository saleRepository;
	
	@Override
	public List<Sale> saleListByEmail(String email) throws Exception {
		return saleRepository.findByEmail(email);
	}

}
