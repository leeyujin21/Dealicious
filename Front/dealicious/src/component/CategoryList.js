import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
function CategoryList() {

  return (
    <div className='main' style={{ textAlign: 'left', overflow: "scroll", height: "742px", overflowX: "hidden", paddingLeft: "20px", paddingRight: "20px", paddingTop: "0px" }}>
      <Link to="/salewrite" style={{ marginLeft: "330px", marginTop: "650px", textAlign: "right", position: "absolute", backgroundColor:"white", width:"43px", height:"43px" }}>
        <FiPlusCircle size="50" color="#14C38E" />
      </Link>
      <div style={{ display: "flex", marginTop:"10px" }}>
        <Link to="/"><IoArrowBackOutline size="30" color="14C38E" style={{ height: "50px" }} /></Link>
        <h3 style={{ color: "#14C38E", fontSize: "25px", marginLeft: "20px", marginTop: "10px" }}><b>기타</b></h3>
      </div>

      <Link to="/saledetail" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./1.png" /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>커피 디스펜서</a><br />
                <div style={{display:"flex"}}>
                  <div style={{ fontSize: "15px", width:"180px" }}>A동 2층</div>
                  <div style={{textAlign:"right", width:"30px"}}><img src='..\ggul.png' style={{width:"34px", height:"19px"}}/></div><br />
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "180px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>12분 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./1.png" /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>커피 디스펜서</a><br />
                <a style={{ fontSize: "15px" }}>A동 2층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "180px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>12분 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./1.png" /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>커피 디스펜서</a><br />
                <a style={{ fontSize: "15px" }}>A동 2층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "180px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>12분 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./1.png" /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>커피 디스펜서</a><br />
                <a style={{ fontSize: "15px" }}>A동 2층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "180px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>12분 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./1.png" /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>커피 디스펜서</a><br />
                <a style={{ fontSize: "15px" }}>A동 2층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "180px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>12분 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./1.png" /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>커피 디스펜서</a><br />
                <a style={{ fontSize: "15px" }}>A동 2층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "180px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>12분 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/saledetail" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray", height: "124px" }}>
          <div style={{ marginTop: "15px" }}>
            <div style={{ height: "35px", display: "flex" }} >
              <div style={{ width: "130px", height: "87px" }}><img src="./1.png" /></div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <a style={{ fontSize: "18px" }}>커피 디스펜서</a><br />
                <a style={{ fontSize: "15px" }}>A동 2층</a><br />
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left", width: "180px" }}>60,000원</div>
                  <div style={{ textAlign: "right", color: "gray" }}>12분 전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

    </div>

  )
}
export default CategoryList;