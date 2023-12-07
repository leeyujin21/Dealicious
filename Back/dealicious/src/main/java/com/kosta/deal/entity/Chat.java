package com.kosta.deal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Chat {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	 
	 @Column
	 private Integer channelId;
	 private String writerId;
	 private String chat;
	 private String data;
}
