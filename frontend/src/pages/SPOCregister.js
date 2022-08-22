import { useState,useEffect,useRef } from "react";
export default function SPOCRegister(){
    const password = useRef(null);
    const confirm_password = useRef(null);
    
    const [a,setA]=useState(null);

    function check_pass(){
        if(confirm_password.current.value==password.current.value){
            setA(true);
        }
        else{
            setA(false);
        }
    }
    return(
        <div>
             <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>
            <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500 py-6 sm:py-12"> 
  <div class=" visible relative bg-white px-6 pt-10 pb-8 shadow-2Exl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div class="divide-y divide-gray-300/50">
      <h3 class="text-2xl text-center font-bold mb-2">INSTITUTE REGISTRATION</h3>
        <div class="space-y-6 py-8" >
          
<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
<label for="roles" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> USER ROLE 
<span className="text-red-400">&nbsp;* </span></label>

<select class=" text-sm rounded-lg block w-full p-2.5 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  <option selected="role">Select an option</option>
  <option >Institute/University</option>
  <option >Student</option>
  <option >Participant(ATAL)</option>
  <option >Coordinator(ATAL)</option>
  <option >Faculty</option>
  <option >Others</option>
</select>
</div>
    <div class="w-full md:w-1/2 px-3">
 <label for="roles" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">INSTITUTE STATE/UT
 <span className="text-red-400">&nbsp;* </span></label>
 <select class=" text-sm rounded-lg block w-full p-2.5 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
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
</select>
   </div>
  </div>
  <div class="flex flex-wrap -mx-3 ">
    <div class="w-full px-3">
      <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
        FULL NAME
        <span className="text-red-400">&nbsp;* </span>
      </label>
       <div class="flex mb-3">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="******************" required/>
                            </div> </div> </div>
  <div class="flex flex-wrap -mx-3 mb-3">
    <div class="w-full px-3">
      <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
        EMAIL
        <span className="text-red-400">&nbsp;* </span>
      </label>
   <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="username@domain.com" required/>
                            </div></div> </div>
  <div class="flex flex-wrap -mx-3 mb-3">
    <div class="w-full px-3">
      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" >
        MOBILE NUMBER
        <span className="text-red-400">&nbsp;* </span>
      </label>
  <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-phone-outline text-gray-400 text-lg"></i></div>
                                <input class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" required/>
                            </div> </div></div>
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">  
<div class="flex flex-wrap -mx-3">
    <div class="w-full px-3">
      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" >
        PASSWORD
        <span className="text-red-400">&nbsp;* </span>
      </label>
  <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" id="password" ref={password} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none active:border-blue-500 focus:border-green-400" placeholder="************" required/>
                            </div></div></div></div>
    <div class="w-full md:w-1/2 px-3">
 <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3">
      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" >
        CONFIRM PASSWORD
        <span className="text-red-400">&nbsp;* </span>
      </label>
  <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" id="confirm_password" ref={confirm_password} onChange={()=>check_pass()} class={"w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" + (a == true ? "border-green-400" : ( a == false ? "border-red-400" : ""))} placeholder="************" required/>
                            </div>
   </div>
  </div>
   </div>
  </div>
<div class='flex items-center justify-center'>
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Submit
</button>
</div>
</form>
 </div>
 </div>                                           
       </div>   </div> </div>  
       
 
     )   
}