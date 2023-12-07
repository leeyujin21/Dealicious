package com.kosta.deal.dto;

import lombok.Data;


@Data
public class ChatDto {
    private Integer channelId;
    private String writerId;
    private String chat;
    private String data;
}