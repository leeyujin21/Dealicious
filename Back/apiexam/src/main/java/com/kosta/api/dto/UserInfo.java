package com.kosta.api.dto;

public class UserInfo {
	private String id;
	private String nickname;
	private String profileImage;
	private String thumbnailImage;
	private String email;
//	private String age_range;
//	private String birthday;
	private String gender;
	private String name;
	private String mobile;
	private String age;
	private String birthday;
	private String address;
	private String password;
	
	public UserInfo() {}
	
	// kakao
	public UserInfo(String id, String nickname, String email, String gender, String profileImage, String thumbnailImage) {
		super();
		this.id = id;
		this.nickname = nickname;
		this.email = email;
		this.gender = gender;
		this.profileImage = profileImage;
		this.thumbnailImage = thumbnailImage;
	}
	
	// naver
	public UserInfo(String id, String nickname, String profileImage, String email, String gender, String name,
			String mobile, String age, String birthday) {
		super();
		this.id = id;
		this.nickname = nickname;
		this.profileImage = profileImage;
		this.email = email;
		this.gender = gender;
		this.name = name;
		this.mobile = mobile;
		this.age = age;
		this.birthday = birthday;
	}
	
	// 일반 회원가입
	public UserInfo(String id, String nickname, String profileImage, String email, String name,
			String mobile, String address, String password) {
		super();
		this.id = id;
		this.nickname = nickname;
		this.profileImage = profileImage;
		this.email = email;
		this.name = name;
		this.mobile = mobile;
		this.address = address;
		this.password = password;
	}

	public String getName() {
		return name;
	}


	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setName(String name) {
		this.name = name;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getAge() {
		return age;
	}


	public void setAge(String age) {
		this.age = age;
	}


	public String getBirthday() {
		return birthday;
	}


	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getProfileImage() {
		return profileImage;
	}

	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}

	public String getThumbnailImage() {
		return thumbnailImage;
	}

	public void setThumbnailImage(String thumbnailImage) {
		this.thumbnailImage = thumbnailImage;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	
}

