package com.kosta.deal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CorpData {
   @Id
   private Integer num;
   @Column
   private String corp_code;
   @Column
   private String corp_name;
   @Column
   private String stock_code;
   @Column
   private String modify_date;
}