package com.kosta.deal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kosta.deal.entity.ChatRoom;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer>{
	Optional<ChatRoom> findByChannelId(String channelId);
}
