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

  const onChangeVideo = (e) => {
  }

  const onSubmit = (e) => {
    e.preventDefault()

  };

  return (
    <>
      <Header></Header>
      <S.Title>영상 업로드</S.Title>
      <S.Question>오늘 질문?</S.Question>
      <form enctype="multipart/form-data" onSubmit={onSubmit}>
        <S.UploadDiv>
          <S.UploadBtn></S.UploadBtn>
          <input type="file" onChange={onChangeVideo}/>
        </S.UploadDiv>
        <S.Zemok>제목</S.Zemok>
        <S.VideoTitle
          name="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="영상 제목 작성"
        />
        <S.SubmitBtn type="submit">게시물 업로드</S.SubmitBtn>
      </form>
    </>
  );
};

export default UploadVideo;
