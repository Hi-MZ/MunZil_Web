import React, { useEffect } from "react";
import UploadVideo from "../components/UploadVideo";
import VideoBox from "../components/VideoBox";
import * as S from "../style/UploadVideoStyle";
import { VideoNavBox, DivBox, TextP } from "../style/VideoBoxStyle";
import Header from "../components/Header";
import { footerState } from "../store/atom";
import { useSetRecoilState } from "recoil";

const Main = () => {
  const setFooter = useSetRecoilState(footerState);
  useEffect(() => {
    let a = { InHome: false, InAdd: false, InPlay: false, InUser: false };
    setFooter({ ...a, InHome: true });
  }, []);
  return (
    <>
      <Header></Header>
      <DivBox level={4}></DivBox>
      <S.Question>오늘의 질문?</S.Question>
      <DivBox level={3}></DivBox>
      <TextP>팔로잉</TextP>
      <DivBox level={0.5}></DivBox>
      <VideoNavBox>
        <VideoBox></VideoBox>
        <VideoBox></VideoBox>
      </VideoNavBox>
      <DivBox level={2}></DivBox>
      <TextP>추천 영상</TextP>
      <DivBox level={0.5}></DivBox>
      <VideoNavBox>
        <VideoBox></VideoBox>
        <VideoBox></VideoBox>
        <VideoBox></VideoBox>
      </VideoNavBox>
    </>
  );
};

export default Main;
