package com.kosta.deal.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Repository;

import com.kosta.deal.entity.QSale;
import com.kosta.deal.entity.Sale;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class SaleDslRepository {
	
	@Autowired
	private JPAQueryFactory jpaQueryFactory;
	
	//salelist 페이지 쿼리문
	public List<Sale> findSaleListByPaging(PageRequest pageRequest) throws Exception {
		
		return jpaQueryFactory.selectFrom(QSale.sale)
                .offset(pageRequest.getPageNumber() * pageRequest.getPageSize())
                .limit(pageRequest.getPageSize())
                .fetch();
	}
	
	//카테고리별 목록 쿼리문
	public List<Sale> findByCategory(String category) throws Exception {
		QSale sale= QSale.sale;
		
		return jpaQueryFactory.selectFrom(sale)
				.where(sale.category.eq(category)).fetch();
	}


	 public Long findSaleCount() throws Exception{
		 
	        return jpaQueryFactory
	                .select(QSale.sale.count())
	                .from(QSale.sale).fetchOne();
	                
	    }
	
}
