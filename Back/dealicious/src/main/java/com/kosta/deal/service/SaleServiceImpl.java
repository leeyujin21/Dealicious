package com.kosta.deal.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.kosta.deal.entity.FileVo;
import com.kosta.deal.entity.Sale;
import com.kosta.deal.repository.FileVoRepository;
import com.kosta.deal.repository.SaleDslRepository;
import com.kosta.deal.repository.SaleRepository;
import com.kosta.deal.util.PageInfo;
import com.querydsl.core.Tuple;

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
		PageRequest pageRequest=PageRequest.of(pageInfo.getCurPage()-1,10,Sort.by(Sort.Direction.DESC,"num"));//PageRequest 페이징 처리 위한 API
		Page<Sale> pages=saleRepository.findAll(pageRequest);
		pageInfo.setAllPage(pages.getTotalPages());
		int startPage=(pageInfo.getCurPage()-1)/10*10+1;
		int endPage=Math.min(startPage+10-1, pageInfo.getAllPage());
		pageInfo.setStartPage(startPage);
		pageInfo.setEndPage(endPage);
		List<Sale> saleList = new ArrayList<>();
		for(Sale sale : pages.getContent()) {
			saleList.add(sale);
		}
		return saleList;
	}
	
	//salelist 별 카테고리  
	@Override
	public List<Sale> SaleListByCategory(String category) throws Exception {
		return saleDslRepository.findByCategory(category);
	}

	
	@Override
	public Map<String,Object> saleDetail2(Integer num) throws Exception {
		System.out.println(num);
		Tuple tuple=saleDslRepository.findUserEmailAndRolesBySaleNum(num);
		Sale sale = tuple.get(0,Sale.class);
		String nickname=tuple.get(1,String.class);
		String typename=tuple.get(2,String.class);
		String profileimgurl=tuple.get(3,String.class);
		System.out.println(profileimgurl);
		Map<String,Object> res=new HashMap<>();
		res.put("sale",sale);
		res.put("nickname", nickname);
		res.put("typename", typename);
		res.put("profileimgurl",profileimgurl);
		return res;
	}
	@Override
	public Integer saleWrite(Sale sale, List<MultipartFile> files) throws Exception {
		String dir="c:/pch/upload/";
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
				System.out.println(fileVo);
			fileVoRepository.save(fileVo);
			
			
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
		
		Sale sale1= sale;
		saleRepository.save(sale1);
		return sale1.getNum();
	}

	@Override
	public void plusViewCount(Integer num) {
		Sale sale= saleRepository.findById(num).get();
		sale.setViewcnt(sale.getViewcnt()+1);
		saleRepository.save(sale);
		
	}

	
	@Override
	public Boolean selHeartSale(String string, Integer num) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public void readImage(Integer num, OutputStream out) throws Exception {
		String dir="c:/upload/";
		FileInputStream fis= new FileInputStream(dir+num);
		FileCopyUtils.copy(fis, out);
		fis.close();
	}

	@Override
	public Boolean isHeartSale(String string, Integer num) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Sale saleDetail(Integer num) throws Exception {
		
		return saleDslRepository.findSaleBySaleNum(num);
	}
	@Override
	public Integer saleModify(Sale sale,List<MultipartFile> files) throws Exception {
		Sale sale1=saleRepository.findById(sale.getNum()).get();
		sale1.setContent(sale.getContent());
		sale1.setTitle(sale.getTitle());

		if(files!=null && files.size()!=0) {
			String dir="c:/upload/";
			String fileNums="";
			for(MultipartFile file:files) {
			//file table에 insert
				if(file.isEmpty()) {
					fileNums+=(fileNums.equals("")? "":",")+file.getOriginalFilename();
				}else {
				FileVo fileVo =FileVo.builder()
					.directory(dir)
					.name(file.getOriginalFilename())
					.size(file.getSize())
					.contenttype(file.getContentType())
					.data(file.getBytes()).build();	
				fileVoRepository.save(fileVo);
			
			
				//upload 폴더에 upload
				File uploadFile=new File(dir+fileVo.getNum());
				file.transferTo(uploadFile);
				fileNums+=(fileNums.equals("")? "":",")+fileVo.getNum();
				}
			}
			sale1.setFileurl(fileNums);
		}else {
			sale1.setFileurl(null);
		}
			saleRepository.save(sale1);
			return sale1.getNum();
		}
	

	@Override
	public Boolean selectSaleLike(String id, Integer num) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Sale saleInfo(Integer num) throws Exception {
		return saleDslRepository.findSaleBySaleNum(num);
	}

	

	


	

	
	
	

	


	

}