import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/FooterStyle";

const Footer = () => {
  const navigate = useNavigate();
  const [isIn, setIsIn] = useState({
    InHome: true,
    InAdd: false,
    InPlay: false,
    InUser: false,
  });
  return (
    <S.Footer>
      <S.MainFooter>
        <S.Space>
          <S.FooterIcon
            value={isIn.InHome ? "InHome" : "Home"}
            onClick={() => {
              navigate("/");
              let a = {
                InHome: false,
                InAdd: false,
                InPlay: false,
                InUser: false,
              };
              setIsIn({ ...a, InHome: true });
            }}
          ></S.FooterIcon>
          <S.FooterIcon
            value={isIn.InAdd ? "InAdd" : "Add"}
            onClick={() => {
              navigate("/add");
              let a = {
                InHome: false,
                InAdd: false,
                InPlay: false,
                InUser: false,
              };
              setIsIn({ ...a, InAdd: true });
            }}
          ></S.FooterIcon>
          <S.FooterIcon
            value={isIn.InPlay ? "InPlay" : "Play"}
            onClick={() => {
              navigate("/play");
              let a = {
                InHome: false,
                InAdd: false,
                InPlay: false,
                InUser: false,
              };
              setIsIn({ ...a, InPlay: true });
            }}
          ></S.FooterIcon>
          <S.FooterIcon
            value={isIn.InUser ? "InUser" : "User"}
            onClick={() => {
              navigate("/auth");
              let a = {
                InHome: false,
                InAdd: false,
                InPlay: false,
                InUser: false,
              };
              setIsIn({ ...a, InUser: true });
            }}
          ></S.FooterIcon>
          {/* <h2 onClick={() => navigate("/")}>title</h2>
          {isLoggin ? (
            <p onClick={() => navigate("/info")}>내 정보</p>
          ) : (
            <p onClick={() => navigate("/auth")}>로그인</p>
          )} */}
        </S.Space>
      </S.MainFooter>
    </S.Footer>
  );
};

export default Footer;
