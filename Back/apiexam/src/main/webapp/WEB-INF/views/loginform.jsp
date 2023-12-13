<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=7767ebd6120b8699fa3e4e5970475483&redirect_uri=http://localhost:8090/api/kakaologin">
		<img src="${path}/resources/img/kakao_login_medium_narrow.png" />
	</a>
	<br/>
	<a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=fp6W8_pf_3Me1b8AeXBO&redirect_uri=http://localhost:8090/api/naverlogin">
	 	<img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG"/>
	 </a>
</body>
</html>