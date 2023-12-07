package com.kosta.deal.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;


import com.kosta.deal.entity.Sale;

public interface SaleService {
	
	List<Sale> saleList(String category) throws Exception;
	Sale saleDetail(Integer num) throws Exception;
	void saleModify(Sale sale,MultipartFile file) throws Exception;
	
	List<Sale> searchList(String type,String keyword) throws Exception;

}
