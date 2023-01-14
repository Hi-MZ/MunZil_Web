import React, { useState } from "react";
import Header from "../components/Header";

const Myinfo = () => {
  const [nickname] = useState("");
  return (
    <>
      <Header></Header>
      <div>사진</div>
      <p>{nickname}</p>
      <nav>
        <span>
          <span>팔로워</span>
          <span>0</span>
        </span>
        <span>
          <span>팔로우</span>
          <span>3</span>
        </span>
      </nav>
      <p>내 동영상</p>
      <div></div>
    </>
  );
};

export default Myinfo;
