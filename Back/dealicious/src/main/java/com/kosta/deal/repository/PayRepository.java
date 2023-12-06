package com.kosta.deal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kosta.deal.entity.Pay;

public interface PayRepository  extends JpaRepository<Pay, Integer> {

}
