package com.kosta.deal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.AdminAccount;
import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;
import com.kosta.deal.entity.Pay;
import com.kosta.deal.repository.AdminAccountRepository;
import com.kosta.deal.repository.ChatRepository;
import com.kosta.deal.repository.DslRepository;
import com.kosta.deal.repository.PayRepository;

@Service
public class PayServiceImpl implements PayService {
	
	@Autowired
	private DslRepository dslRepository;
	@Autowired
	private PayRepository payRepository;
	@Autowired
	private AdminAccountRepository adminAccountRepository;
	@Autowired
	private ChatRepository chatRepository;
	@Autowired
	private SimpMessageSendingOperations sendingOperations;
	
	@Override
	public void insertPay(Pay pay) throws Exception {
		payRepository.save(pay);
		AdminAccount adminAccount = adminAccountRepository.findById("12345-12345").get();
		adminAccount.setBalance(adminAccount.getBalance()+pay.getPayAmount());
		adminAccountRepository.save(adminAccount);
		ChatRoom chatRoom = dslRepository.findChatRoomBySalenumAndCreator(pay.getSalenum(),pay.getBuyerEmail());
		Chat chat = new Chat();
    	chat.setType("completepay");
    	chat.setChannelId(chatRoom.getChannelId());
    	chat.setWriterId("admin");
    	chatRepository.save(chat);
    	sendingOperations.convertAndSend("/sub/chat/" + chatRoom.getChannelId(), chat);
	}
}
