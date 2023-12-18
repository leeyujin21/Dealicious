import React, { useRef, useState, useEffect } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import './img.css';
import './text.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Input, Button } from 'reactstrap';
import { FaCamera } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';



const SaleWrite = () => {
    const [writer, setwriter] = useState({ nickname: '', typename: '', fileurl: '', ggull: '', email: '', id: '' });
    const navigate = useNavigate();
    const [imageCount, setImageCount] = useState(0); // 상태 변수로 이미지 카운트를 관리.
    const [selectedImages, setSelectedImages] = useState([]); // 여러 이미지를 저장하는 배열
    const fileInputRef = useRef(null);
    const [timeAgo, setTimeAgo] = useState('');
    const [sale, setSale] = useState({      //상품 정보 초기화
        title: '',
        category: '',
        amount: '',
        place: '',
        content: '',
        ggull: '0',
        fileurl: ''
    });
    const [currentImage, setCurrentImage] = useState(sale.ggull === "1" ? "/ggul.png" : "/ggul2.png");
    const [fileurlList, setFileurlList] = useState([]);
    const { sect, num } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8090/saledetail/${sect}/${num}`)
            .then(res => {
                console.log(res.data);

                setwriter({
                    nickname: res.data.nickname,
                    typename: res.data.typename,
                    fileurl: res.data.profileimgurl,
                    email: res.data.email,
                    id: res.data.id,
                });

                setSale(res.data.sale);
                setFileurlList(res.data.sale.fileurl.split(',').map(url => url.trim()));
                setImageCount(res.data.sale.fileurl.split(',').length);
                console.log(fileurlList);
                setSale((prevSale) => ({ ...prevSale, fileurlList }));
            })
            .catch((err) => {
                console.log(err);
            });


    }, []);

    const calculateTimeAgo = (submissionTime) => {
        const currentTime = new Date(); // 현재 시간
        const timeDiffInMs = currentTime - submissionTime; // 현재 시간 - 등록 시간
        const minutesAgo = Math.floor(timeDiffInMs / (1000 * 60)); // 분 단위로 시간 차이 계산

        if (minutesAgo < 60) {
            setTimeAgo(`${minutesAgo}분 전`); // 현재 시간과 등록 시간의 차이를 분으로 표시
        } else {
            const hoursAgo = Math.floor(minutesAgo / 60);
            setTimeAgo(`${hoursAgo}시간 전`); // 1시간 이상인 경우 'n시간 전'으로 표시
        }
    };

    const removeImage = (indexToRemove) => {

        // fileurlList를 업데이트
        const updatedFileurlList = fileurlList.filter((_, index) => index !== indexToRemove);
        setImageCount(updatedFileurlList.length);
        setFileurlList(updatedFileurlList);
        setSale((prevSale) => ({ ...prevSale, fileurlList: updatedFileurlList }));

        console.log("지워줘")
        console.log(updatedFileurlList);
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

    const changeImage = () => {
        if (currentImage === "./ggul2.png") {
            setCurrentImage("./ggul.png");
            setSale({ ...sale, ggull: 1 });
        } else if (currentImage === './ggul.png') {
            setCurrentImage("./ggul2.png"); // 처음 이미지로 다시 변경.
            setSale({ ...sale, ggull: 0 });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;//e.target은 이벤트가 발생한 HTML 엘리먼트
        setSale({ ...sale, [name]: value });//name 속성은 해당 입력 필드의 이름을 나타내며, value는 그 입력 필드의 값
    };

    const submit = (e) => {
        const formData = new FormData();
        formData.append("title", sale.title);
        formData.append("category", sale.category);
        formData.append("amount", sale.amount);
        formData.append("place", sale.place);
        formData.append("content", sale.content);
        formData.append("ggull", sale.ggull);
        formData.append("file", sale.fileurl);
        for (let image of selectedImages) {
            formData.append("file", image);
        }

        console.log(formData)

        axios.post('http://localhost:8090/salemodify', formData)
            .then(res => {
                console.log(res);
                let saleNum = res.data;
                navigate(`/salelist/after-modify/${saleNum}`);
            })
            .catch(err => {
                console.log(err);
            });
        const submissionTime = new Date(); // 등록 시간
        calculateTimeAgo(submissionTime); // 함수 호출하여 시간 차이 계산
    }
    const deleteSale = (e) => {
        let saleNum = e.target.id;
        axios.delete(`http://localhost:8090/saledelete/${saleNum}`)
            .then(res => {
                let num = res.data;
                let resale = sale.filter(sale => sale.num !== num);
                setSale([...resale]);

            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "732px", overflowX: "hidden" }}>
            <br />
            <div style={{ display: 'flex', marginBottom: "20px" }}>
                <Link to="/salelist">
                    <IoArrowBackOutline size="30" color="14C38E" />
                </Link>
                <div
                    style={{
                        color: "#14C38E",
                        fontSize: "20px",
                        textAlign: "center",
                        width: "360px",
                        marginLeft: "-20px"
                    }}
                >
                    <b>판매글수정</b>
                </div>
            </div>
            <div style={{ backgroundColor: "#E9E9E9", width: "48px", height: "63px", textAlign: "center", paddingTop: "5px", position: "relative", cursor: "pointer" }}
            >
                <div style={{ display: "flex" }}>
                    <div onClick={() => document.getElementById("file").click()}>
                        <div style={{ width: "48px", textAlign: "center" }}>
                            <FaCamera size="30" color='gray' />
                        </div>
                        <div style={{ position: "absolute", textAlign: "center", width: "48px", paddingBottom: "5px", fontWeight: "bold" }}>
                            {imageCount}/5
                        </div>
                    </div>
                    <Input name="file" type="file" id="file" accept="image/*" onChange={fileChange} hidden ref={fileInputRef} />

                    <div style={{ display: "flex" }}>
                        {fileurlList.map((url, index) => (
                            <div key={index} style={{ position: "relative", marginRight: "10px" }}>
                                <img
                                    src={`http://localhost:8090/img/${url}`}
                                    alt={`${index}`}
                                    style={{ width: '45px', height: '45px', marginLeft: "10px" }}
                                />
                                <Button
                                    onClick={() => removeImage(index)}
                                    style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '-10px',
                                        backgroundColor: '#14C38E',
                                        borderRadius: '50px',
                                        border: "none",
                                        cursor: 'pointer',
                                        padding: '0',
                                        width: '20px',
                                        height: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                        color: 'white',
                                    }}
                                >
                                    X
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: "5px", fontSize: "18px", marginTop: "20px" }}>제목</div>
            <Input
                type="text"
                placeholder="제목을 입력해주세요"
                style={{ width: "385px", height: "40px", borderColor: "lightgray" }}
                name="title"
                value={sale.title}
                onChange={handleInputChange}
            />

            <div style={{ marginTop: "20px" }}>
                <div style={{ display: 'flex' }}>
                    <div>
                        <div style={{ marginBottom: "5px", fontSize: "18px" }}>카테고리</div>
                        <select
                            style={{ width: "180px", height: "40px", textAlign: "center", borderRadius: "5px", float: "left", borderColor: "lightgray" }}
                            name="category"
                            value={sale.category}
                            onChange={handleInputChange}>
                            <option value="" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;선택</option>
                            <option value="mobile" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;모바일/태블릿</option>
                            <option value="pc" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;노트북/PC</option>
                            <option value="ticket" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;티켓/쿠폰</option>
                            <option value="clothes" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;의류</option>
                            <option value="free" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;나눔</option>
                            <option value="others" style={{ textAlign: "left" }}>&nbsp;&nbsp;&nbsp;기타</option>
                        </select>
                    </div>
                    <div style={{ marginLeft: "25px" }}>
                        <div style={{ marginBottom: "10px", fontSize: "18px" }} name="ggull" value={sale.ggull}>
                            꿀페이
                        </div>
                        <img src={currentImage} style={{ width: "50px" }} onClick={changeImage} alt="Ggul Image" />
                    </div>
                </div>
                <div style={{ marginBottom: "20px" }} />
                <div style={{ display: "flex" }}>
                    <div>
                        <div style={{ marginBottom: "5px", fontSize: "18px" }}>가격</div>
                        <div><Input type="text" placeholder="10,000원" style={{ borderRadius: "5px", height: "40px", width: "180px", float: "left" }} name="amount" value={sale.amount} onChange={handleInputChange}></Input></div>
                    </div>
                    <div>
                        <div style={{ marginBottom: "5px", fontSize: "18px", marginLeft: "25px" }}>장소</div>
                        <div><Input type="text" placeholder="A동 1층" style={{ borderRadius: "5px", height: "40px", width: "180px", marginLeft: "25px" }} name="place" value={sale.place} onChange={handleInputChange}></Input></div>
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: "18px", marginBottom: "10px", marginTop: "20px" }}>상세설명</div>
                    <Input type='textarea'
                        style={{ width: "385px", height: "300px", resize: "none" }} name="content" value={sale.content} onChange={handleInputChange}
                        placeholder='상세설명을 입력하세요
구매날짜, 하자 등 자세하게 작성할수록
구매자에게 편리합니다'></Input>

                </div>
                <br />
                <div style={{ display: "flex", textAlign: 'center' }}>
                    <div style={{ width: "180px", textAlign: "right" }}>
                        <Button
                            onClick={submit}
                            style={{
                                textAlign: "center",
                                width: "120px",
                                height: "45px",
                                backgroundColor: '#14C38E',
                                color: "white",
                                borderStyle: "none"
                            }}>
                            수정하기
                        </Button>
                    </div>
                    <div style={{ width: "180px", textAlign: "left" }}>
                        <Button id={sale.num} onclick={deleteSale} style={{
                            width: "120px", marginLeft: "5px",
                            height: "45px"
                        }}>삭제하기</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SaleWrite;