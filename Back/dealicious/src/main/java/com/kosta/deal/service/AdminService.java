package com.kosta.deal.service;

import com.kosta.deal.entity.Admin;

public interface AdminService {
	Admin login(String adminid, String password) throws Exception;
}
