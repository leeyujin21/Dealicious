package com.kosta.deal.service;

import java.util.List;

import com.kosta.deal.entity.Review;
import com.kosta.deal.entity.Sale;

public interface MyPageService {
	List<Sale> saleListByEmail(String email) throws Exception;
	List<Sale> saleListByZzimNum(String email) throws Exception;
	List<Review> reviewListByReceiver(String email);
}
