import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
const Router = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
