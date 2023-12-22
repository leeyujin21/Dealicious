package com.kosta.deal.config.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.Admin;
import com.kosta.deal.entity.User;
import com.kosta.deal.repository.AdminRepository;
import com.kosta.deal.repository.UserRepository;

// security 설정에서 loginProcessingUrl("/loginProc");
// /loginProc 요청이 오면 자동으로 UserDetailsService 타입으로 IoC되어 있는 loadUserByUsername 함수가 실행된다.
// (AuthenticationManager를 거쳐 AuthenticationProvider에 의해 호출됨)
@Service
public class PrincipalDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AdminRepository adminRepository;

	// Security Session(내부 Authentication(내부 UserDetails))
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		if (email.contains("@")) {
			User userEntity = userRepository.findByEmail(email).get();
			if (userEntity != null) {
				return new PrincipalDetails(userEntity);
			}
		} else {
			Admin admin = adminRepository.findByAdminid(email).get();
			if (admin != null) {
				return new PrincipalDetails(admin);
			}
		}
		return null;
	}

}
