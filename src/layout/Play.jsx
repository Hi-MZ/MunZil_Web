import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Header from "../components/Header";
import { footerState } from "../store/atom";

const Play = () => {
  const setFooter = useSetRecoilState(footerState);
  useEffect(() => {
    let a = { InHome: false, InAdd: false, InPlay: false, InUser: false };
    setFooter({ ...a, InPlay: true });
  }, []);
  return (
    <>
      <Header></Header>
      <div>Play</div>
    </>
  );
};

export default Play;
