package com.kosta.deal.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.kosta.deal.entity.Admin;
import com.kosta.deal.entity.Chat;
import com.kosta.deal.entity.ChatRoom;
import com.kosta.deal.entity.Hot;
import com.kosta.deal.entity.QAdmin;
import com.kosta.deal.entity.QChat;
import com.kosta.deal.entity.QChatRoom;
import com.kosta.deal.entity.QCorpData;
import com.kosta.deal.entity.QHot;
import com.kosta.deal.entity.QPay;
import com.kosta.deal.entity.QSale;
import com.kosta.deal.entity.QUnivData;
import com.kosta.deal.entity.QUser;
import com.kosta.deal.entity.Sale;
import com.kosta.deal.entity.User;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class DslRepository {
	
	private final JPAQueryFactory jpaQueryFactory;
	
	public List<Tuple> findAllPayList() {
		QPay pay = QPay.pay;
		QSale sale = QSale.sale;
		return jpaQueryFactory.select(pay.paynum,sale.status,sale.title,sale.amount)
				.from(pay)
				.join(sale)
				.on(pay.salenum.eq(sale.num))
				.fetch();
	}
	
	public List<Tuple> findStatusPayList(String status) {
		QPay pay = QPay.pay;
		QSale sale = QSale.sale;
		return jpaQueryFactory.select(pay.paynum,sale.status,sale.title,sale.amount)
				.from(pay)
				.join(sale)
				.on(pay.salenum.eq(sale.num))
				.where(sale.status.eq(status))
				.fetch();
	}
	//내일 3개 조인하는거 하기
	public List<Tuple> findSettleList(Date sDate, Date eDate) {
		QPay pay = QPay.pay;
		QSale sale = QSale.sale;
		return jpaQueryFactory.select(pay.paynum,sale.status,sale.title,sale.amount)
				.from(pay)
				.join(sale)
				.on(pay.salenum.eq(sale.num))
				//.where(pay.paydate.loe(eDate).and(pay.paydate.goe(sDate)).and(sale.status.eq("정산완료")))
				.fetch();
	}
	
	public List<String> findUnivNameList(String typename) {
		QUnivData univData = QUnivData.univData;
		return jpaQueryFactory.select(univData.schoolName)
				.from(univData)
				.where(univData.schoolName.like("%" + typename + "%"))
				.fetch();
	}
	
	public Admin findAdminById(String adminid) {
		QAdmin admin = QAdmin.admin;
		return jpaQueryFactory.selectFrom(admin)
				.where(admin.adminid.eq(adminid))
				.fetchOne();
	}

	public List<String> findCorpNameList(String typename) {
		QCorpData corpData = QCorpData.corpData;
		return jpaQueryFactory.select(corpData.corp_name)
				.from(corpData)
				.where(corpData.corp_name.like("%" + typename + "%"))
				.fetch();
	}
	
	public List<Hot> findHotList() {
		QHot hot = QHot.hot;
		return jpaQueryFactory.selectFrom(hot)
				.orderBy(hot.searchcnt.desc())
                .limit(10)
                .fetch();
	}
	
	public ChatRoom findChatRoomByUserEmail(String email) {
		QChatRoom chatRoom = QChatRoom.chatRoom;
		return jpaQueryFactory.selectFrom(chatRoom)
				.where(chatRoom.creator.eq(email).or(chatRoom.partner.eq(email)))
				.fetchOne();
	}
	
	public ChatRoom findChatRoomBySaleNumAndEmail(Integer num, String email) {
		QChatRoom chatRoom = QChatRoom.chatRoom;
		return jpaQueryFactory.selectFrom(chatRoom)
				.where(chatRoom.saleNum.eq(num).and(chatRoom.creator.eq(email)))
				.fetchOne();

	}
	
	public List<Chat> findChatListByChannelId(String channelId) {
		QChat chat = QChat.chat1;
		return jpaQueryFactory.selectFrom(chat)
				.where(chat.channelId.eq(channelId))
				.fetch();
	}
//	public Tuple getChatListFormFromWriter(String channelId) {
//		QChatRoom chatRoom = QChatRoom.chatRoom;
//		QChat chat = QChat.chat1;
//		QSale sale = QSale.sale;
//		QUser user = QUser.user;
//
//		return jpaQueryFactory.select(user.profileimgurl,user.nickname,sale.category,chat.chatdate,chat.chat,sale.fileurl)
//				.from(chatRoom)
//				.join(chat)
//				.on(chatRoom.channelId.eq(chat.channelId))
//				.join(sale)
//				.on(chatRoom.saleNum.eq(sale.num))
//				.join(user)
//				.on(user.email.eq(sale.email))
//				.where(chatRoom.channelId.eq(channelId))
//				.orderBy(chat.chatdate.desc())
//				.fetchFirst();
//	}
//	public Tuple getChatListFormFromBuyer(String channelId) {
//		QChatRoom chatRoom = QChatRoom.chatRoom;
//		QChat chat = QChat.chat1;
//		QSale sale = QSale.sale;
//		QUser user = QUser.user;
//
//		return jpaQueryFactory.select(user.profileimgurl,user.nickname,sale.category,chat.chatdate,chat.chat,sale.fileurl)
//				.from(chatRoom)
//				.from(chat)
//				.from(sale)
//				.from(user)
//				.where(chatRoom.channelId.eq(chat.channelId).and(chatRoom.saleNum.eq(sale.num)).and(user.email.eq(chatRoom.creator)).and(chatRoom.channelId.eq(channelId)))
//				.orderBy(chat.chatdate.desc())
//				.fetchFirst();
//	}
	public Sale getSaleForChatlist(String channelId) {
		QChatRoom chatRoom = QChatRoom.chatRoom;
		QSale sale = QSale.sale;
		return jpaQueryFactory.select(sale)
				.from(chatRoom)
				.join(sale)
				.on(chatRoom.saleNum.eq(sale.num))
				.where(chatRoom.channelId.eq(channelId))
				.fetchOne();
	}
	public User getUserFromBuyer(String channelId) {
		QChatRoom chatRoom = QChatRoom.chatRoom;
		QUser user = QUser.user;
		return jpaQueryFactory.select(user)
				.from(chatRoom)
				.join(user)
				.on(chatRoom.partner.eq(user.email).and(chatRoom.channelId.eq(channelId)))
				.fetchOne();
	}
	
	public User getUserFromSeller(String channelId) {
		QChatRoom chatRoom = QChatRoom.chatRoom;
		QUser user = QUser.user;
		return jpaQueryFactory.select(user)
				.from(chatRoom)
				.join(user)
				.on(chatRoom.creator.eq(user.email).and(chatRoom.channelId.eq(channelId)))
				.fetchOne();
	}
	
	public Chat getChatForChatlist(String channelId) {
		QChat chat = QChat.chat1;
		return jpaQueryFactory.select(chat)
				.from(chat)
				.where(chat.channelId.eq(channelId))
				.orderBy(chat.chatdate.desc())
				.fetchFirst();
	}

	public List<String> getChannelIdList(String email) {
		QChatRoom chatRoom = QChatRoom.chatRoom;
		return jpaQueryFactory.select(chatRoom.channelId)
				.from(chatRoom)
				.where(chatRoom.creator.eq(email).or(chatRoom.partner.eq(email)))
				.fetch();
	}
	
	public ChatRoom findChatRoomBySalenumAndCreator(Integer saleNum, String email) {
		QChatRoom chatRoom = QChatRoom.chatRoom;
		return jpaQueryFactory.selectFrom(chatRoom)
				.where(chatRoom.creator.eq(email).and(chatRoom.saleNum.eq(saleNum)))
				.fetchOne();
	}
}