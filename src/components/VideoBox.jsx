import React, { useEffect, useState } from "react";
import * as S from "../style/VideoBoxStyle";

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
        <S.Heart>
          <S.HeartNumver>
            <S.HeartImage
              onClick={() => setHeartCh(!heartCh)}
              isCh={heartCh}
            ></S.HeartImage>
            {a}
          </S.HeartNumver>
        </S.Heart>
        <S.Video></S.Video>
      </div>
    </>
  );
};

export default VideoBox;
