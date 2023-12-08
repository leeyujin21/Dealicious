package com.kosta.deal.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;


import com.kosta.deal.entity.Sale;

public interface SaleService {
	
	List<Sale> saleList(String category) throws Exception;
	Sale saleDetail(Integer num) throws Exception;
	Integer saleWrite(Sale sale, List<MultipartFile> file) throws Exception;
	
	
	
	void plusViewCount(Integer num);

	Boolean isSelectedSaleLike(String string, Integer num);
	Boolean selHeartSale(String string, Integer num);

	Integer saleModify(Sale sale, List<MultipartFile> file);

	

}
