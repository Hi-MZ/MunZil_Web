import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 onClick={() => navigate("/")}>title</h2>
      <p onClick={() => navigate("/auth")}>로그인</p>
    </>
  );
};

export default Header;
