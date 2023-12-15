package com.kosta.deal.validation;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.kosta.deal.validation.CustomAnnotaionCollection.Password;

public class PasswordValidator implements ConstraintValidator<Password, String>{

	private static final String EMAIL_PATTERN =
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$";
    private Pattern pattern;

    @Override
    public void initialize(Password constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
        pattern = Pattern.compile(EMAIL_PATTERN);
    }

    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        if (email == null) {
            return false;
        }
        Matcher matcher = pattern.matcher(email);

        return matcher.matches();
    }

}
