import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Header from "../components/Header";
import { footerState } from "../store/atom";
const Myinfo = () => {
  const [nickname] = useState("");
  const setFooter = useSetRecoilState(footerState);
  useEffect(() => {
    let a = { InHome: false, InAdd: false, InPlay: false, InUser: false };
    setFooter({ ...a, InUser: true });
  }, []);
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
