import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/SignInStyle";
const Url = "http://52.79.255.1:8080";

const SignUpBtn = ({ idValue, passwordValue, nickname }) => {
  axios
    .post(Url + "/users", {
      account_id: idValue,
      password: passwordValue,
      nickname: nickname,
    })
    .then((e) => {
      localStorage.setItem("Token", e.data.access_token);
    });
};

const Check = ({ idValue, passwordValue, passwordChValue, nickname }) => {
  if (passwordChValue != passwordValue) {
    alert("비밀번호가 일치하지 않습니다!");
  } else {
    SignUpBtn({ idValue, passwordValue, nickname });
  }
};

const SignIn = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordChValue, setPasswordChValue] = useState("");
  return (
    <>
      <S.SignUpNav>회원가입</S.SignUpNav>

      <S.CusInput
        type="text"
        placeholder="아이디"
        value={idValue}
        onChange={(e) => setIdValue(e.target.value)}
      />
      <S.CusInput
        type="password"
        placeholder="비밀번호"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <S.CusInput
        type="password"
        placeholder="비밀번호확인"
        value={passwordChValue}
        onChange={(e) => setPasswordChValue(e.target.value)}
      />
      <S.CusInput
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <S.SignInUpBtn
        onClick={() => {
          if (
            idValue == "" ||
            passwordValue == "" ||
            passwordChValue == "" ||
            nickname == ""
          ) {
            alert(
              "정보를 제대로 입력해주세요.\n(비밀번호 8지리이상, 숫자포함)"
            );
          } else {
            Check({ idValue, passwordValue, passwordChValue, nickname });
            if (localStorage.getItem("Token") != null) {
              navigate("/");
            } else {
              alert(
                "정보를 제대로 입력해주세요.\n(비밀번호 8지리이상, 숫자포함)"
              );
            }
          }
        }}
      >
        회원가입
      </S.SignInUpBtn>
    </>
  );
};

export default SignIn;
