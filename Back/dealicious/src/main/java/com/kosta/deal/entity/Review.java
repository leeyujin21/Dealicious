package com.kosta.deal.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
@DynamicUpdate
public class Review {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer num;
	@Column
	private String giver;
	private String receiver;
	private String starcount;
	private Integer salenum;
	@CreationTimestamp
	private Timestamp reviewdate;
}
