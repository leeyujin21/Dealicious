package com.kosta.deal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kosta.deal.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUsername(String username);
	Optional<User> findByProviderAndProviderId(String provider, String providerId);	
	Optional<User> findByEmail(String email);
}
