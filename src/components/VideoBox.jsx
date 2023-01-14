import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/VideoBoxStyle";

const VideoBox = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("/play", { state: props.id })}>
        <S.Video autoPlay loop muted playsInline>
          <source src={props.videos} type="video/mp4" />
        </S.Video>
      </div>
    </>
  );
};

export default VideoBox;
