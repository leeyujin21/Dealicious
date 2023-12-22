package com.kosta.deal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
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
public class UnivData {
	@Id
	private Integer id;
	@Column
	private String campusName;
	@Column
	private String totalCount;
	@Column
	private String schoolName;
	@Column
	private String schoolGubun;
	@Column
	private String schoolType;
	@Column
	private String estType;
	@Column
	private String region;
	@Column
	private String adres;
	@Column
	private String collegeinfourl;
	@Column
	private String link;
	@Column
	private String seq;
}
