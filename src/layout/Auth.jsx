import React, { useState, useEffect } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useSetRecoilState } from "recoil";
import { footerState } from "../store/atom";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const setFooter = useSetRecoilState(footerState);
  useEffect(() => {
    let a = { InHome: false, InAdd: false, InPlay: false, InUser: false };
    setFooter({ ...a, InUser: true });
  }, []);
  return (
    <>
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
