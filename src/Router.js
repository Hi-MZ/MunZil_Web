import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import UploadVideo from "./components/UploadVideo";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import Myinfo from "./layout/Myinfo";
import Play from "./layout/Play";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/info" element={<Myinfo />} />
        <Route path="/add" element={<UploadVideo />} />
        <Route path={"/play/"} element={<Play />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
