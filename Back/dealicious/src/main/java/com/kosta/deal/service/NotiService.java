package com.kosta.deal.service;

import java.util.List;

import com.kosta.deal.entity.Hot;
import com.kosta.deal.entity.Notification;

public interface NotiService {
	List<Hot> getHotList() throws Exception;
	void addKeyword(String keyword) throws Exception;
	Integer findNotiCnt(String email) throws Exception;
	List<Notification> findNotiActiList(String email) throws Exception;
}
