import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggin, setIsLoggin] = useState(true);
  return (
    <>
      <h2 onClick={() => navigate("/")}>title</h2>
      {isLoggin ? (
        <p onClick={() => navigate("/info")}>내 정보</p>
      ) : (
        <p onClick={() => navigate("/auth")}>로그인</p>
      )}
    </>
  );
};

export default Header;
