package com.kosta.deal.service;

import com.kosta.deal.entity.AdminAccount;

public interface AdminService {
	AdminAccount login(String adminid, String password) throws Exception;
}
