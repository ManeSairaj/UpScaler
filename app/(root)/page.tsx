import { UserButton } from "@clerk/nextjs";
import React from "react";
import "../globals.css";

const Home = () => {
  return (
    <div>
      <p>Home</p>

      <Widget />
    </div>
  );
};

export default Home;

function Widget() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="spinner1 border-[#606C80] mr-8"></div>

        <div className="spinner2 mr-8"></div>

        <div className="spinner1"></div>
      </div>
    </>
  );
}
