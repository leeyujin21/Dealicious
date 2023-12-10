package com.kosta.deal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kosta.deal.entity.AdminAccount;

public interface AdminAccountRepository extends JpaRepository<AdminAccount, String>{
	Optional<AdminAccount> findByAdminid(String adminid);
}
