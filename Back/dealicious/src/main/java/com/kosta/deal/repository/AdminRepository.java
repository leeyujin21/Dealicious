package com.kosta.deal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kosta.deal.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String>{
	Optional<Admin> findByAdminid(String adminid);
}
