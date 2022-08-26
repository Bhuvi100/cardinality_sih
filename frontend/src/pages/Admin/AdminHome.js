import React from "react";
import NavBar from "../../components/Navbar";
import ChartLine from "../../components/ChartLine";
import { ChartBar } from "../../components/ChartBar";
import { ChartArea } from "../../components/ChartArea";

export default function AdminHome() {
  return (
    <div className="">
      <NavBar currentMenu="Home" />
      <div className="flex space-x-4 justify-between w-full pr-10 mt-10">
        <div className="w-1/2 bg-white rounded-lg h-60 bg-opacity-70 shadow-xl">
          <ChartLine/>
        </div>
        <div className="w-1/2 bg-white rounded-lg h-60 bg-opacity-70 shadow-xl">
          <ChartBar/>
        </div>
      </div>
      <div className="mt-8 mr-10 bg-white rounded-lg h-80 bg-opacity-70 shadow-xl">
      <ChartArea/>
      </div>
    </div>
  );
}
