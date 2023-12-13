package com.kosta.api.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import com.kosta.api.dto.AnimalClinic;
import com.kosta.api.dto.PageInfo;
import com.kosta.api.dto.Product;

@Service
public class SeoulApiService {
   public List<AnimalClinic> animalClinicList(PageInfo pageInfo) throws Exception {
      int startIdx = (pageInfo.getCurPage() - 1) * 10 + 1;
      StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088");
      urlBuilder.append("/" + URLEncoder.encode("/", "UTF-8")); // ����Ű ���⿡ ����
      urlBuilder.append("/" + URLEncoder.encode("json", "UTF-8")); // ��û ���� Ÿ�� type ���ڴ��� ������ �ְ�޴°�
      urlBuilder.append("/" + URLEncoder.encode("LOCALDATA_020301", "UTF-8")); // ���� �̸�
      urlBuilder.append("/" + URLEncoder.encode(startIdx + "", "UTF-8"));
      urlBuilder.append("/" + URLEncoder.encode(startIdx + 9 + "", "UTF-8")); // ��û�ϱ� ���� url����� �۾�

      // ������� ������ stream
      // request
//      System.out.println(urlBuilder.toString());
      URL url = new URL(urlBuilder.toString()); // java.neturl
      HttpURLConnection conn = (HttpURLConnection) url.openConnection();
      conn.setRequestMethod("GET"); // �޼ҵ� ����
      conn.setRequestProperty("Content-type", "application/json"); // ��û


      // response
      BufferedReader br; // scanner�� ���� �Է¹��� �����Ͱ� String���� ����
      int resultCode = conn.getResponseCode();
      System.out.println("here>>>>>> " + resultCode);
      if (resultCode >= 200 && resultCode <= 300) {// �ڵ尡 200~300 ���̸� ����
         br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
      } else { // ����
         br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));

      }
      StringBuilder resBuilder = new StringBuilder();
      String line;
      while ((line = br.readLine()) != null) {
         resBuilder.append(line);
      }
      br.close();
      conn.disconnect();
      System.out.println(resBuilder.toString());

      List<AnimalClinic> acList = new ArrayList<>();
      JSONParser parser = new JSONParser(); // �Ľ�ó��
      JSONObject mobj = (JSONObject) parser.parse(resBuilder.toString());
      JSONObject LOCALDATA_020301 = (JSONObject) mobj.get("LOCALDATA_020301"); // JSONOBJECT�� ĳ����
      Long list_total_count = (Long) LOCALDATA_020301.get("list_total_count");
      JSONArray row = (JSONArray) LOCALDATA_020301.get("row");

      for (int i = 0; i < row.size(); i++) {
         JSONObject acJson = (JSONObject) row.get(i);
         String trdStateNm = (String) acJson.get("TRDSTATENM");
         String siteTel = (String) acJson.get("SITETEL");
         String rdNwhlAddr = (String) acJson.get("RDNWHLADDR");
         String bplcNm = (String) acJson.get("BPLCNM");
         String x = (String) acJson.get("X");
         String y = (String) acJson.get("Y");
         acList.add(new AnimalClinic(trdStateNm, siteTel, rdNwhlAddr, bplcNm, x, y));

      }
      int allPage = (int) Math.ceil(list_total_count.doubleValue() / 10);
      int startPage = (pageInfo.getCurPage() - 1) / 10 * 10 + 1;
      int endPage = Math.min(startPage + 10 - 1, allPage);

      pageInfo.setAllPage(allPage);
      pageInfo.setStartPage(startPage);
      pageInfo.setEndPage(endPage);
      if (pageInfo.getCurPage() > allPage)
         pageInfo.setCurPage(allPage);
      return acList;
   }
   
   
   public List<Product> productList() throws Exception {
		StringBuilder urlBuilder = new StringBuilder("http://211.237.50.150:7080/openapi");
		urlBuilder.append("/" + URLEncoder.encode("4f0607d0f073f6a635bc14f46049e50d59f76605431ae2e557371fc596549ff6", "UTF-8"));
		urlBuilder.append("/" + URLEncoder.encode("json" , "UTF-8"));
		urlBuilder.append("/" + URLEncoder.encode("Grid_20171128000000000572_1" , "UTF-8"));
		urlBuilder.append("/" + URLEncoder.encode("1", "UTF-8"));
		urlBuilder.append("/" + URLEncoder.encode("5", "UTF-8"));
//		urlBuilder.append("?" + URLEncoder.encode("11", "UTF-8"));
		
		URL url = new URL(urlBuilder.toString()); // java.neturl
	    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	    conn.setRequestMethod("GET"); // �޼ҵ� ����
	    conn.setRequestProperty("Content-type", "application/json");
	    
	    BufferedReader br;
	    int resultCode = conn.getResponseCode();

	    if (resultCode > 100) {
	       br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	    } else {
	       br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
	    }
	    StringBuilder resBuilder = new StringBuilder();
	    String line;
	    while ((line = br.readLine()) != null) {
	       resBuilder.append(line);
	    }
	    br.close();
	    conn.disconnect();
	    System.out.println(resBuilder.toString());

	    List<Product> productList = new ArrayList<>();
	    JSONParser parser = new JSONParser(); // �Ľ�ó��
	    JSONObject mobj = (JSONObject) parser.parse(resBuilder.toString());
	    JSONObject Grid_20171128000000000572_1 = (JSONObject)mobj.get("Grid_20171128000000000572_1"); // JSONOBJECT�� ĳ����
	    JSONArray row = (JSONArray)Grid_20171128000000000572_1.get("row");

	      for (int i = 0; i < row.size(); i++) {
	         JSONObject pdJson = (JSONObject)row.get(i);
	         Long idntfc_No = (Long)pdJson.get("IDNTFC_NO");
	         String prdlst_Nm = (String)pdJson.get("PRDLST_NM");
	         String m_Distctns = (String)pdJson.get("M_DISTCTNS");
	         String m_Distctns_Itm = (String)pdJson.get("M_DISTCTNS_ITM");
	         String prdlst_Cl = (String)pdJson.get("PRDLST_CL");
	         String mtc_Nm = (String)pdJson.get("MTC_NM");
	         String prdctn_Era = (String)pdJson.get("PRDCTN__ERA");
	         String main_Spcies_Nm = (String)pdJson.get("MAIN_SPCIES_NM");
	         String effect = (String)pdJson.get("EFFECT");
	         String purchase_Mth = (String)pdJson.get("PURCHASE_MTH");
	         String cook_Mth = (String)pdJson.get("COOK_MTH");
	         String trt_Mth = (String)pdJson.get("TRT_MTH");
	         String surl = (String)pdJson.get("URL");
	         String img_Url = (String)pdJson.get("IMG_URL");
	         String regist_De = (String)pdJson.get("REGIST_DE");
	         productList.add(new Product(idntfc_No, prdlst_Nm, m_Distctns, m_Distctns_Itm, prdlst_Cl, mtc_Nm, prdctn_Era, main_Spcies_Nm, effect, purchase_Mth, cook_Mth, trt_Mth, surl ,img_Url, regist_De));
	      }
	      return productList;
	}
}