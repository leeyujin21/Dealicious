<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<title>Insert title here</title>
</head>
<body>
<div class="container mt-3">
  <h2>네이버 사용자 정보</h2>            
  <table class="table table-dark table-striped">
      <tr>
        <th>id</th>
        <td>${userInfo.id}</td>
      </tr>
      <tr>
        <th>nickname</th>
		<td>${userInfo.nickname}</td>
      </tr>
      <tr>
        <th>age</th>
		<td>${userInfo.age}</td>
      </tr>
      <tr>
        <th>gender</th>
		<td>${userInfo.gender}</td>
      </tr>
      <tr>
        <th>email</th>
		<td>${userInfo.email}</td>
      </tr>
      <tr>
        <th>mobile</th>
		<td>${userInfo.mobile}</td>
      </tr>
      <tr>
        <th>name</th>
		<td>${userInfo.name}</td>
      </tr>
      <tr>
        <th>birthday</th>
		<td>${userInfo.birthday}</td>
      </tr>
  </table>
</div>
</body>
</html>