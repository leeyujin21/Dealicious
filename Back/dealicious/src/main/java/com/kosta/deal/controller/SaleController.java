package com.kosta.deal.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

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

import com.kosta.deal.entity.Sale;
import com.kosta.deal.service.SaleService;
import com.kosta.deal.util.PageInfo;



@RestController
public class SaleController {
	
	@Autowired
	private SaleService saleService;
	
	
	@GetMapping({"/salelist/{page}","/salelist"})  //salelist 페이지 처리
	public ResponseEntity<Map<String,Object>> saleList(@PathVariable(required=false) Integer page) {
		try {
			PageInfo pageInfo = PageInfo.builder().curPage(page).build();
			List<Sale> saleList = saleService.saleListByPage(pageInfo);
			Map<String,Object> res = new HashMap<>();
			res.put("pageInfo", pageInfo);
			res.put("saleList", saleList);
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/salelist") //카테고리별 salelist 목록
	public ResponseEntity<List<Sale>> saleListByCategory(@RequestBody Map<String,String> cat) {
		System.out.println("-------------------------------------");
		
		String category = (String)cat.get("cat");
		System.out.println(category);
		
	     try {
	    	 //List<Sale> saleList= saleService.SaleListByCategory(category);
	    	 return new ResponseEntity<List<Sale>>(HttpStatus.OK);
			} catch(Exception e) {
				e.printStackTrace();
				return new ResponseEntity<List<Sale>>(HttpStatus.BAD_REQUEST);
			}
	}
	
	
	@GetMapping("/saledetail/{num}")
	public ResponseEntity<Map<String,Object>> saleDetail(@PathVariable String sect,@PathVariable Integer num){
		try {
			Map<String,Object> res= new HashMap<>();
			Sale sale = saleService.saleDetail(num);
			res.put("sale", sale);
			if(sect.equals("only-detail")) {
				saleService.plusViewCount(num);
				Boolean heart= saleService.isHeartSale("user",num);
				res.put("heart", heart);
			}else if(sect.equals("after-modify")) {
				Boolean heart=saleService.isHeartSale("user",num);
				res.put("heart", heart);
			}
			System.out.println(sale);
			return new ResponseEntity<Map<String,Object>> (res,HttpStatus.OK);
		}catch(Exception e){
			e.printStackTrace();
			return new ResponseEntity<Map<String,Object>>(HttpStatus.BAD_REQUEST);
		}
	}
	@PostMapping("/salewrite")
	public ResponseEntity<Integer> saleWrite(@ModelAttribute Sale sale,List<MultipartFile> file) {
		
		try {
			System.out.println(sale);
			System.out.println(file);
			Integer num=saleService.saleWrite(sale, file);
			return new ResponseEntity<Integer>(num,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
		
	}
	@GetMapping("/salemodify/{num}")
	public  ResponseEntity<Sale> saleModify(@PathVariable Integer num) {
		try {
			Sale sale = saleService.saleDetail(num);
			return new ResponseEntity<Sale>(sale,HttpStatus.OK);
			
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Sale>(HttpStatus.BAD_REQUEST);
		}
		
		
	}
	@PostMapping("/salemodify")
	public ResponseEntity<Integer> saleModify(@ModelAttribute Sale sale,@RequestParam(value="file",required=false)List<MultipartFile>file){
		try {
			Integer num =saleService.saleModify(sale,file);
			return new ResponseEntity<Integer>(num,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/salelike/{num}")
	public ResponseEntity<Map<String,Object>> saleLike(@PathVariable Integer num){
		try {
			Map<String,Object> res= new HashMap<>();
			Boolean selectSale=saleService.selHeartSale("lubby", num);
			res.put("isSelect", selectSale);
			Integer likeCount = saleService.saleDetail(num).getZzimcnt();
			res.put("likeCount", likeCount);
			return new ResponseEntity<Map<String,Object>>(res,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Map<String,Object>>(HttpStatus.BAD_REQUEST);
		}
		
		
		
	}
	
	@GetMapping("/img/{num}")
	public void imageView(@PathVariable Integer num,HttpServletResponse response){
		try {
			saleService.readImage(num, response.getOutputStream());
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
}