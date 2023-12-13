<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<html>
<head>
<title>Home</title>
</head>
<body>
   <div class="container mt-3">
      <h2>농산물 정보</h2>
      <table class="table table-striped">
         <thead>
            <tr>
               <th>식품번호</th>
               <th>품목명(기장 등)</th>
               <th>월별(9월)</th>
               <th>월별농식품</th>
               <th>품목분류</th>
               <th>주요 산지</th>
               <th>생산시기</th>
               <th>주요 품종</th>
               <th>효능</th>
               <th>구입요령</th>
               <th>조리법</th>
               <th>손질요령</th>
               <th>상세페이지 url</th>
               <th>이미지URL</th>
               <th>등록일</th>
            </tr>
         </thead>
         <tbody>
            <c:forEach items="${productList}" var="pd">
               <tr data-x=${pd.idntfc_No}>
                  <td>${pd.idntfc_No}</td>
                  <td>${pd.prdlst_Nm}</td>
                  <td>${pd.m_Distctns}</td>
                  <td>${pd.m_Distctns_Itm}</td>
                  <td>${pd.prdlst_Cl}</td>
                  <td>${pd.mtc_Nm}</td>
                  <td>${pd.prdctn_Era}</td>
                  <td>${pd.main_Spcies_Nm}</td>
                  <td>${pd.effect}</td>
                  <td>${pd.purchase_Mth}</td>
                  <td>${pd.cook_Mth}</td>
                  <td>${pd.trt_Mth}</td>
                  <td>${pd.url}</td>
                  <td>${ac.img_Url}</td>
                  <td>${ac.regist_De}</td>
               </tr>
            </c:forEach>
         </tbody>
      </table>