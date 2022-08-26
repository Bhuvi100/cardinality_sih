import landing from "../assets/landing_page.png";
import logo from "../assets/logo.png";
import Login from "./login";
import { useState } from "react";
export default function Landing(){
  const [login, setLogin]=useState(0);
  if(login==1)
  {return <Login/>}
    return(
      <div>
        <div className="h-screen mx-auto bg-gradient-to-r from-blue-500 to-sky-400" >
            {/* <img className="bg-fixed object-cover h-full w-full" src={landing} alt="React Logo" /> */}
            <div class="leading-normal tracking-normal text-white gradient" >
    
    <nav class="fixed w-full bg-gradient-to-r from-blue-500 to-sky-400 z-30 top-0 text-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div class="pl-4 flex flex-row items-center">
        <img class="w-8 mr-2 md:w-16 md:mr-3" src={logo} />
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
          AICTE Grievance Redressal Platform
          </h1>
          <p class="leading-normal text-xl italic mt-4">
            Submit Queries & Solve Problems
          </p>
          <div className="flex flex-row gap-2">
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={()=>setLogin(1)}>
            <a href="/register">Register</a>
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



        <div className="h-screen flex justify-center mx-auto bg-white">
     
<div class="py-32">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-lg text-blue-600 font-semibold">Top Features</h2>
      <p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">Reach out to us by just a tap!</p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">We aim at providing seamless experience to you by addressing any and all of your concerns and suggestions. </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
           
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Categorisation</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">Your queries and categorised and duly answered based to the type of concern and the type of scheme that you want to notify us about.</dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
             
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-robot h-6 w-6" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
</svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Automated remainders</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">On addressing a huge audience we may take some time. But we still remaind ourselves periodically and make sure that you are answered to.</dd>
        </div>
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
             
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Cross PLatform</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">Feel free to try our mobile application too for android and iOS devices.</dd>
        </div>
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
             
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Multi Lingual</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">We support various indian languages in support of unity in diversity.</dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
         
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter h-6 w-6" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Social Media</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">You can reach out to us on Email and Twitter as well. Our Scrapper bot will reply to aicte tagged tweets to serve you better.</dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Handling similar Questions</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">Our ML algorithm can identify any kind of similar questions to which you can find answers even without having to post or wait.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
        </div>



        <div>
            
        </div>


        </div>
    )
}