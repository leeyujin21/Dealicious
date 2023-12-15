package com.kosta.deal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kosta.deal.repository.DslRepository;
@Service
public class CorpDataService {
	@Autowired
	DslRepository dslRepository;

	public List<String> processUserInput(String typename) {
		return dslRepository.findCorpNameList(typename);
	}
}
