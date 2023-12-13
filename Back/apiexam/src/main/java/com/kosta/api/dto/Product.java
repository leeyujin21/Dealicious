package com.kosta.api.dto;

public class Product {
	private Long idntfc_No;
	private String prdlst_Nm;
	private String m_Distctns;
	private String m_Distctns_Itm;
	private String prdlst_Cl;
	private String mtc_Nm;
	private String prdctn_Era;
	private String main_Spcies_Nm;
	private String effect;
	private String purchase_Mth;
	private String cook_Mth;
	private String trt_Mth;
	private String url;
	private String img_Url;
	private String regist_De;
	
	public Product(Long idntfc_No, String prdlst_Nm, String m_Distctns, String m_Distctns_Itm,
			String prdlst_Cl, String mtc_Nm, String prdctn_Era, String main_Spcies_Nm, String effect,
			String purchase_Mth, String cook_Mth, String trt_Mth, String url, String img_Url, String regist_De){
		this.idntfc_No = idntfc_No;
		this.prdlst_Nm = prdlst_Nm;
		this.m_Distctns = m_Distctns;
		this.m_Distctns_Itm = m_Distctns_Itm;
		this.prdlst_Cl = prdlst_Cl;
		this.mtc_Nm = mtc_Nm;
		this.prdctn_Era = prdctn_Era;
		this.main_Spcies_Nm = main_Spcies_Nm;
		this.effect = effect;
		this.purchase_Mth = purchase_Mth;
		this.cook_Mth = cook_Mth;
		this.trt_Mth = trt_Mth;
		this.url = url;
		this.img_Url = img_Url;
		this.regist_De = regist_De;
	}
	
	public Long getIdntfc_No() {
		return idntfc_No;
	}
	public void setIdntfc_No(Long idntfc_No) {
		this.idntfc_No = idntfc_No;
	}
	public String getPrdlst_Nm() {
		return prdlst_Nm;
	}
	public void setPrdlst_Nm(String prdlst_Nm) {
		this.prdlst_Nm = prdlst_Nm;
	}
	public String getM_Distctns() {
		return m_Distctns;
	}
	public void setM_Distctns(String m_Distctns) {
		this.m_Distctns = m_Distctns;
	}
	public String getM_Distctns_Itm() {
		return m_Distctns_Itm;
	}
	public void setM_Distctns_Itm(String m_Distctns_Itm) {
		this.m_Distctns_Itm = m_Distctns_Itm;
	}
	public String getPrdlst_Cl() {
		return prdlst_Cl;
	}
	public void setPrdlst_Cl(String prdlst_Cl) {
		this.prdlst_Cl = prdlst_Cl;
	}
	public String getMtc_Nm() {
		return mtc_Nm;
	}
	public void setMtc_Nm(String mtc_Nm) {
		this.mtc_Nm = mtc_Nm;
	}
	public String getPrdctn_Era() {
		return prdctn_Era;
	}
	public void setPrdctn_Era(String prdctn_Era) {
		this.prdctn_Era = prdctn_Era;
	}
	public String getMain_Spcies_Nm() {
		return main_Spcies_Nm;
	}
	public void setMain_Spcies_Nm(String main_Spcies_Nm) {
		this.main_Spcies_Nm = main_Spcies_Nm;
	}
	public String getEffect() {
		return effect;
	}
	public void setEffect(String effect) {
		this.effect = effect;
	}
	public String getPurchase_Mth() {
		return purchase_Mth;
	}
	public void setPurchase_Mth(String purchase_Mth) {
		this.purchase_Mth = purchase_Mth;
	}
	public String getCook_Mth() {
		return cook_Mth;
	}
	public void setCook_Mth(String cook_Mth) {
		this.cook_Mth = cook_Mth;
	}
	public String getTrt_Mth() {
		return trt_Mth;
	}
	public void setTrt_Mth(String trt_Mth) {
		this.trt_Mth = trt_Mth;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getImg_Url() {
		return img_Url;
	}
	public void setImg_Url(String img_Url) {
		this.img_Url = img_Url;
	}
	public String getRegist_De() {
		return regist_De;
	}
	public void setRegist_De(String regist_De) {
		this.regist_De = regist_De;
	}
}
