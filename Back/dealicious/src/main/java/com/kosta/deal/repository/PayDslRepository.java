package com.kosta.deal.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class PayDslRepository {
	
	@Autowired
	private JPAQueryFactory jpaQueryFactory;
}