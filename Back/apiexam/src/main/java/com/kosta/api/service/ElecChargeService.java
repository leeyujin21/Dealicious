package com.kosta.api.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import com.kosta.api.dto.ElecCharge;

@Service
public class ElecChargeService {
	
	public List<ElecCharge> elecChargeList() throws Exception {
		
		StringBuilder sb = new StringBuilder("http://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?");
		String serviceKey = "oF9zS2JZq9L7XbRGhJzv3EsLzUlzs%2F3YRXf7dx%2BFSc7QxVqrYauf8kGt3NwRcFz1XgVoa3na6PFkdLoEpvh%2Bvg%3D%3D";
		
		sb.append(URLEncoder.encode("page=1", "UTF-8"));
		sb.append("&"+URLEncoder.encode("perPage=10", "UTF-8"));
		sb.append("&"+URLEncoder.encode("returnType=JSON", "UTF-8"));
		sb.append("&"+URLDecoder.decode("serviceKey="+serviceKey, "UTF-8"));
		
		URL url = new URL(sb.toString());
		System.out.println(url.toString());
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		conn.setRequestMethod("GET");
		conn.setRequestProperty("Content-type", "application/json");
		
		int code = conn.getResponseCode();
		BufferedReader br;
		
		if (code == 200 ) {
			br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		} else {
			br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
		}

		StringBuilder dsb = new StringBuilder();
		String Line = null;
		
		while((Line = br.readLine()) != null) {
			dsb.append(Line);
		}
		br.close();
	    conn.disconnect();
	    
	    List<ElecCharge> ecList = new ArrayList<>();
	    JSONParser parser = new JSONParser();
	    JSONObject mobj = (JSONObject)parser.parse(dsb.toString());
	    Long totalCount = (Long)mobj.get("totalCount");
	    JSONArray data = (JSONArray)mobj.get("data");

	    for(int i = 0; i < data.size(); i++) {
	    	JSONObject ecJson = (JSONObject)data.get(i);
	    	Integer csId = (Integer)ecJson.get("csId");
	    	String csNm = (String)ecJson.get("csNm");
	    	String addr = (String)ecJson.get("addr");
	    	String lat = (String)ecJson.get("lat");
	    	String longi = (String)ecJson.get("longi");
	    	Integer cpId = (Integer)ecJson.get("cpId");
	    	String chargeTp = (String)ecJson.get("chargeTp");
	    	String cpNm = (String)ecJson.get("cpNm");
	    	String statUpdatetime = (String)ecJson.get("statUpdatetime");
	    	String cpStat = (String)ecJson.get("cpStat");
	    	ecList.add(new ElecCharge(csId, csNm, addr, lat, longi, cpId, chargeTp, cpNm, statUpdatetime, cpStat));
	    }

		return ecList;
	}
}
