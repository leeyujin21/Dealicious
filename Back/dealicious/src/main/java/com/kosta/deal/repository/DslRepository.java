package com.kosta.deal.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.kosta.deal.entity.QPay;
import com.kosta.deal.entity.QSale;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class DslRepository {
	
	private final JPAQueryFactory jpaQueryFactory;
	
	public List<Tuple> findAllPayList() {
		QPay pay = QPay.pay;
		QSale sale = QSale.sale;
		return jpaQueryFactory.select(pay.paynum,sale.status,sale.title,sale.amount)
				.from(pay)
				.join(sale)
				.on(pay.salenum.eq(sale.num))
				.fetch();
	}
	
	public List<Tuple> findStatusPayList(String status) {
		QPay pay = QPay.pay;
		QSale sale = QSale.sale;
		return jpaQueryFactory.select(pay.paynum,sale.status,sale.title,sale.amount)
				.from(pay)
				.join(sale)
				.on(pay.salenum.eq(sale.num))
				.where(sale.status.eq(status))
				.fetch();
	}
	//내일 3개 조인하는거 하기
	public List<Tuple> findSettleList(Date sDate, Date eDate) {
		QPay pay = QPay.pay;
		QSale sale = QSale.sale;
		return jpaQueryFactory.select(pay.paynum,sale.status,sale.title,sale.amount)
				.from(pay)
				.join(sale)
				.on(pay.salenum.eq(sale.num))
				.where(pay.paydate.loe(eDate).and(pay.paydate.goe(sDate)).and(sale.status.eq("정산완료")))
				.fetch();
	}
}