package com.kosta.deal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kosta.deal.entity.Hot;

public interface HotRepository extends JpaRepository<Hot, Integer>{
	Optional<Hot> findByContent(String content);
}
