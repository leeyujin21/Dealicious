package com.kosta.deal.service;

import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.kosta.deal.entity.Sale;
import com.kosta.deal.entity.User;
import com.kosta.deal.util.PageInfo;

public interface SaleService {
	
	List<Sale> saleListByPage(PageInfo pageInfo) throws Exception;
	List<Sale> SaleListByCategory(String category) throws Exception;
	
	Integer saleWrite(Sale sale, List<MultipartFile> file) throws Exception;
	void plusViewCount(Integer num)throws Exception;
	
	
	Sale saleDetail(Integer num) throws Exception;
	Integer saleModify(Sale sale, List<MultipartFile> file) throws Exception;
	
	
	Map<String,Object> saleInfo(Integer num) throws Exception;
	Boolean isHeartSale(String email, Integer num) throws Exception;
	void readImage(Integer num, OutputStream out) throws Exception;
	Boolean selHeartSale(String email, Integer num)throws Exception;
	void saleDelete(Integer num) throws Exception;
	Boolean login(String email, String password)throws Exception;
	Map<String, Object> userInfo(Integer id) throws Exception;
	void changesalestatus(Integer num, String status) throws Exception;
}
