import React, { useRef, useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import './text.css';
import {Link, useNavigate} from 'react-router-dom';
import { Input,Button } from 'reactstrap';
import { FaCamera } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';



const SaleWrite=()=>{
    const [currentImage, setCurrentImage] = useState("./ggul2.png");
    const navigate=useNavigate();
    const [imageCount, setImageCount] = useState(0); // 상태 변수로 이미지 카운트를 관리.
    const [files] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]); // 여러 이미지를 저장하는 배열
    const fileInputRef = useRef(null);
    const [timeAgo, setTimeAgo] = useState('');

    const calculateTimeAgo = (submissionTime) => {  
        const currentTime = new Date();  //현재시간
        const timeDiffInMs = currentTime - submissionTime;  //현재시간 - 상품등록시간
        const minutesAgo = Math.floor(timeDiffInMs / (1000 * 60));  

        if (minutesAgo < 60) {
            setTimeAgo(`${minutesAgo}분 전`);
        } else {
            const hoursAgo = Math.floor(minutesAgo / 60);
            setTimeAgo(`${hoursAgo}시간 전`);
        }
    };
      
    

    const removeImage = (indexToRemove) => {
        const updatedImages = selectedImages.filter((_, index) => index !== indexToRemove);
        setSelectedImages(updatedImages);
        setImageCount(updatedImages.length);
    };
    const fileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (selectedImages.length < 5) { // 이미지가 5개 미만일 때만 추가
                setSelectedImages([...selectedImages, file]);
                setImageCount(selectedImages.length + 1);
            }
        }
    };
    // 사진 클릭 시 Input file 엘리먼트를 클릭하는 함수
    const handleClick = () => {
        document.getElementById('file').click();
    };
    const changeImage = () => {
        if (currentImage === "./ggul2.png") {
            setCurrentImage("./ggul.png");
             // 다른 이미지로 변경.
        } else {
            setCurrentImage("./ggul2.png"); // 처음 이미지로 다시 변경.
           
        }
    };
    const [sale, setSale] = useState({      //상품 정보 초기화
        title: '',
        category: '',
        amount: '',
        place: '',
        content: '',
        ggull:'',
        fileurl:''
       

    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSale({ ...sale, [name]: value });
    };
   
    const isFormValid = () => { //유효성검사
        return (
            sale.title.trim() !== '' &&   //공백제거해서 비어있지 않으면
            sale.amount.trim() !== '' &&
            sale.place.trim() !== '' &&
            sale.category.trim() !==''&&
            sale.content.trim() !== ''&&
            sale.fileurl.trim()!==''&&
            sale.ggull.trim()!==''
            
            
        );
    };


    const submit = (e) => {
        if (!isFormValid()) {
            Swal.fire({
                icon: 'error',
                title: '잠깐만요...',
                text: '모든 항목을 작성해주세요!',
            });
            return; // 폼 제출을 막습니다.
        } 
        const formData = new FormData();
        formData.append("title", sale.title);
        formData.append("category",sale.category);
        formData.append("amount", sale.amount);
        formData.append("place", sale.place);
        formData.append("content", sale.content);
        formData.append("ggull", sale.ggull);
        formData.append("file",sale.fileurl);
        // formData.append("file", files);
        for (let image of selectedImages) {
            formData.append("file",image);
        }

        console.log(formData)
        axios.post('http://localhost:8090/salewrite', formData)
        .then(res=> {
            console.log(res);
            // 판매 정보가 성공적으로 제출되면 현재 시간과 비교하여 시간차를 계산
            const submissionTime = new Date(); // 현재 시간
            

            const saleSubmissionTime = new Date(); // 실제 서버로부터 받은 시간으로 설정 필요

            calculateTimeAgo(saleSubmissionTime);

            console.log(`판매 정보가 ${timeAgo}에 등록되었습니다.`);
            navigate(`/salelist`); // 이미지 URL 전달 // 등록된 판매 정보 페이지로 이동
        })
        .catch(err => {
            console.log(err);
        });
};
    return(
        <div className='main' style={{textAlign:'left',overflow:"scroll", height:"732px", overflowX:"hidden"}}> 
        <br/>
         <Link to="/salelist">
         <IoArrowBackOutline size="30" color="14C38E" />
         </Link>
         <span style={{color:"#14C38E",fontSize:"25px",marginLeft:"105px"}}><b>판매글작성</b></span> 
         <br/><br/>
         <div style={{backgroundColor:"#E9E9E9", width:"48px", height:"63px", textAlign:"center", paddingTop:"5px", position:"relative", cursor:"pointer"}}
             onClick={()=>document.getElementById("file").click()}>
        <div>
            <FaCamera size="30" color='gray' onClick={handleClick} />
            <div style={{ position: "absolute", textAlign: "center", width: "48px", paddingBottom: "5px", fontWeight: "bold" }}>
                {imageCount}/5
            </div>
            <Input name="file" type="file" id="file" accept="image/*" onChange={fileChange} hidden ref={fileInputRef} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start',marginLeft:"20px"}}>
        
        {selectedImages.map((image, index) => (
            <div key={index} style={{ margin: '5px', position: 'relative',marginTop:"-30px" }}>
                <a>
                <img
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index + 1}`}
                    style={{ width: '55px', height: '55px',marginLeft:"50px",display:"inline-block"}}
                
                />
                </a>
            <button
                onClick={() => removeImage(index)}
                style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: '#14C38E',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    padding: '0',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: 'white',
                }}
            >
                X
            </button>
        </div>
    ))}
</div>
        </div>
        </div>
        <div style={{marginBottom:"5px", fontSize:"18px", marginTop:"20px"}}>제목</div>
            <Input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    style={{ width: "385px", height: "40px", borderColor: "lightgray" }}
                    name="title"
                    value={sale.title}
                    onChange={handleInputChange}
            />
        
        <div style={{marginTop:"20px",display:"flex"}}>
            <div>
                <div style={{marginBottom:"5px", fontSize:"18px"}}>카테고리</div>
                <select
    style={{ width: "180px", height: "40px", textAlign: "center", borderRadius: "5px", float: "left", borderColor: "lightgray" }}
    name="category"
    value={sale.category}
    onChange={handleInputChange}
>
    <option value="" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;선택</option>
    <option value="mobile" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;모바일/태블릿</option>
                    <option value="pc" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;노트북/PC</option>
                    <option value="ticket" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;티켓/쿠폰</option>
                    <option value="clothes" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;의류</option>
                    <option value="free" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;나눔</option>
                    <option value="others" style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;기타</option>
                </select> 
            </div>
            <div style={{marginLeft:"25px"}}>
            <div style={{marginBottom:"5px", fontSize:"18px"}} onClick={changeImage} name="ggull" value={sale.ggull}>
                꿀페이
            </div>
            <img src={currentImage} style={{width:"50px"}} onClick={changeImage} alt="Ggul Image" />
            </div>
        </div>
        <div style={{marginBottom:"20px"}}/>
        <div style={{display:"flex"}}>
            <div>
                <div style={{marginBottom:"5px", fontSize:"18px"}}>가격</div>
                <div><Input type="text" placeholder="10,000원" style={{borderRadius:"5px",height:"40px" ,width:"180px",float:"left"}}name="amount" value={sale.amount} onChange={handleInputChange}></Input></div>
            </div>
            <div>
                <div style={{marginBottom:"5px", fontSize:"18px", marginLeft:"25px"}}>장소</div>
                <div><Input type="text" placeholder="A동 1층" style={{borderRadius:"5px",height:"40px",width:"180px",marginLeft:"25px"}} name="place" value={sale.place} onChange={handleInputChange}></Input></div>
            </div>   
        </div>
        <div>
            <div style={{fontSize:"18px", marginBottom:"10px", marginTop:"20px"}}>상세설명</div>
            <Input type='textarea'
             style={{width:"385px",height:"300px", resize:"none"}} name="content" value={sale.content} onChange={handleInputChange}
             placeholder='상세설명을 입력하세요
구매날짜, 하자 등 자세하게 작성할수록
구매자에게 편리합니다'></Input>
            
        </div>
        <br/> <p style={{textAlign:"center"}}><Button
                type="button"
                onClick={submit}
                style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    borderRadius: "10px",
                    width: "385px",
                    height: "50px",
                    backgroundColor: '#14C38E',
                    color: "white",
                    borderStyle: "none"
                }}
               
            >
                등록하기
            </Button></p>
        
        </div>



    )
}
export default SaleWrite;