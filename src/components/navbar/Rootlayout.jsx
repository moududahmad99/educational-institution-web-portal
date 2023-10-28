import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer";
import LogoArea from "../logoArea/LogoArea";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <>
      <LogoArea />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
