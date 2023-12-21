package com.kosta.deal.service;

import java.util.List;
import java.util.Map;

import com.kosta.deal.entity.Sale;

public interface MyPageService {
	List<Sale> saleListByEmail(String email) throws Exception;
	List<Sale> saleListByZzimNum(String email) throws Exception;
	List<Map<String, Object>> reviewListByReceiver(String email);
}
