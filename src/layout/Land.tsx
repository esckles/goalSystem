import LandingPageScreen from "@/pages/screen/LandingPageScreen";
import Header from "@/static/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Land = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>

      <Outlet />
      <LandingPageScreen />
    </div>
  );
};

export default Land;
