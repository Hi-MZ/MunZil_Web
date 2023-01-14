import React, { useEffect, useState } from "react";
import customAxios from "../util/customAxios";
import * as S from "../style/PlayStyle";
import videos from "../assets/video/20230112_173318.mp4";
/**
 * onClick={() => {
          customAxios
            .get(`/feeds?sortType=${sortType}`)
            .then((e) => {
              console.log(e);
            })
            .catch((e) => console.log(e));
        }}
 */
const Play = () => {
  useEffect(() => {
    customAxios
      .get(`/feeds?sortType=${sortType}`)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => console.log(e));
  }, []);
  const [sortType, setSortType] = useState("LATEST");
  return (
    <>
      <S.TopNavbar>
        <S.LeftNavber>
          <S.UserImg></S.UserImg>
          <S.UserContent>배경민</S.UserContent>
        </S.LeftNavber>
        <S.UserRightContent>follow</S.UserRightContent>
      </S.TopNavbar>
      <S.BottomNavBar>
        <S.VideoDate>- 2023.01.14 -</S.VideoDate>
        <S.VideoInformation>파란 하늘 구경하기</S.VideoInformation>
        <S.PlayQuestionBox>1시간 전에 했던 일은?</S.PlayQuestionBox>
      </S.BottomNavBar>
      <S.Videobox autoPlay loop muted playsInline>
        <source src={videos} type="video/mp4" />
      </S.Videobox>
    </>
  );
};

export default Play;
