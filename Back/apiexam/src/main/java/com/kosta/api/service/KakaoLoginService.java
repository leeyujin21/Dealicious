package com.kosta.api.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.api.dao.UserDao;
import com.kosta.api.dto.UserInfo;

@Service
public class KakaoLoginService {
	
	@Autowired
	private UserDao userDao;
	
	public UserInfo kakaoLogin(String code) throws Exception {
		String token = getAccessToken(code);
		UserInfo kakaoInfo = getUserInfo(token);
		
		UserInfo userInfo = userDao.selectUser(kakaoInfo.getId());
		if(userInfo == null) {
			userDao.insertUserByNaver(kakaoInfo); // 회원가입
	    	userInfo = kakaoInfo;
		}
		return userInfo;
	}
	
	public String getAccessToken(String code) throws Exception {
		StringBuilder urlBuilder = new StringBuilder("https://kauth.kakao.com/oauth/token");
		URL url = new URL(urlBuilder.toString());
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		conn.setRequestMethod("POST");
		conn.setRequestProperty("context-type", "application/x-www-form-urlencoded");
		conn.setDoOutput(true);
		
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
		StringBuilder param = new StringBuilder();
		
		param.append("grant_type=authorization_code");
//		conn.setRequestProperty("client_secret", "");
		param.append("&client_id=7767ebd6120b8699fa3e4e5970475483");
		param.append("&redirect_url=http://localhost:8090/api/kakaologin");
		param.append("&code="+code);

		bw.write(param.toString());
		bw.flush();
		
		BufferedReader br;
		int resultCode = conn.getResponseCode();
		
		if(resultCode >= 200 && resultCode <= 300) {
			br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		} else {
			br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		}
		
		StringBuilder resBuilder = new StringBuilder();
		String line;
		while((line = br.readLine()) != null) {
			resBuilder.append(line);
		}
		br.close();
		conn.disconnect();
		System.out.println(resBuilder.toString());
		
		JSONParser parser = new JSONParser();
		JSONObject tokenObj = (JSONObject)parser.parse(resBuilder.toString());
		String token = (String)tokenObj.get("access_token");
		return token;
	}
	
	public UserInfo getUserInfo(String token) throws Exception {

		StringBuilder urlBuilder = new StringBuilder("https://kapi.kakao.com/v2/user/me");
		URL url = new URL(urlBuilder.toString());
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		conn.setRequestMethod("POST");
		conn.setRequestProperty("Authorization", "Bearer "+token);
		
		BufferedReader br;
		int resultCode = conn.getResponseCode();
		
		if(resultCode >= 200 && resultCode <= 300) {
			br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		} else {
			br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
		}
		
		StringBuilder resBuilder = new StringBuilder();
		String line;
		while((line=br.readLine()) != null) {
			resBuilder.append(line);
		}
		br.close();
		conn.disconnect();
		System.out.println(resBuilder.toString());
		
		JSONParser parser = new JSONParser();
		JSONObject user = (JSONObject)parser.parse(resBuilder.toString());
		String id = (Long)user.get("id")+"";
		JSONObject  properties = (JSONObject)user.get("properties");
		String nickname = (String)properties.get("nickname");
		String profileImage = (String)properties.get("profile_image");
		String thumbnailImage = (String)properties.get("thumbnail_image");
		
		JSONObject kakaoAccount = (JSONObject)user.get("kakao_account");
		String email = (String)kakaoAccount.get("email");
		String gender = (String)kakaoAccount.get("gender");
		
		UserInfo userInfo = new UserInfo(id, nickname, email, gender, profileImage, thumbnailImage);
		return userInfo;
	}
}
