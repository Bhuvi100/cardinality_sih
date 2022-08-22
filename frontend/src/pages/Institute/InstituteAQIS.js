import InstituteSideBar from "./InstituteSideBar";
import { useState } from "react";
import NavBar from "../../components/Navbar";
import InstituteDashboard from "./InstituteDashboard";
export default function InstituteAQIS(){
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


<main class="flex min-h-screen justify-center bg-blue-500 p-5">
  <div class="w-full rounded-xl bg-white p-4 shadow-2xl shadow-white/40">

  <h1 class="font-bold text-2xl p-3">Institute Details</h1>
  <div class="relative mb-3">
  <div class="absolute inset-0 flex items-center">
    <div class="w-full border-b border-blue-400 border-4"></div>
  </div>
</div>
<div class="flow-root">  
  <div class="float-left">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded">
  Save Bank Details
</button>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded ml-2">
 Edit Bank Details
</button>
      </div>
<div class="float-right">
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
</button>
</div>
</div>
 <div class="grid grid-cols-3 gap-3.5 justify-evenly mt-2"> 
        <div>
           <label class="block mb-2 text-sm font-medium text-black">Application Number</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div> 
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Institute District</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Permanent ID</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Town/City/Village</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Academic Year</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">PIN</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Institution Address</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Institution Type</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Institution Name</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Extension Refernce of Approval Letter for the current year</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">State / UT</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Institute PAN Number</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">PAN Card Issuing Date</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">PAN Card Issuing State</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">PAN Card Issuing Authorithy's State</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Cell Number</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Fax Number</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Landline Number</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">STD Code</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Institute Email ID</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div>
           <label class="block mb-2 text-sm font-medium text-black">Website</label>
            <input type="text" class="bg-white border border-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
    </div> 
    <div class="grid grid-cols-2 gap-3.5 justify-evenly mt-5">
<div>
            <input type="text" class="bg-white border border-blue-700 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="University Managed" required/>
          </div>
<div>
            <input type="text" class="bg-white border border-blue-700 text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Percentage Grant Received" required/>
          </div>
    </div>

<h1 class="mt-4 mb-2 font-medium">Please Download Mandate Form/Declaration Certificate , after filling attach the form below in the Attachments Tab <br/> <br/>
Please Click on AQIS Application ID to fill more details related to Scheme and Submit the Application</h1>

<div class='flex items-center justify-center'>
 <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Download Mandate Form
</button>
<button class="ml-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Download  Declaration Certificate
</button>
</div>

<h1 class="font-bold text-2xl p-3 mt-8">All AQIS Application Information</h1>
  <div class="relative mb-3">
  <div class="absolute inset-0 flex items-center">
    <div class="w-full border-b border-blue-400 border-4"></div>
  </div>
</div>
<div class="flow-root">  
  <div class="float-left">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
</svg>
</button>
<button class="bg-transparent bg-gray-300 text-gray-500 py-2 px-4  rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
</button>
<button class="bg-transparent bg-gray-300 text-gray-500 py-2 px-4 rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>
</button>
      </div>
<div class="float-right">
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
</button>
</div>
</div>
<div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-2">
    <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-black uppercase bg-blue-400">
            <tr>
                <th scope="col" class="py-2 px-3">
                    AQIS Application ID
                </th>
                <th scope="col" class="py-3 px-6">
                    Status
                </th>
                <th scope="col" class="py-3 px-6">
                    AQIS Schemes
                </th>
                <th scope="col" class="py-3 px-6">
                    Created on
                </th>
                <th scope="col" class="py-3 px-6">
                    Duration
                </th>
                <th scope="col" class="py-3 px-6">
                    Approx Funding Limit
                </th>
            </tr>
        </thead>
    </table>
</div>
<div class="flex justify-center mt-3 mb-3">
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
</svg>
</button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 ml-1 border border-blue-500 hover:border-transparent rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
</svg>
</button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 ml-1 border border-blue-500 hover:border-transparent rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg>
</button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 ml-1 border border-blue-500 hover:border-transparent rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
</svg>
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