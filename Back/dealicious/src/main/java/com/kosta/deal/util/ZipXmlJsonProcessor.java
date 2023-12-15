package com.kosta.deal.util;

import java.io.File;
import java.io.IOException;
import java.util.zip.ZipFile;

import org.apache.commons.io.FileUtils;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

public class ZipXmlJsonProcessor {
	public static void main(String[] args) {
		String downloadUrl = "https://opendart.fss.or.kr/api/corpCode.xml?crtfc_key=";
		String serviceKey = "{faa541844072690b13fbbdc81847dfb67fe6a87b}";
		String apiUrl = downloadUrl+serviceKey;
		String downloadPath = "C://corpdata.zip";
		String unzipDir = "C://";
		String jsonFilePath = "C://corpdata.json";
		
		downloadZipFile(apiUrl, downloadPath);
		
		unzipFile(downloadPath, unzipDir);
		
		convertXmlToJson(unzipDir, jsonFilePath);
	}
	
	private static void downloadZipFile(String apiUrl, String downloadPath) {
		RestTemplate restTemplate = new RestTemplate();
		byte[] zipFile = restTemplate.getForObject(apiUrl, byte[].class);
		
		try {
			FileUtils.writeByteArrayToFile(new File(downloadPath), zipFile);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private static void unzipFile(String zipFilePath, String unzipDir) {
		try(ZipFile zipFile = new ZipFile(zipFilePath)) {
			zipFile.stream().forEach(zipEntry -> {
				try {
					String entryName = zipEntry.getName();
					File entryFile = new File(unzipDir, entryName);
					
					if(zipEntry.isDirectory()) {
						FileUtils.forceMkdir(entryFile);
					} else {
						FileUtils.copyInputStreamToFile(zipFile.getInputStream(zipEntry), entryFile);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void convertXmlToJson(String xmlFilePath, String jsonFilePath) {
		try {
			XmlMapper xmlMapper = new XmlMapper();
			ObjectMapper objectMapper = new ObjectMapper();

            File xmlFile = new File(xmlFilePath);
            JsonNode jsonNode = xmlMapper.readTree(xmlFile);
            String jsonString = objectMapper.writeValueAsString(jsonNode);

            FileUtils.writeStringToFile(new File(jsonFilePath), jsonString, "UTF-8");
		} catch(IOException e) {
			e.printStackTrace();
		}
	}
}