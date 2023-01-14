import React, { useEffect, useState } from "react";
import customAxios from "../util/customAxios";
import * as S from "../style/PlayStyle";
import videos from "../assets/video/video3.mp4";
// import videos2 from "../assets/video/20230107_132626.mp4";
// import videos3 from "../assets/video/20230112_180607.mp4";
// import videos4 from "../assets/video/KakaoTalk_Video_2023-01-15-07-18-46.mp4";
// import videos5 from "../assets/video/KakaoTalk_Video_2023-01-15-07-18-51.mp4";
// import videos6 from "../assets/video/KakaoTalk_Video_2023-01-15-07-18-36.mp4";
// import videos7 from "../assets/video/20230103_182610.mp4";
// import videos8 from "../assets/video/20230112_173318.mp4";
// import videos9 from "../assets/video/20230113_213718.mp4";
// import videos10 from "../assets/video/KakaoTalk_Video_2023-01-15-06-56-09.mp4";
// import videos11 from "../assets/video/KakaoTalk_Video_2023-01-15-03-33-41.mp4";
// import videos12 from "../assets/video/KakaoTalk_Video_2023-01-15-06-56-01.mp4";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      location.state = 5;
    }

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
        {location.state ? (
          <source
            src={require(`../assets/video/video${location.state}.mp4`)}
            type="video/mp4"
          />
        ) : (
          <source src={videos} />
        )}
      </S.Videobox>
    </>
  );
};

export default Play;
