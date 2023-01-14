import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import Myinfo from "./layout/Myinfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/info" element={<Myinfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
