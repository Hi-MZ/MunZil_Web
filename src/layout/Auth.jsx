import React, { useState } from "react";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <>
      <Header></Header>
      <div>{isSignIn ? <SignIn /> : <SignUp />}</div>
      {isSignIn ? (
        <button onClick={() => setIsSignIn(!isSignIn)}>회원가입하기</button>
      ) : (
        <button onClick={() => setIsSignIn(!isSignIn)}>로그인 하기</button>
      )}
    </>
  );
};

export default Auth;
