package com.kosta.deal.config.jwt;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kosta.deal.config.auth.PrincipalDetails;
import com.kosta.deal.dto.LoginRequestDto;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter { //login시 실행됨
	
	private final AuthenticationManager authenticationManager;
	
	// 인증 요청시에 샐행되는 함수 => /login
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		System.out.println("JwtAuthenticationFilter : 진입");
		//request에 있는 username과 password를 파싱해서 자바 Object로 받기
		ObjectMapper om = new ObjectMapper();
		LoginRequestDto loginRequestDto = null;
		try {
			loginRequestDto = om.readValue(request.getInputStream(), LoginRequestDto.class);
		} catch(Exception e) {
			e.printStackTrace();
		}
		System.out.println("JwtAuthenticationFilter : "+loginRequestDto);
		UsernamePasswordAuthenticationToken authenticationToken =
				new UsernamePasswordAuthenticationToken(loginRequestDto.getEmail(), loginRequestDto.getPassword());
		System.out.println("JwtAuthenticationFilter : 토큰생성완료");
		System.out.println(authenticationToken);
		// authenticate함수가 호출되면 인증 프로바이더가 유저 디테일 서비스의
		// loadUserByUsername(토큰의 첫번째 파라미터) 를 호출하고
		// UserDetails를 리턴받아 토큰의 두번째 파라미터(credential)과
		// UserDetails(DB값)의 getPassword() 함수로 비교해서 동일하면
		// Authentication 객체를 만들어서 필터체인으로 리턴해준다.
		System.out.println("0");
		Authentication authentication = authenticationManager.authenticate(authenticationToken);
		System.out.println("1");
		PrincipalDetails principalDetails= (PrincipalDetails)authentication.getPrincipal();
		System.out.println("authentication:");
		System.out.println(authentication);
		return authentication;
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		System.out.println("2");
		PrincipalDetails principalDetails= (PrincipalDetails)authResult.getPrincipal();
		System.out.println("3");
		String jwtToken = null;
		if(principalDetails.getUser()==null) {
			jwtToken = JWT.create()
					.withSubject(principalDetails.getAdmin().getAdminid())
					.withExpiresAt(new Date(System.currentTimeMillis()+JwtProperties.EXPIRATION_TIME))
					.withClaim("id", principalDetails.getAdmin().getAdminid())
					.sign(Algorithm.HMAC512(JwtProperties.SECRET));
		} else {
			jwtToken = JWT.create()
					.withSubject(principalDetails.getUsername())
					.withExpiresAt(new Date(System.currentTimeMillis()+JwtProperties.EXPIRATION_TIME))
					.withClaim("id", principalDetails.getUser().getId())
					.withClaim("username", principalDetails.getUser().getUsername())
					.sign(Algorithm.HMAC512(JwtProperties.SECRET));
		}
		
//		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//		response.setStatus(HttpServletResponse.SC_OK);
		System.out.println("successfulAuthentication함수");
		System.out.println(jwtToken);
		response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX+jwtToken);
		response.setContentType("application/json; charset=utf-8");
	}
}
