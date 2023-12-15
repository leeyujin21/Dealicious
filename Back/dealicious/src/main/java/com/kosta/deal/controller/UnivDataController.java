package com.kosta.deal.controller;

import java.io.File;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.kosta.deal.entity.CorpData;
import com.kosta.deal.repository.CorpDataRepository;
import com.kosta.deal.service.UnivDataService;

@Component
public class UnivDataController implements CommandLineRunner {

	@Autowired
	private UnivDataService univDataService;

	@Autowired
	private CorpDataRepository corpDataRepository;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("김형섭");
		try {
			univDataService.univDataList();
		} catch (Exception e) {
			e.printStackTrace();
		}

		XmlMapper xmlMapper = new XmlMapper();
		ObjectMapper objectMapper = new ObjectMapper();

		Resource resource = new ClassPathResource("CORPCODE.xml");
        File xmlFile = resource.getFile();

		JsonNode jsonNode = xmlMapper.readTree(xmlFile);
		String jsonString = objectMapper.writeValueAsString(jsonNode);
		JSONParser parser = new JSONParser();
		JSONObject mobj = (JSONObject) parser.parse(jsonString);
		JSONArray contents = (JSONArray) mobj.get("list");
		for (int i = 0; i < contents.size(); i++) {
			JSONObject univJson = (JSONObject) contents.get(i);
			String corp_name = (String) univJson.get("corp_name");
			String corp_code = (String) univJson.get("corp_code");
			String stock_code = (String) univJson.get("stock_code");
			String modify_date = (String) univJson.get("modify_date");
			CorpData corpData = new CorpData(i + 1, corp_code, corp_name, stock_code, modify_date);
			if(!stock_code.isBlank()) {
				corpDataRepository.save(corpData);
			}
		}

		System.out.println("MyControllerInitializer 실행됨");
	}
}