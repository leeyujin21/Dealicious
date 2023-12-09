package com.kosta.deal.service;

import java.io.File;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.kosta.deal.entity.Sale;
import com.kosta.deal.repository.FileVoRepository;
import com.kosta.deal.repository.SaleDslRepository;
import com.kosta.deal.repository.SaleRepository;
import com.kosta.deal.util.PageInfo;

@Service
public class SaleServiceImpl implements SaleService{
	
	@Autowired
	private SaleRepository saleRepository;
	
	@Autowired
	private SaleDslRepository saleDslRepository;
	@Autowired
	private FileVoRepository fileVoRepository;
	
	//salelist 무한 스크롤 페이지 처리
	@Override
	public List<Sale> saleListByPage(PageInfo pageInfo) throws Exception {
	    int pageSize = 10; // 페이지당 아이템 수
	    int requestedPage = pageInfo.getCurPage();

	    PageRequest pageRequest = PageRequest.of(requestedPage - 1, pageSize);
	    List<Sale> saleList = saleDslRepository.findSaleListByPaging(pageRequest);

	    // 현재 페이지에서의 전체 아이템 수 계산
	    Long itemCount = saleDslRepository.findSaleCount();
	    
	    // 클라이언트에 전달할 총 페이지 수 계산
	    int totalPages = (int) Math.ceil(itemCount.doubleValue() / pageSize);

	    // 클라이언트에 전달할 다음 페이지의 번호 계산
	    int nextPage = requestedPage + 1;

	    pageInfo.setAllPage(totalPages);

	    // 클라이언트에 전달할 다음 페이지 번호 설정
	    pageInfo.setNextPage(nextPage);

	    return saleList;
	}
	
	//salelist 별 카테고리  
	@Override
	public List<Sale> SaleListByCategory(String category) throws Exception {
		return saleDslRepository.findByCategory(category);
	}


	@Override
	public Sale saleDetail(Integer num) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer saleWrite(Sale sale, List<MultipartFile> files) throws Exception {
		String dir="d:/pch/upload/";
		if(files!=null && !files.isEmpty()) {
			String fileNums="";
			for(MultipartFile file:files) {
			//file table에 insert
				FileVo fileVo =FileVo.builder()
					.directory(dir)
					.name(file.getOriginalFilename())
					.size(file.getSize())
					.contenttype(file.getContentType())
					.data(file.getBytes()).build();
			FileVoRepository.save(fileVo);
			
			
			//upload 폴더에 upload
			File uploadFile=new File(dir+fileVo.getNum());
			file.transferTo(uploadFile);
			//file 번호 목록 만들기
			if(!fileNums.equals(""))
				fileNums+=",";
			fileNums+= fileVo.getNum();
			
			}
			sale.setFileurl(fileNums);
		}
		
		Sale sale1= sale1;
		saleRepository.save(sale1);
		return sale1.getNum();
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
