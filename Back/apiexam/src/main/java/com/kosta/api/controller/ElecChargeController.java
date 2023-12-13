package com.kosta.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.kosta.api.dto.ElecCharge;
import com.kosta.api.service.ElecChargeService;

@Controller
public class ElecChargeController {
	
	@Autowired
	private ElecChargeService elecChargeService;
	
	@RequestMapping(value="/eleccharge", method=RequestMethod.GET)
	public ModelAndView elecChargeList() {
		ModelAndView mav = new ModelAndView();
		try {
			List<ElecCharge> ecList = elecChargeService.elecChargeList();
			mav.addObject("ecList", ecList);
			mav.setViewName("elec_charge");
		} catch(Exception e) {
			e.printStackTrace();
			mav.setViewName("error");
		}
		return mav;
	}
}
