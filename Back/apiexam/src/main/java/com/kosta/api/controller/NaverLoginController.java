package com.kosta.api.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.kosta.api.dto.UserInfo;
import com.kosta.api.service.NaverLoginService;

@Controller
public class NaverLoginController {
	
	@Autowired
	private NaverLoginService naverLoginService;
	
	@Autowired
	private HttpSession session;
	
	@RequestMapping(value="/naverlogin", method=RequestMethod.GET)
	public ModelAndView naverLogin(@RequestParam("code") String code, @RequestParam("state") String state) {
		ModelAndView mav = new ModelAndView();
//		String code = request.getParameter("code");
//		String state = request.getParameter("state");
		try {
			UserInfo userInfo = naverLoginService.naverLogin(code, state);
			
			// 기존 mav.addObject 대신 session에 userInfo 저장
			session.setAttribute("userInfo", userInfo);
			mav.setViewName("naveruserinfo");
		} catch (Exception e) {
			e.printStackTrace();
			mav.addObject("err", "네이버 로그인 실패");
			mav.setViewName("error");
		}
		return mav;
	}

}
