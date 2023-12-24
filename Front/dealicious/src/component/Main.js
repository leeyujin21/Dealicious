import { FaFire } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { GiLaptop } from "react-icons/gi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
const Main = () => {
  const user = useSelector(state => state.persistedReducer.user);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:8090/hotsalelist`)
      .then(res => {
        console.log(res.data);
        if(res.data.length<=3) {
          setFirstHalf(res.data);
        } else {
          setFirstHalf(res.data.slice(0, 3));
          setSecondHalf(res.data.slice(3));
        }
      })
      .catch(err => {
        console.log(err);
      })

  }, []);
  return (
    <div className='main' style={{ overflow: "scroll", height: "632px", overflowX: "hidden" }}>
      <Link to="/about"><img src="..\dealmain.png" style={{ width: "385px" }}></img></Link>
      <br /><br />
      <div style={{ textAlign: "left", fontSize: "20px", fontWeight: "bold" }}>
        지금 <a style={{ color: "#72DBBB" }}>{user.typename}</a>에서<br />
        가장 인기있는 상품&nbsp;<FaFire size='20' color='F4900C' />
      </div>
      <br />
      <div style={{ display: "flex", marginBottom: "10px" }}>
      {firstHalf.map((item, index) => 
      <Link to={"/saledetail/only-detail/" + item.num} style={{ textDecoration: "none", color: "black" }}>
        <div key={index} style={{ marginRight: "10px" }}>
          <img src={`http://localhost:8090/img/${item.fileurl.split(',')[0]}`} style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "13px" }}>{item.title.length > 11 ? item.title.slice(0, 11)+`...`:item.title}</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>{item.amount}원</div>
          </div>
        </div>
        </Link>
      </div>
      <div style={{ display: "flex" }}>
      {secondHalf.map((item, index) => 
      <Link to={"/saledetail/only-detail/" + item.num} style={{ textDecoration: "none", color: "black" }}>
        <div key={index} style={{ marginRight: "10px" }}>
          <img src={`http://localhost:8090/img/${item.fileurl.split(',')[0]}`} style={{
            width: "120px",
            height: "120px",
            borderRadius: "5px"
          }}>
          </img>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "13px" }}>{item.title.length > 11 ? item.title.slice(0, 11)+`...`:item.title}</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>{item.amount}원</div>
          </div>
        </div>
        </Link>
      )}
      </div>
      <br /><br />


      <div style={{ textAlign: "left", fontSize: "20px", fontWeight: "bold", display: "flex" }}>
        <div style={{ height: "30px" }}>카테고리&nbsp;&nbsp;</div>

        <Link to="/salelist" style={{ fontSize: "15px", color: "gray", height: "30px", marginTop: "3px" }}>전체보기
          <MdArrowForward size="15" style={{ height: "30px", marginBottom: "2.5px" }} />
        </Link>

      </div>
      <br />
      <div style={{ display: "flex", width: "385px" }}>
        <Link to="/salelist/mobile" style={{ color: "black", width: "33%" }}>
          <FaMobileAlt size="50" color="#E25D5D" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>모바일/태블릿</div>
        </Link>
        <Link to="/salelist/clothes" style={{ color: "black", width: "33%" }}>
          <IoShirt size="50" color="#F39238" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>의류</div>
        </Link>

        <Link to="/salelist/free" style={{ color: "black", width: "33%" }}>
          <BiSolidDonateHeart size="50" color="#F3E138" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>나눔</div>
        </Link>

      </div>
      <br />
      <div style={{ display: "flex", width: "385px", paddingBottom: "10px" }}>
        <Link to="/salelist/ticket" style={{ color: "black", width: "33%" }}>
          <IoTicketSharp size="50" color="#3FCC80" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>티켓/쿠폰</div>
        </Link>
        <Link to="/salelist/pc" style={{ color: "black", width: "33%" }}>
          <GiLaptop size="50" color="#3FA2CC" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>노트북/PC</div>
        </Link>
        <Link to="/salelist/others" style={{ color: "black", width: "33%" }}>
          <MdOutlineMoreHoriz size="50" color="gray" style={{ marginBottom: "5px" }} /><br />
          <div style={{ color: "gray" }}>기타</div>
        </Link>

      </div>
    </div>


  );
}

export default Main;
