package com.kosta.deal.config.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.kosta.deal.config.auth.PrincipalDetails;
import com.kosta.deal.entity.Admin;
import com.kosta.deal.entity.User;
import com.kosta.deal.repository.AdminRepository;
import com.kosta.deal.repository.DslRepository;
import com.kosta.deal.repository.UserRepository;

//인가 : 로그인 처리가 되야만 하는 요청이 들어왔을때 실행된다.
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
	
	private UserRepository userRepository;
	
	private AdminRepository adminRepository;

	public JwtAuthorizationFilter(AuthenticationManager authenticationManager, UserRepository userRepository, AdminRepository adminRepository) {
		super(authenticationManager);
		this.userRepository = userRepository;
		this.adminRepository = adminRepository;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String header = request.getHeader(JwtProperties.HEADER_STRING);
		System.out.println("header Authrization:"+header);
		
		if(header==null || !header.startsWith(JwtProperties.TOKEN_PREFIX)) {
			chain.doFilter(request, response);
			return;
		}
		
		String token=request.getHeader(JwtProperties.HEADER_STRING).replace(JwtProperties.TOKEN_PREFIX,"");
		
		//토큰 검증
		String username = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET)).build().verify(token).getClaim("username").asString();
		System.out.println("존맛탱"+username);
		if(username!=null) {
			User user = userRepository.findByUsername(username);
			
			PrincipalDetails principalDetails = new PrincipalDetails(user);
			Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails, 
					null, principalDetails.getAuthorities());
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
		} else {
			String id = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET)).build().verify(token).getClaim("id").asString();
			System.out.println("111");
			System.out.println(id);
			Admin admin = adminRepository.findByAdminid(id).get();
			System.out.println("넘어옴?");
			PrincipalDetails principalDetails = new PrincipalDetails(admin);
			Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails, 
					null, principalDetails.getAuthorities());
			
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		
		chain.doFilter(request, response);
	}
}
