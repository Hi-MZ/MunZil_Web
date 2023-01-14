import React, { useEffect, useState } from "react";
import * as S from "../style/VideoBoxStyle";

const VideoBox = (props) => {
  return (
    <>
      <div>
        <S.Video autoPlay loop muted playsInline>
          <source src={props.videos} type="video/mp4" />
        </S.Video>
      </div>
    </>
  );
};

export default VideoBox;
