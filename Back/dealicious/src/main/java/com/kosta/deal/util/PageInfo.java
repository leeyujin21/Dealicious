package com.kosta.deal.util;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PageInfo {
	private Integer allPage;
	private Integer curPage;
	private Integer startPage;
	private Integer endPage;
	private Integer PageNumber;
	private Integer PageSize;
	private Integer nextPage;
	
	
	
	
	
	
}
