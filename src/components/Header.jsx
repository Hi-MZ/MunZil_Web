import React from "react";
import * as S from "../style/HeaderStyle";

const Header = () => {
  return (
    <>
      <button
        onClick={() => {
          console.log(localStorage.getItem("Token"));
        }}
      >
        ddd
      </button>
      <S.MunZilLogo></S.MunZilLogo>
    </>
  );
};

export default Header;
