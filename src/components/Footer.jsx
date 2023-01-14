import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/FooterStyle";

const Footer = () => {
  const token = localStorage.getItem("Token");
  const navigate = useNavigate();
  const [isIn, setIsIn] = useState("");
  return (
    <S.Footer>
      <S.MainFooter>
        <S.Space>
          <S.FooterIcon
            value={isIn.InHome ? "InHome" : "Home"}
            onClick={() => {
              navigate("/");
            }}
          ></S.FooterIcon>
          <S.FooterIcon
            value={isIn.InAdd ? "InAdd" : "Add"}
            onClick={() => {
              navigate("/add");
            }}
          ></S.FooterIcon>
          <S.FooterIcon
            value={isIn.InPlay ? "InPlay" : "Play"}
            onClick={() => {
              navigate("/play");
            }}
          ></S.FooterIcon>
          <S.FooterIcon
            value={isIn.InUser ? "InUser" : "User"}
            onClick={() => {
              {
                token ? navigate("/info") : navigate("/auth");
              }
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
