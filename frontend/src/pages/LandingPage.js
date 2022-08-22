import landing from "../assets/landing_page.png";
import logo from "../assets/logo.png";
import Login from "./login";
import { useState } from "react";
export default function Landing(){
  const [login, setLogin]=useState(0);
  if(login==1)
  {return <Login/>}
    return(
        <div className="h-screen mx-auto bg-gradient-to-r from-blue-500 to-sky-400" >
            {/* <img className="bg-fixed object-cover h-full w-full" src={landing} alt="React Logo" /> */}
            <div class="leading-normal tracking-normal text-white gradient" >
    
    <nav id="header" class="fixed w-full z-30 top-0 text-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div class="pl-4 flex flex-row items-center">
        <img class="md:w-16 md:mr-3" src={logo} />
          <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            Shikaayat Samarthan
          </a>
        </div>
        <div class="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a class="inline-block text-black no-underline hover:text-white hover:font-bold py-2 px-4" href="#">Contact</a>
            </li>
          </ul>
          <button
            
            class="mr-2 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-3 px-5 shadow-lg opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>

    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
 
        <div class="flex flex-col md:w-2/5 justify-center items-start text-center md:text-left">
          <div className="md:ml-16 ">
            <p class="uppercase tracking-loose w-full"></p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
          AICTE Grievance Readdressal Platform
          </h1>
          <p class="leading-normal text-2xl mt-4">
          Register as
          </p>
          <div className="flex flex-row gap-2">
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={()=>setLogin(1)}>
            <a href="/register">General User</a>
          </button>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={()=>setLogin(1)}>
            <a href="/SPOCregister">Institute SPOC</a>
          </button>
          </div>
          </div>
        </div>
        
        <div class="md:w-3/5">
          <img class="logpic md:w-5/6 md:mt-10 md:ml-36 z-50" src={landing} />
        </div>
      </div>
    </div>
    </div>
        </div>
        
    )
}