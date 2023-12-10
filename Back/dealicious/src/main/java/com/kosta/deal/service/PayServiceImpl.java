package com.kosta.deal.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.AdminAccount;
import com.kosta.deal.entity.Pay;
import com.kosta.deal.repository.AdminAccountRepository;
import com.kosta.deal.repository.PayDslRepository;
import com.kosta.deal.repository.PayRepository;

@Service
public class PayServiceImpl implements PayService {
	
	@Autowired
	private PayDslRepository payDslRepository;
	
	@Autowired
	private PayRepository payRepository;
	
	@Autowired
	private AdminAccountRepository adminAccountRepository;
	
	@Override
	public void insertPay(Pay pay) throws Exception {
		
//		Optional<AdminAccount> adminAccount = adminAccountRepository.findById("dealadmin1");
//		//어드민 계좌 만드는 과정
//		//어드민 계좌 등록 페이지도 따로 만들어서 미리 추가하는 기능 넣어야함
//		if(adminAccount.isEmpty()) {
//			AdminAccount adminAccount1 = new AdminAccount("dealadmin1","1234512345",0,"dealicious");
//			adminAccountRepository.save(adminAccount1);
//		}
//		payRepository.save(pay);
//		AdminAccount adminAccount2 = adminAccountRepository.findById("dealadmin1").get();
//		adminAccount2.setBalance(adminAccount2.getBalance()+pay.getAmount());
//		adminAccountRepository.save(adminAccount2);
	}
}
