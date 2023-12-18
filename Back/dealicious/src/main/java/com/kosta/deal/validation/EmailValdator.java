package com.kosta.deal.validation;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.kosta.deal.validation.CustomAnnotaionCollection.CustomEmail;

public class EmailValdator implements ConstraintValidator<CustomEmail, String>{

	private static final String EMAIL_PATTERN =
            "^(?=.{1,64}@)[A-Za-z0-9-]+(.[A-Za-z0-9-]+)@" +
                    "[^-][A-Za-z0-9-]+(.[A-Za-z0-9-]+)(.[A-Za-z]{2,})$";
    private Pattern pattern;

    // 패턴 컴파일
    @Override
    public void initialize(CustomEmail constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
        pattern = Pattern.compile(EMAIL_PATTERN);
    }

    // 전달받은 email이 유효한지 검증
    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        if (email == null) {
            return false;
        }
        Matcher matcher = pattern.matcher(email);

        return matcher.matches();
    }
}
