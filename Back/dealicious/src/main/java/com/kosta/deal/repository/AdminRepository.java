package com.kosta.deal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kosta.deal.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String>{
    Optional<Admin> findByAdminid(String adminid);
    Optional<Admin> findByAdminidAndPassword(String adminid, String password);
}
