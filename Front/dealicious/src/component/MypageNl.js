import Avvvatars from "avvvatars-react";
import { useRef, useState } from "react";
import { Button } from "reactstrap";

const MypageNl = () => {
    const Image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const fileInput = useRef(null)
    function goToLogin() {
        window.location.replace("/login")
    }
    return (
        <div className='main' style={{ overflow: "scroll", height: "632px", overflowX: "hidden", paddingTop: "150px" }}>
            <div style={{ marginLeft: "160px", marginBottom:"10px" }}>
                <Avvvatars
                    src={Image}
                    style={{ margin: '20px' }}
                    size={65}
                    onClick={() => { fileInput.current.click() }}
                />
            </div>
            <p>로그인 후 이용해주세요</p>
            <div style={{ paddingBottom: "30px" , fontSize:"13px"}}>
                딜리셔스 서비스를 이용하기 위해
                    로그인이 필요합니다
            </div>
            <Button style={{ backgroundColor: "#14C38E", borderStyle: "none" }} onClick={goToLogin}>
                로그인/회원가입
            </Button>
        </div>
    )
}

export default MypageNl;