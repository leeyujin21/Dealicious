package com.kosta.deal.service;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kosta.deal.entity.FileVo;
import com.kosta.deal.entity.User;
import com.kosta.deal.repository.FileVoRepository;
import com.kosta.deal.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private FileVoRepository fileVoRepository;

	@Override
	public User login(String email, String password) throws Exception {
		Optional<User> ouser = userRepository.findByEmail(email);
		if (ouser.isEmpty())
			throw new Exception("아이디 오류");
		User user = ouser.get();
		if (!user.getPassword().equals(password))
			throw new Exception("비밀번호 오류");
		return user;
	}

	@Override
	public boolean checkNickname(String nickname) throws Exception {
		boolean checknickname = userRepository.existsByNickname(nickname);
		if (checknickname) {
			return false;
		}
		return true;
	}

	@Override
	public void uploadProfileimg(User user, MultipartFile file) throws Exception {
		String dir="c:/upload/";
		if (file != null && !file.isEmpty()) {
            try {
                // file table에 insert
            	System.out.println("1");
                FileVo fileVo = FileVo.builder().directory(dir).name(file.getOriginalFilename())
                        .size(file.getSize()).contenttype(file.getContentType()).data(file.getBytes()).build();
                System.out.println("2");
                fileVoRepository.save(fileVo);

                // upload 폴더에 upload
                System.out.println("3");
                File uploadFile = new File(dir + fileVo.getNum());
                file.transferTo(uploadFile);

                System.out.println("4");
                String fileNums = Integer.toString(fileVo.getNum());
                user.setProfileimgurl(fileNums);
            } catch (IOException e) {
                // 파일 저장 중 예외 발생 시 클라이언트에게 알림
                throw new Exception("프로필 이미지를 업로드하는 중 오류가 발생했습니다.");
            }
        }
	}

	@Override
	public User findUserByEmail(String email) throws Exception {
		
		return userRepository.findByEmail(email).get();
	}
}
