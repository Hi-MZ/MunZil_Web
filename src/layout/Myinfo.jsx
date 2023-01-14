import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import * as S from "../style/MyinfoStyle";
import VideoBox from "../components/VideoBox"

const Myinfo = () => {
  const [nickname] = useState("");
  return (
    <>
      <Header></Header>
      <S.Align>
        <S.Title>프로필</S.Title>
        <S.ChangeBtn>수정</S.ChangeBtn>
      </S.Align>
      <S.ProfileSum>
        <S.Profile></S.Profile>
        <S.NF>
        <S.Nic>{nickname}님</S.Nic>
        <nav>
          <span>
            <S.Follow> 팔로워 </S.Follow>
            <S.Follow> 0  </S.Follow>
          </span>
          <span>
            <S.Follow> 팔로우 </S.Follow>
            <S.Follow> 3 </S.Follow>
          </span>
        </nav>
        </S.NF>
      </S.ProfileSum>
      <hr/>
      <p>내 동영상</p>
      <div>
        <S.Align>
          <VideoBox/>
          <VideoBox/>
          <VideoBox/>
        </S.Align>
        <S.Align>
          <VideoBox/>
          <VideoBox/>
          <VideoBox/>
        </S.Align>
      </div>
    </>
  );
};

export default Myinfo;
