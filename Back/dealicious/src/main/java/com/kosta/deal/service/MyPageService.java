package com.kosta.deal.service;

import java.util.List;


import com.kosta.deal.entity.Sale;

public interface MyPageService {
	List<Sale> saleListByEmail(String email) throws Exception;
}
