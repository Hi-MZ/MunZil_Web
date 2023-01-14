import React, { useEffect } from "react";
import UploadVideo from "../components/UploadVideo";
import VideoBox from "../components/VideoBox";
import * as S from "../style/UploadVideoStyle";
import { VideoNavBox, DivBox, TextP } from "../style/VideoBoxStyle";
import Header from "../components/Header";
import videos1 from "../assets/video/20230103_182610.mp4";
import videos2 from "../assets/video/20230112_173318.mp4";
import videos3 from "../assets/video/20230113_213718.mp4";
import videos4 from "../assets/video/KakaoTalk_Video_2023-01-15-06-56-09.mp4";
import videos5 from "../assets/video/KakaoTalk_Video_2023-01-15-03-33-41.mp4";
import videos6 from "../assets/video/KakaoTalk_Video_2023-01-15-06-56-01.mp4";

const Main = () => {
  return (
    <>
      <Header />

      <DivBox level={4}></DivBox>
      <S.Question>1시간 전에 했던 일은?</S.Question>
      <DivBox level={3}></DivBox>
      <TextP>팔로잉</TextP>
      <DivBox level={0.5}></DivBox>
      <VideoNavBox>
        <VideoBox videos={videos5}></VideoBox>
        <VideoBox videos={videos6}></VideoBox>
        <VideoBox videos={videos2}></VideoBox>
      </VideoNavBox>
      <DivBox level={2}></DivBox>
      <TextP>추천 영상</TextP>
      <DivBox level={0.5}></DivBox>
      <VideoNavBox>
        <VideoBox videos={videos3}></VideoBox>
        <VideoBox videos={videos1}></VideoBox>
        <VideoBox videos={videos4}></VideoBox>
      </VideoNavBox>
    </>
  );
};

export default Main;
