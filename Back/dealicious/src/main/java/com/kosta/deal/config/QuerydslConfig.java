package com.kosta.deal.config;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.querydsl.jpa.impl.JPAQueryFactory;

@Configuration
public class QuerydslConfig {
	@Autowired
	EntityManager entityManager;//JPA에서 엔티티를 관리하고 영속성 컨텍스트를 제공하는 인터페이스
	
	@Bean
	public JPAQueryFactory jpaQueryFactory() {
		return new JPAQueryFactory(entityManager);//QueryDSL에서 사용되는 쿼리를 작성하고 실행하기 위한 팩토리 클래스. EntityManager를 주입받아 QueryDSL을 사용
	}
}
