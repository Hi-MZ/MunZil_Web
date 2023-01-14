import React, { useState } from "react";

const SignUpBtn = ({ idValue, passwordValue }) => {
  alert(idValue + "\n" + passwordValue);
};

const SignIn = () => {
  const [nickname, setNickname] = useState("");
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordChValue, setPasswordChValue] = useState("");
  return (
    <>
      <h2>회원가입</h2>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
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
      <input
        type="password"
        placeholder="비밀번호확인"
        value={passwordChValue}
        onChange={(e) => setPasswordChValue(e.target.value)}
      />
      <button onClick={() => SignUpBtn({ idValue, passwordValue })}>
        회원가입
      </button>
    </>
  );
};

export default SignIn;
