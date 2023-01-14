import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/SignInStyle";

const Url = "http://52.79.255.1:8080";

const SignInBtn = ({ idValue, passwordValue }) => {
  axios
    .post(Url + "/users/token", {
      account_id: idValue,
      password: passwordValue,
    })
    .then((e) => {
      localStorage.setItem("Token", e.data.access_token);
    });
};

const SignIn = () => {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <>
      <S.LoginLogoNav></S.LoginLogoNav>
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
      <S.SignInUpBtn
        onClick={() => {
          if (idValue == "" || passwordValue == "") {
            alert("정보를 다시 입력해주세요.");
          } else {
            SignInBtn({ idValue, passwordValue });
          }
          if (localStorage.getItem("Token")) {
            navigate("/");
          }
        }}
      >
        로그안
      </S.SignInUpBtn>
    </>
  );
};

export default SignIn;
