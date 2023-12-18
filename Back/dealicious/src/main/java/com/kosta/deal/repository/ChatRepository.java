package com.kosta.deal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kosta.deal.entity.Chat;

public interface ChatRepository extends JpaRepository<Chat, Integer>{

}
