package com.kosta.deal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kosta.deal.entity.Sale;
import com.kosta.deal.repository.SaleRepository;

@Service
public class SaleServiceImpl implements SaleService{
	
	@Autowired
	private SaleRepository saleRepository;

	@Override
	public List<Sale> saleList(String category) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Sale saleDetail(Integer num) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer saleWrite(Sale sale, List<MultipartFile> file) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void plusViewCount(Integer num) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Boolean isSelectedSaleLike(String string, Integer num) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean selHeartSale(String string, Integer num) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer saleModify(Sale sale, List<MultipartFile> file) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

	


	

}
