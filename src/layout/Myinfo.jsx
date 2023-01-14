import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import * as S from "../style/MyinfoStyle";
import VideoBox from "../components/VideoBox";
import * as Fo from "../components/Follow";
import customAxios from "../util/customAxios";
import videos1 from "../assets/video/20230114_220219.mp4";
import videos2 from "../assets/video/20230107_132626.mp4";
import videos3 from "../assets/video/20230112_180607.mp4";
import videos4 from "../assets/video/KakaoTalk_Video_2023-01-15-07-18-46.mp4";
import videos5 from "../assets/video/KakaoTalk_Video_2023-01-15-07-18-51.mp4";
import videos6 from "../assets/video/KakaoTalk_Video_2023-01-15-07-18-36.mp4";

const Myinfo = () => {
  const [nickname] = useState("");

  const getUser = async () => {
    const user = await customAxios.get("/users");

    Fo.CreateFollower(user.data.user_id + 1); //500 error
    console.log(Fo.LookFollowing(user.data.user_id));
    console.log(Fo.LookFollower(user.data.user_id));
  };

  return (
    <>
      <Header></Header>
      <S.Align>
        <S.Title onClick={getUser}>프로필</S.Title>
        <S.ChangeBtn>수정</S.ChangeBtn>
      </S.Align>
      <S.ProfileSum>
        <S.Profile></S.Profile>
        <S.NF>
          <S.Nic>{nickname}님</S.Nic>
          <nav>
            <span>
              <S.Follow> 팔로워 </S.Follow>
              <S.Follow> 0 </S.Follow>
            </span>
            <span>
              <S.Follow> 팔로우 </S.Follow>
              <S.Follow> 3 </S.Follow>
            </span>
          </nav>
        </S.NF>
      </S.ProfileSum>
      <hr />
      <p>내 동영상</p>
      <div>
        <S.Align>
          <VideoBox videos={videos1} />
          <VideoBox videos={videos4} />
          <VideoBox videos={videos5} />
        </S.Align>
        <S.Align>
          <VideoBox videos={videos3} />
          <VideoBox videos={videos6} />
          <VideoBox videos={videos2} />
        </S.Align>
      </div>
    </>
  );
};

export default Myinfo;
