import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Detail from "../../pages/Detail";
import Home from "../../pages/Home";
import Page404 from "../../pages/Page404";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
