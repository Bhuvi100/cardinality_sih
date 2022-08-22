import InstituteSideBar from "./InstituteSideBar";
import { useState } from "react";
import NavBar from "../../components/Navbar";
import InstituteDashboard from "./InstituteDashboard";
export default function InstituteReports(){
    const [back,setBack]=useState(0);
  if(back==1){
    return <InstituteDashboard/>
  }
    return(
        <div>
            <div className="flex flex-row">
            <InstituteSideBar/>
<div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">
    <NavBar currentMenu="Reports"/>
    <div class=" 2xl:container">
    <button class=" bg-transparent md:ml-3 md:mt-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
     onClick={()=>{setBack(1)}}>
  Back
</button>
<main class="flex md:p-6 flex-col justify-center">
  <div class="w-full rounded-xl bg-stone-100 p-8 shadow-2xl">
  <h1 class="font-bold text-xl mb-2 text-blue-500">Institution Details : Basic Details</h1>
 <div class="flow-root ">
        <div class="float-left">
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>
</button>
        </div>
        <div class="float-right">
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</button>
        </div>
    </div>
  <div class="relative flex py-3">
    <div class="flex-grow border-t border-black"></div>
    <div class="flex-grow border-t border-black"></div>
</div>

    <div class="mb-4 grid grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Current Application Number :</label>
        <input type="text" id="text" class="w-full max-w-lg rounded-lg border border-black px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Permanent Institute :<br/> ID</label>
        <input type="text" id="text" class="w-full max-w-lg rounded-lg border border-black px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>

     <div class="mb-4 grid grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Institute Current <br/> Status :</label>
        <input type="text" id="text" class="w-full max-w-lg rounded-lg border border-black px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Application Opened Date :</label>
        <input type="text" id="text" class="w-full max-w-lg rounded-lg border border-black px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>

 <div class="mb-4 grid grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Attend Srutiny Committee Date :</label>
        <input type="text" id="text" class="w-full max-w-lg rounded-lg border border-black px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
      <div class="flex flex-col">
        <label for="text" class="mb-2 font-semibold">Overall Deficiency (Y/N)</label>
        <input type="text" id="text" class="w-full max-w-lg rounded-lg border border-black px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
      </div>
    </div>

    <div class="mb-4 flex flex-col">
      <label for="email" class="mb-2 font-semibold">Academic Year : </label>
        <input type="email" id="text" class="w-full rounded-lg border border-black px-2 py-1 pl-8 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
     </div>
     <div class="flex items-center justify-center mt-2">
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Print EOA Report
</button>
</div>
  </div>
</main>


</div>
        </div>
    </div>
</div>
        
    )
}