package com.kosta.deal.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
public class Pay {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer paynum;
	@Column
	private String imp_uid;
	@Column
	private Integer salenum;
	@Column 
	private Integer payAmount;
	@Column 
	private String buyerEmail;
	@Column
	@CreationTimestamp
	private Date paydate;
}
