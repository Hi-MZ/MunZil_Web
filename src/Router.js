import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import Myinfo from "./layout/Myinfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Footer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/info" element={<Myinfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
