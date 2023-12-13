<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link
   href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
   rel="stylesheet">
<script
   src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
></script>
<c:set var="path" value="${pageContext.request.contextPath }" />
<html>
<head>
<title>Home</title>
</head>
<body>
   <div class="container mt-3">
      <h2>서울시 동물병원 인허가 정보</h2>
      <table class="table table-striped">
         <thead>
            <tr>
               <th>1</th>
               <th>2</th>
               <th>3</th>
               <th>4</th>
               <th>5</th>
               <th>6</th>
            </tr>
         </thead>
         <tbody>
            <c:forEach items="ecList" var="ec">
               <tr data = ${ec.csId}>
                  <td>${ec.csId}</td>
                  <td>${ec.csNm}</td>
                  <td>${ec.addr}</td>
                  <td>${ec.lat}</td>
                  <td>${ec.longi}</td>
                  <td>${ec.cpId}</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
            </c:forEach>
         </tbody>
      </table>
   </div>
</body>
</html>