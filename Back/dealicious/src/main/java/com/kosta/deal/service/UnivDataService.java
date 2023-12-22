package com.kosta.deal.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.entity.UnivData;
import com.kosta.deal.repository.DslRepository;
import com.kosta.deal.repository.UnivDataRepository;

@Service
public class UnivDataService {
	@Autowired
	UnivDataRepository univDataRepostory;
	@Autowired
	DslRepository dslRepository;
	public List<UnivData> univDataList() throws Exception {

		StringBuilder sb = new StringBuilder("https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=");
		String serviceKey = "194dadd8f41a2f2d1dacd0191cf2c460";
		sb.append(serviceKey);
		sb.append("&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list&perPage=500");

		URL url = new URL(sb.toString());
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		conn.setRequestProperty("Content-type", "application/json");

		int code = conn.getResponseCode();
		BufferedReader br;

		if (code == 200) {
			br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		} else {
			br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
		}

		StringBuilder dsb = new StringBuilder();
		String Line = null;

		while ((Line = br.readLine()) != null) {
			dsb.append(Line);
		}
		br.close();
		conn.disconnect();

		List<UnivData> univList = new ArrayList<>();
		JSONParser parser = new JSONParser();
		JSONObject mobj = (JSONObject) parser.parse(dsb.toString());
		JSONObject data = (JSONObject) mobj.get("dataSearch");
		JSONArray contents = (JSONArray) data.get("content");
		for (int i = 0; i < contents.size(); i++) {
			JSONObject univJson = (JSONObject) contents.get(i);
		    Integer id = i + 1;
			String campusName = (String) univJson.get("campusName");
			String totalCount = (String) univJson.get("totalCount");
			String schoolName = (String) univJson.get("schoolName");
			String schoolGubun = (String) univJson.get("schoolGubun");
			String schoolType = (String) univJson.get("schoolType");
			String estType = (String) univJson.get("estType");
			String region = (String) univJson.get("region");
			String adres = (String) univJson.get("adres");
			String collegeinfourl = (String) univJson.get("collegeinfourl");
			String link = (String) univJson.get("link");
			String seq = (String) univJson.get("seq");
			UnivData univdata = new UnivData(id, campusName, totalCount, schoolName, schoolGubun, schoolType, estType,
					region, adres, collegeinfourl, link, seq);
			univDataRepostory.save(univdata);
		}

		return univList;
	}
	
	public List<String> processUserInput(String typename) {
		return dslRepository.findUnivNameList(typename);
    }
}