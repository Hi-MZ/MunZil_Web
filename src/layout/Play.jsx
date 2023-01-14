import React, { useEffect, useState } from "react";
import customAxios from "../util/customAxios";
import * as S from "../style/PlayStyle";
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
  const [sortType, setSortType] = useState("POPULAR");
  return (
    <>
      <S.TopNavbar>
        <S.LeftNavber>
          <span>name</span>
          <button
            onClick={() => {
              customAxios
                .get(`/feeds?sortType=${sortType}`)
                .then((e) => {
                  console.log(e);
                })
                .catch((e) => console.log(e));
            }}
          >
            dd
          </button>
        </S.LeftNavber>
        <S.RightNavbar>
          <span>follow</span>
        </S.RightNavbar>
      </S.TopNavbar>
      <S.Videobox src="">
        <source type="video/mp4" />
      </S.Videobox>
    </>
  );
};

export default Play;
