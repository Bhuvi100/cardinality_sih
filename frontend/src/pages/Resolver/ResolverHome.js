import React from "react";
import { ChartArea } from "../../components/ChartArea";
import { ChartBar } from "../../components/ChartBar";
import ChartLine from "../../components/ChartLine";
import NavBar from "../../components/Navbar";

export default function ResolverHome() {
  return (
    <div className="">
      <NavBar currentMenu="Home" />
      <div className="flex flex-col md:flex-row md:space-x-4 justify-between w-full md:pr-10 mt-5 md:mt-10">
        <div className="md:w-1/2 mb-2 bg-white rounded-lg h-60 bg-opacity-70 shadow-xl">
          <ChartBar/>
        </div>
        <div className="md:w-1/2 mb-2 bg-white rounded-lg h-60 bg-opacity-70 shadow-xl">
          <ChartLine/>
        </div>
      </div>
      <div className="md:mt-8 md:mr-10  bg-white rounded-lg h-80 bg-opacity-70 shadow-xl">
      <ChartArea/>
      </div>
    </div>
  );
}
