package com.kosta.deal.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.Sale;
import com.kosta.deal.repository.DslRepository;
import com.querydsl.core.Tuple;

@Service
public class MyPageServiceImpl implements MyPageService {
	@Autowired
	private DslRepository dslRepository;

	@Override
	public List<Sale> saleListByEmail(String email) throws Exception {
		return dslRepository.findSaleListByUserEmail(email);
	}

	@Override
	public List<Sale> saleListByZzimNum(String email) throws Exception {
		List<Sale> zzimList = dslRepository.findZzimListByUserEmail(email);
		return zzimList;
	}

	@Override
	public List<Map<String,Object>> reviewListByReceiver(String email) {
		try {
			List<Map<String,Object>> reviewList = new ArrayList<>();
			List<Tuple> tupleList = dslRepository.findReviewByReceiver(email);
			for(Tuple t: tupleList) {
				String profileimgurl = t.get(0,String.class);
				String nickname = t.get(1,String.class);
				String starcount = t.get(2,String.class);
				String ggull = t.get(3,String.class);
				String fileurl = t.get(4,String.class);
				Timestamp reviewdate = t.get(5,Timestamp.class);
				Map<String, Object> map = new HashMap<>();
				map.put("profileimgurl",profileimgurl);
				map.put("nickname", nickname);
				map.put("starcount", starcount);
				map.put("ggull", ggull);
				map.put("fileurl", fileurl);
				map.put("reviewdate", reviewdate);
				reviewList.add(map);
			}
			return reviewList;
		} catch (Exception e){
			e.printStackTrace();
			return null;
		}
	}
}
