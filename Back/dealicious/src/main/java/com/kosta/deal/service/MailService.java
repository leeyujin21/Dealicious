package com.kosta.deal.service;

import javax.transaction.Transactional;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MailService {
	private final JavaMailSender emailsender;
	
	public void sendEmail(String toEmail, String title, String text) {
		SimpleMailMessage emailForm = createEmailForm(toEmail, title, text);
		try {
			emailsender.send(emailForm);
		} catch(RuntimeException e) {
			e.printStackTrace();
		}
	}
	
	private SimpleMailMessage createEmailForm(String toEmail, String title, String text) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(toEmail);
		message.setSubject(title);
		message.setText(text);
		
		return message;
	}
}
