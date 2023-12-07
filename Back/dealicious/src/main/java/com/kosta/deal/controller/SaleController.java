package com.kosta.deal.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.kosta.deal.entity.Sale;
import com.kosta.deal.service.SaleServiceImpl;



@RestController
public class SaleController {
	
	@Autowired
	private SaleServiceImpl saleService;
	
	
	@GetMapping("/salelist/{category}")
	public ResponseEntity<Sale> saleList(@PathVariable String category){
		try {
			List<Sale> sale= saleService.saleList(category);
			return new ResponseEntity<Sale> (HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Sale>(HttpStatus.BAD_REQUEST);
		}
		
		
	}
	@GetMapping("/saledetail/{num}")
	public ResponseEntity<Sale> saleList(@PathVariable Integer num){
		try {
			Sale sale = saleService.saleDetail(num);
			return new ResponseEntity<Sale> (sale,HttpStatus.OK);
		}catch(Exception e){
			e.printStackTrace();
			return new ResponseEntity<Sale>(HttpStatus.BAD_REQUEST);
		}
	}
	@PostMapping("/salewrite")
	public ResponseEntity<Integer> saleWrite(@ModelAttribute Sale sale,MultipartFile file) {
		
		try {
			Integer num=saleService.saleWrite(sale, file);
			return new ResponseEntity<Integer>(num,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
		
	}
	@GetMapping("/salemodify/{num}/")
	public ModelAndView saleModify(@PathVariable("num")Integer num) {
		ModelAndView mav= new ModelAndView();
		try {
			Sale sale = saleService.saleDetail(num);
			mav.addObject("sale",sale);
			mav.setViewName("salemodify");
		}catch(Exception e) {
			mav.addObject("err","글 수정 실패");
			mav.setViewName("error");
		}
		
		return mav;
	}
	@PostMapping("/salemodify")
	public ModelAndView saleModify(@ModelAttribute Sale sale, @RequestParam("file")MultipartFile file) {
		ModelAndView mav=new ModelAndView();
		try {
		
			saleService.saleModify(sale, file);
			mav.setViewName("saledetail");
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return mav;
	}
	@GetMapping("/salesearch/{type}/{keyword}")
	public ResponseEntity<Map<String,Object>>saleSearch(@PathVariable(required=false)String type,@PathVariable(required=false)String keyword){
		try {
			List<Sale> saleList=saleService.searchList(type,keyword);
			Map<String,Object> res= new HashMap<>();
			res.put("saleList", saleList);
			return new ResponseEntity<Map<String,Object>> (res,HttpStatus.OK);

		}catch(Exception e){
			e.printStackTrace();
			return new ResponseEntity<Map<String,Object>>(HttpStatus.BAD_REQUEST);
		}
	}
	@PostMapping("/salesearch")
	public ResponseEntity<Object> saleSearch(@RequestBody Map<String,Object>param) {
		
		try {
			String type=(String)param.get("type");
			String keyword=(String)param.get("keyword");
			Map<String,Object> res=new HashMap<>();
			res.put("type", type);
			res.put("keyword", keyword);
			return new ResponseEntity<Object>(res,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
	}
	
}
