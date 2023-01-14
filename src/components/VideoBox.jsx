import React, { useEffect, useState } from "react";
import * as S from "../style/VideoBoxStyle";
import customAxios from "../util/customAxios";

const VideoBox = () => {
  const [a, b] = useState(1 + 1);
  const [heartCh, setHeartCh] = useState(false);
  useEffect(() => {
    if (heartCh) {
      b(a + 1);
    } else {
      b(a - 1);
    }
  }, [heartCh]);

  return (
    <>
      <div>
        <S.Video></S.Video>
      </div>
    </>
  );
};

export default VideoBox;
