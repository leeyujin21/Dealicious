package com.kosta.deal.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.PageRequest;

import org.springframework.stereotype.Repository;

import com.kosta.deal.entity.QSale;
import com.kosta.deal.entity.QSaleLike;
import com.kosta.deal.entity.QUser;
import com.kosta.deal.entity.Sale;
import com.kosta.deal.entity.SaleLike;
import com.kosta.deal.entity.User;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class SaleDslRepository {
	
	private final JPAQueryFactory jpaQueryFactory;
	
	//salelist 페이지 쿼리문
	public List<Sale> findSaleListByPaging(PageRequest pageRequest) throws Exception {
		QSale sale= QSale.sale;
		return jpaQueryFactory.selectFrom(sale)
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

	public Sale findSaleBySaleNum(Integer num) throws Exception{
		QSale sale=QSale.sale;
		return jpaQueryFactory.selectFrom(sale)
				.where(sale.num.eq(num)).fetchOne();
	}

	 public Long findSaleCount() throws Exception{
		 
	        return jpaQueryFactory
	                .select(QSale.sale.count())
	                .from(QSale.sale).fetchOne();
	                
	    }

	

	public Tuple findUserBySaleNum(Integer num)throws Exception {
		QSale sale= QSale.sale;
		QUser user= QUser.user;
		return jpaQueryFactory.select(sale,user.nickname,user.typename,user.profileimgurl,user.email)
				.from(user)
				.join(sale)
				.on(sale.email.eq(user.email))
				.where(sale.num.eq(num))
				.fetchOne();
	}
	public Tuple findUserByUserId(Integer id) throws Exception {
		QSale sale= QSale.sale;
		QUser user= QUser.user;
		return jpaQueryFactory.select(sale,user.id)
				.from(user)
				.join(sale)
				.on(sale.email.eq(sale.email))
				.where(user.id.eq(id))
				.fetchOne();
	}

	public Long findIsSalelike(String email, Integer num) throws Exception{
		QSaleLike salelike= QSaleLike.saleLike;
		
		return jpaQueryFactory.select(salelike.count())
				.from(salelike)
				.where(salelike.userEmail.eq(email).and(salelike.num.eq(num)))
				.fetchOne();
	}


	public SaleLike findSalelike(String email, Integer num) throws Exception{
		QSaleLike salelike= QSaleLike.saleLike;
		return jpaQueryFactory.select(salelike)
				.from(salelike)
				.where(salelike.userEmail.eq(email).and(salelike.saleNum.eq(num)))
				.fetchOne();
	}
	//글 번호로 이메일 가져오기
	public Sale findByemail(Integer num) throws Exception{
		QSale sale=QSale.sale;
		return jpaQueryFactory.selectFrom(sale)
				.where(sale.num.eq(num)).fetchOne();
				
			
	}

	

	public User findUserByUserEmailAndPassword(String email, String password) {
		QUser user=QUser.user;
		return jpaQueryFactory.selectFrom(user)
				.where(user.email.eq(email).and(user.password.eq(password))).fetchOne();
	}

	


	

	

	

	

	

}
