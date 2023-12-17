package com.kosta.deal.service;

import java.util.List;


import com.kosta.deal.entity.Hot;

public interface NotiService {
	List<Hot> getHotList() throws Exception;
	void addKeyword(String keyword) throws Exception;
}
