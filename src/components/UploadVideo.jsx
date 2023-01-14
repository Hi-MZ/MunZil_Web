import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import * as S from "../style/UploadVideoStyle";
import Header from "./Header";
import customAxios from "../util/customAxios";

//닉네임(또는 아이디), 오늘 질문 받기
const UploadVideo = ({ id, question }) => {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const nowDate = moment().format("YYYY-MM-DD");
  const nowTime = moment().format("YYYY-MM-DD hh:mm:ss");
  var formdata = new FormData();

  const onChangeVideo = (e) => {
    setVideo(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("token"));
    if (video) {
      formdata.append("images", video);
    }
    formdata.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            content: title,
          }),
        ],
        {
          type: "application/json",
        }
      )
    );

    for (var entries of formdata.values()) console.log(entries);

    customAxios
      .post("/feeds", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("r", error);
      });
  };

  return (
    <>
      <Header></Header>
      <S.Title>영상 업로드</S.Title>
      <S.Question>1시간 전에 했던 일은?</S.Question>
      <form onSubmit={onSubmit}>
        <S.UploadDiv>
          <S.UploadBtn></S.UploadBtn>
          <input type="file" onChange={onChangeVideo} />
        </S.UploadDiv>
        <S.Zemok>제목</S.Zemok>
        <S.VideoTitle
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="영상 제목 작성"
        />
        <S.SubmitBtn type="submit">게시물 업로드</S.SubmitBtn>
      </form>
    </>
  );
};

export default UploadVideo;
