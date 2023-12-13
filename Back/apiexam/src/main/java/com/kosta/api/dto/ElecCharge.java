package com.kosta.api.dto;

public class ElecCharge {
	private Integer csId;
	private String csNm;
	private String addr;
	private String lat;
	private String longi;
	private Integer cpId;
	private String chargeTp;
	private String cpNm;
	private String statUpdatetime;
	private String cpStat;
	
	public ElecCharge(Integer csId, String csNm, String addr, String lat, String longi, Integer cpId, String chargeTp,
			String cpNm, String statUpdatetime, String cpStat) {
		this.csId = csId;
		this.csNm = csNm;
		this.addr = addr;
		this.lat = lat;
		this.longi = longi;
		this.cpId = cpId;
		this.chargeTp = chargeTp;
		this.cpNm = cpNm;
		this.statUpdatetime = statUpdatetime;
		this.cpStat = cpStat;
	}
	
	public Integer getCsId() {
		return csId;
	}
	public void setCsId(Integer csId) {
		this.csId = csId;
	}
	public String getCsNm() {
		return csNm;
	}
	public void setCsNm(String csNm) {
		this.csNm = csNm;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLongi() {
		return longi;
	}
	public void setLongi(String longi) {
		this.longi = longi;
	}
	public Integer getCpId() {
		return cpId;
	}
	public void setCpId(Integer cpId) {
		this.cpId = cpId;
	}
	public String getChargeTp() {
		return chargeTp;
	}
	public void setChargeTp(String chargeTp) {
		this.chargeTp = chargeTp;
	}
	public String getCpNm() {
		return cpNm;
	}
	public void setCpNm(String cpNm) {
		this.cpNm = cpNm;
	}
	public String getStatUpdatetime() {
		return statUpdatetime;
	}
	public void setStatUpdatetime(String statUpdatetime) {
		this.statUpdatetime = statUpdatetime;
	}
	public String getCpStat() {
		return cpStat;
	}
	public void setCpStat(String cpStat) {
		this.cpStat = cpStat;
	}
	
	
}
