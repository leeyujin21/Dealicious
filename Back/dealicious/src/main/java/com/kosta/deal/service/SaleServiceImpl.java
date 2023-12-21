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
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;


import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;
import com.kosta.deal.entity.FileVo;
import com.kosta.deal.entity.Sale;
import com.kosta.deal.entity.SaleLike;
import com.kosta.deal.repository.ChatRepository;
import com.kosta.deal.repository.DslRepository;
import com.kosta.deal.repository.FileVoRepository;
import com.kosta.deal.repository.SaleDslRepository;
import com.kosta.deal.repository.SaleLikeRepository;
import com.kosta.deal.repository.SaleRepository;
import com.kosta.deal.util.PageInfo;
import com.querydsl.core.Tuple;

@Service
public class SaleServiceImpl implements SaleService {

	@Autowired
	private SaleRepository saleRepository;

	@Autowired
	private SaleDslRepository saleDslRepository;
	@Autowired
	private FileVoRepository fileVoRepository;

	@Autowired
	private SaleLikeRepository salelikeRepository;
	@Autowired
	private DslRepository dslRepository;
	@Autowired
	private ChatRepository chatRepository;
	@Autowired
	private SimpMessageSendingOperations sendingOperations;

	// salelist 무한 스크롤 페이지 처리
	@Override
	public List<Sale> saleListByPage(PageInfo pageInfo) throws Exception {
		PageRequest pageRequest = PageRequest.of(pageInfo.getCurPage() - 1, 10, Sort.by(Sort.Direction.DESC, "num"));// PageRequest
																														// 페이징																								// API
		Page<Sale> pages = saleRepository.findAll(pageRequest);
		pageInfo.setAllPage(pages.getTotalPages());
		int startPage = (pageInfo.getCurPage() - 1) / 10 * 10 + 1;
		int endPage = Math.min(startPage + 10 - 1, pageInfo.getAllPage());
		pageInfo.setStartPage(startPage);
		pageInfo.setEndPage(endPage);
		List<Sale> saleList = new ArrayList<>();
		for (Sale sale : pages.getContent()) {
			saleList.add(sale);
		}
		return saleList;
	}

	@Override
	public List<Sale> categoryListByPage(String category, PageInfo pageInfo) throws Exception {
		PageRequest pageRequest=PageRequest.of(pageInfo.getCurPage()-1,10,
				Sort.by(Sort.Direction.DESC,"num"));
		Page<Sale>pages=null;
		if(category.equals("category")) {
			pages=saleRepository.findByCategoryContains(category, pageRequest);
		}
		
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

	

	@Override
	public Map<String, Object> saleInfo(Integer num) throws Exception {
		System.out.println(num);
		Tuple tuple = saleDslRepository.findUserEmailAndRolesBySaleNum(num);

		Sale sale = tuple.get(0, Sale.class);
		System.out.println("-----------------------------------");
		System.out.println(sale);
		String nickname = tuple.get(1, String.class);

		String typename = tuple.get(2, String.class);
		String profileimgurl = tuple.get(3, String.class);
		String email = tuple.get(4, String.class);
		Integer id = tuple.get(5, Integer.class);

		Map<String, Object> res = new HashMap<>();
		res.put("sale", sale);
		res.put("nickname", nickname);
		res.put("typename", typename);
		res.put("profileimgurl", profileimgurl);
		res.put("email", email);
		res.put("id", id);
		System.out.println(res);
		return res;

	}

	@Override
	public Integer saleWrite(Sale sale, List<MultipartFile> files) throws Exception {
		String dir = "c:/upload/";
		if (files != null && !files.isEmpty()) {
			String fileNums = "";
			for (MultipartFile file : files) {
				// file table에 insert
				FileVo fileVo = FileVo.builder().directory(dir).name(file.getOriginalFilename()).size(file.getSize())
						.contenttype(file.getContentType()).data(file.getBytes()).build();
				System.out.println(fileVo);
				fileVoRepository.save(fileVo);

				// upload 폴더에 upload
				File uploadFile = new File(dir + fileVo.getNum());
				file.transferTo(uploadFile);
				// file 번호 목록 만들기
				if (!fileNums.equals(""))
					fileNums += ",";
				fileNums += fileVo.getNum();
			}
			sale.setFileurl(fileNums);

		}
		Sale sale1 = sale;
		saleRepository.save(sale1);
		return sale1.getNum();
	}

	@Override
	public void plusViewCount(Integer num) throws Exception {
		Sale sale = saleRepository.findById(num).get();
		sale.setViewcnt(sale.getViewcnt() + 1);
		saleRepository.save(sale);

	}

	@Override
	public Boolean selHeartSale(String email, Integer num) throws Exception {
		Sale sale = saleRepository.findById(num).get();
		SaleLike salelike = saleDslRepository.findSalelike(email, num);
		if (salelike == null) {
			salelikeRepository.save(SaleLike.builder().userEmail(email).saleNum(num).build());
			sale.setZzimcnt(sale.getZzimcnt() + 1);
			saleRepository.save(sale);
			return true;
		} else {
			salelikeRepository.deleteById(salelike.getNum());
			sale.setZzimcnt(sale.getZzimcnt() - 1);
			saleRepository.save(sale);
			return false;
		}
	}

	@Override
	public void readImage(Integer num, OutputStream out) throws Exception {
		String dir = "c:/upload/";
		FileInputStream fis = new FileInputStream(dir + num);
		FileCopyUtils.copy(fis, out);
		fis.close();
	}

	@Override
	public Boolean isHeartSale(String email, Integer num) throws Exception {
		Long cnt = saleDslRepository.findIsSalelike(email, num);
		if (cnt < 1)
			return false;
		return true;
	}

	@Override
	public Sale saleDetail(String email,Integer num) {
		return saleDslRepository.findSaleBySaleNum(num);
	}

	@Override
	public Integer saleModify(Sale sale, List<MultipartFile> files) throws Exception {
		Sale sale1 = saleRepository.findByNum(sale.getNum());
		sale1.setContent(sale.getContent());
		sale1.setTitle(sale.getTitle());
		sale1.setCategory(sale.getCategory());
		sale1.setAmount(sale.getAmount());
		sale1.setPlace(sale.getPlace());
		sale1.setGgull(sale.getGgull());
		System.out.println("----------------------------------");
		System.out.println(files.size());

		if (files != null && files.size() != 0) {
			String dir = "c:/upload/";
			String fileNums = "";
			for (MultipartFile file : files) {
				// file table에 insert
				if (file.isEmpty()) {
					fileNums += (fileNums.equals("") ? "" : ",") + file.getOriginalFilename();
				} else {
					FileVo fileVo = FileVo.builder().directory(dir).name(file.getOriginalFilename())
							.size(file.getSize()).contenttype(file.getContentType()).data(file.getBytes()).build();
					fileVoRepository.save(fileVo);

					// upload 폴더에 upload
					File uploadFile = new File(dir + fileVo.getNum());
					file.transferTo(uploadFile);
					fileNums += (fileNums.equals("") ? "" : ",") + fileVo.getNum();
				}
			}
			sale1.setFileurl(fileNums);
		} else {
			sale1.setFileurl(null);
		}
		saleRepository.save(sale1);
		return sale1.getNum();
	}
	
	@Override
	public void changesalestatus(Integer num, String status) throws Exception {
		Sale sale = saleRepository.findByNum(num);

		sale.setStatus(status);
	    saleRepository.save(sale);
	}
	
	@Override
	public void saleDelete(Integer num) throws Exception {
		Sale sale = saleRepository.findByNum(num);
		saleRepository.delete(sale);
	}



	

	@Override
	public void payFinish(Integer num) throws Exception {
		Sale sale = saleRepository.findByNum(num);
		sale.setStatus("결제완료");
		saleRepository.save(sale);
	}
	
	//sale status 수령완료로 변경 후 수령완료 관련 채팅 등록 및 실시간 발송
	@Override
	public void changesalestatusToreceipt(Integer num, String email) throws Exception {
		Sale sale = saleRepository.findByNum(num);
		sale.setStatus("수령완료");
		saleRepository.save(sale);
		ChatRoom chatRoom = dslRepository.findChatRoomBySalenumAndCreator(num,email);
		Chat chat = new Chat();
    	chat.setType("completereceipt");
    	chat.setChannelId(chatRoom.getChannelId());
    	chat.setWriterId("admin");
    	chatRepository.save(chat);
    	sendingOperations.convertAndSend("/sub/chat/" + chatRoom.getChannelId(), chat);
	}

	@Override
	public Sale saleDetail(Integer num) throws Exception {
		return saleRepository.findByNum(num);
	}

	
	

	

	

}