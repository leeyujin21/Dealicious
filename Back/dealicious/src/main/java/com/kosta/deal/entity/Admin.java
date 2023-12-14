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
public class Admin {
	@Id
	private String adminid;
	
	@Column
	private String admincode;

	@Column
	private String password;
	
	@Column
	private String accountid;
	
	@Column
	private String bank;
	
	@Column
	private Integer balance;
	
	@Column
	private String roles;
}
