package com.kosta.deal.entity;

import java.io.File;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;
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
public class Sale {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer num;
	@Column
	private String email;
	private String title;
	private String type;
	private String amount;
	private String category;
	private String content;
	private String place;
	private String price;
	private String fileurl;
	private String status;
	private String buyeremail;
	private String ggull;
	private File image;
	@ColumnDefault("0")
	private Integer viewcnt;
	@ColumnDefault("0")
	private Integer zzimcnt;
	
	@CreationTimestamp
	private Timestamp writedate;

	
	
	
	
}