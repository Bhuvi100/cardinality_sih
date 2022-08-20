import { useState } from "react";
import UserDashboard from "../pages/User/userDashboard";
import NavBar from "./Navbar";
import SideBar from "./SideBar";
export default function GrievanceForm(){
  const [back,setBack]=useState(0);
  if(back==1){
    return <UserDashboard/>
  }
    return(
        <div>
            <div className="flex flex-row">
            <SideBar/>
            <div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">

            <NavBar currentMenu="New Grievance"/>
            
    <div class="grid grid-cols-6">
      <div className="col-span-1">
    <button class=" bg-transparent md:ml-3 md:mt-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
     onClick={()=>{setBack(1)}}>
  Back
</button>
</div>
       <div class="col-span-4 flex justify-center my-2 mx-4 md:mx-0">
   <form class="w-full max-w-xl bg-white rounded-lg shadow-xl p-6">
      <div class="flex flex-wrap -mx-3 mb-6">
         <div class="w-full md:w-full mt-3 px-3 mb-6">
<label class="block mb-2 text-sm font-bold text-black">QUERY TYPE</label>
<select class=" text-sm rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-black  ">
  <option selected="">Select Type</option>
  <option >Suggestion</option><option>Enquiry</option> <option>Grievance</option> <option>Complaint</option>
  <option>Appreciation</option> <option>Required Support</option> <option>Willing to Support</option>
</select></div>
         <div class="w-full md:w-full px-3 mb-2">
            <label class="block mb-1 text-sm font-bold text-black">APPLICATION NUMBER</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none" type='text' required/>
        </div>
            <div class="w-full md:w-full px-3 mb-2">
            <label class="block mb-1 text-sm font-bold text-black">PRINCIPAL NUMBER</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none" type='text' required/>
        </div>
         <div class="w-full md:w-full mt-1 px-3 mb-6">
 <label for="roles" class="block mb-2 text-sm font-bold text-black">INSTITUTE STATE/UT</label>
 <select class=" text-sm rounded-lg block w-full p-2.5 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected="role">Select an option</option>
  <option >Andhra Pradesh</option>
  <option >Arunachal Pradesh</option>
  <option >Assam</option>
  <option >Bihar</option>
  <option >Chhattisgarh</option>
  <option >Goa</option>
  <option >Gujarat</option>
  <option >Haryana</option>
  <option >Himachal Pradesh</option>
  <option >Jammu and Kashmir</option>
  <option >Jharkhand</option>
  <option >Karnataka</option>
  <option >Kerala</option>
  <option >Madhya Pradesh</option>
  <option >Maharashtra</option>
  <option >Manipur</option>
  <option >Meghalaya</option>
  <option >Mizoram</option>
  <option >Nagaland</option>
  <option >Odisha</option>
  <option >Punjab</option>
  <option >Rajasthan</option>
  <option >Sikkim</option>
  <option >Tamil Nadu</option>
  <option >Telangana</option>
  <option >Tripura</option>
  <option >Uttar Pradesh</option>
  <option >Uttarakhand</option>
  <option >West Bengal</option>
  <option >Andaman and Nicobar Islands</option>
  <option >Chandigarh</option>
  <option >Dadra and Nagar Haveli</option>
  <option >Daman and Diu</option>
  <option >Delhi</option>
  <option >Ladakh</option>
  <option >Lakshadweep</option>
  <option >Puducherry</option>
</select></div>
<div class="w-full md:w-full px-3 mb-2">
            <label class="block mb-2 text-sm font-bold text-black">SCHEME NAME *auto filled</label>
            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none" type='text' required/>
        </div>
          <div class="w-full md:w-full px-3 mb-2">
<label class="block mb-2 text-sm font-bold text-black">NATURE OF QUERY</label>
<select class=" text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100  dark:text-black  ">
  <option selected="">Select Type</option>
  <option >Eligibility Criteria</option><option >Login Credentials Related</option><option >PG Application form unable to submit</option>
 <option >Failed Transaction</option> <option >Fellowship Related</option> <option >Any Technical Queries</option> <option >An Non-Technical Queries</option> <option >Others</option>
</select></div>
<div class="w-full md:w-full px-3 mb-2">
<label for="message" class="block mb-2 text-sm font-bold text-black">SUBJECT OF QUERY</label>
<textarea id="message" rows="2" class="block p-2.5 w-full text-sm text-gray-500 rounded-lg border border-black focus:ring-blue-500   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-blue-600 focus:outline-none" placeholder="Subject of Query"></textarea>
</div>
<div class="w-full md:w-full px-3 mb-3">
<label for="message" class="block mb-2 text-sm font-bold text-black">DESCRIPTION OF QUERY</label>
<textarea id="message" rows="10" class="block p-2.5 w-full text-sm text-gray-500 rounded-lg border border-black focus:ring-blue-500   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-blue-600 focus:outline-none" placeholder="Description (Upto 1000 Characters)"></textarea>
  </div>
<div class="w-full md:w-full px-3 mb-2">
  <label class="block mb-2 text-sm font-medium text-black" for="small_size">File related to Query,if any: (less than 1Mb)(.png/.jpg/.jpeg)</label>
<input class="block mb-5 w-full text-xs text-gray-900 rounded-lg border border-blue-800 cursor-pointer dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400" id="small_size" type="file"/>
     </div>
     <h6>Disclaimer: </h6>
         <div class="w-full flex items-center justify-between px-3 mb-2 ">
            <label class="flex items-center">
               <input type="checkbox" class="mr-1 bg-white shadow"/>
          <h4 class="text-sm font-bold text-red-700 pt-1">I certify that the information uploaded on this application is correct to the best of my Knowledge</h4>
           </label>
         </div>
         <div class="w-full md:w-full px-3 mt-1 mb-1 flex items-center justify-center">
           <button type="button" class=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SUBMIT</button>
         </div>
         
         </div>
         </form>
         </div>
      </div>
      
  </div>
</div>
</div>

  
    )
}