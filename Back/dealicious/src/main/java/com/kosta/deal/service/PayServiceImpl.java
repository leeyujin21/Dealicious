package com.kosta.deal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.AdminAccount;
import com.kosta.deal.entity.Pay;
import com.kosta.deal.repository.AdminAccountRepository;
import com.kosta.deal.repository.AdminRepository;
import com.kosta.deal.repository.DslRepository;
import com.kosta.deal.repository.PayRepository;

@Service
public class PayServiceImpl implements PayService {
	
	@Autowired
	private DslRepository payDslRepository;
	
	@Autowired
	private PayRepository payRepository;
	
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private AdminAccountRepository adminAccountRepository;
	
	@Override
	public void insertPay(Pay pay) throws Exception {
		payRepository.save(pay);
		AdminAccount adminAccount = adminAccountRepository.findById("12345-12345").get();
		adminAccount.setBalance(adminAccount.getBalance()+pay.getPayAmount());
		adminAccountRepository.save(adminAccount);
	}
}
