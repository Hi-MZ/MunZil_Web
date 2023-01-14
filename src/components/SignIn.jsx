import React, { useState } from "react";

const SignInBtn = ({ idValue, passwordValue }) => {
  alert(idValue + "\n" + passwordValue);
};

const SignIn = () => {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <>
      <h2>로그인</h2>
      <input
        type="text"
        placeholder="아이디"
        value={idValue}
        onChange={(e) => setIdValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button onClick={() => SignInBtn({ idValue, passwordValue })}>
        로그안
      </button>
    </>
  );
};

export default SignIn;
