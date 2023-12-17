package com.kosta.deal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Hot {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer num;
	@Column
	private String content;
	@Column
	private Integer searchcnt;
	
	public Hot (String content) {
		this.content=content;
		this.searchcnt=1;
	}

}
