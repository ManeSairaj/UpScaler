"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect } from "react";
import "../globals.css";
import { usePathname } from "next/navigation";

const Home = () => {
  const pathname = usePathname();
  console.log(pathname);

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
