import LoginPicNew from "../assets/LoginPicNew1.png";
import UserDashboard from "./User/UserDashboard";
import { useState } from "react";
export default function Login(){
    const [login, setLogin]=useState(0);
  if(login==1)
  {return <UserDashboard/>}
    return(
        <div>
          
<div class="h-screen flex">
  <div class="flex w-1/2 bg-gradient-to-r from-sky-400 to-blue-500 i justify-around items-center">
    <div className="">
    <div className="logpic w-3/5 mx-auto" >
                            <img src={LoginPicNew} alt="React Logo" />
                        </div> 
      <h1 class="text-white text-center font-bold text-4xl font-sans">App Name</h1>
      <p class="text-white text-center mt-1">App Description</p>
      {/* <button type="submit" class="block w-28 bg-white text-blue-600 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button> */}
    </div>
  </div>
  <div class="flex flex-col w-1/2 justify-center items-center bg-white">
    
      <h1 class="text-gray-800 font-bold text-4xl mb-2">Login</h1>
      <p class="text-md font-normal text-gray-600 mb-7">Welcome Back !</p>
      <div className="md:mb-2">
            <label for="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username
                <span className="text-red-400">&nbsp;* </span>
            </label>
            <div className="mt-1 relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input id="username" className="block pr-10 shadow appearance-none border-2 hover:border-blue-500 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out" placeholder="you@example.com" />
            </div>
      </div>
      <div className="md:mb-2">
        <label for="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
            <span className="text-red-400">&nbsp;* </span>
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <input name="password" id="password" type="text" className="block pr-10 shadow appearance-none border-2 hover:border-blue-500 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out"/>
        </div>
     </div>
     <div className="mb-4">  
                                                <div className="md:ml-32">
                                                    <a className="font-normal text-sm text-blue-500 hover:text-red-500" href="#password-request">
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                            
                                        </div>
      <button class="block w-40 bg-blue-500 mt-2 py-2 rounded-2xl text-white font-semibold mb-1 hover:shadow-xl" onClick={()=>setLogin(1)}>
        <a href="/userdashboard">Login</a>
        </button>
  
                                        <div className="flex space-x-1 mt-3 ">
                                            <p className="text-sm font-normal text-gray-500 mr-1">
                                                No account?</p>
                                                <a className="font-semibold text-sm text-blue-500 hover:text-red-500" href="/register">
                                                     Sign up
                                                </a>
                                            
                                        </div>
          
  </div>
</div>
        </div>
    )
}


















// import LoginPic from "../assets/LoginPic.svg";
// import LoginVid from "../assets/LoginVid.mp4";
// import LoginPicNew from "../assets/LoginPicNew1.png";
// export default function Login(){
//     return(
//         <div>
//         <div className="h-screen flex justify-start md:z-0">
//             <div className="md:absolute inset-0 flex md:z-10 w-96 bg-gradient-to-r from-blue-500 to-sky-400 i items-center justify-around">
//             </div>
            
//                 <div className="md:z-10 md:mt-24 md:ml-60 md:w-3/4 md:rounded-3xl md:shadow-2xl md:border-1 md:border-l-0 md:h-3/4 bg-zinc-50">
//                 <div className="flex flex-row">
//                         <div className=" md:ml-20 logpic md:h-4/5 md:w-4/5 md:m-auto" >
//                             <img src={LoginPicNew} alt="React Logo" />
//                         </div> 
//                         {/* <video src={LoginVid} width="600" height="300" controls="controls" autoplay="true" /> */}
                

//                 <div className="mx-auto container flex items-center opacity-100" id="nav">
//                         <div className="w-full ml-1 pt-0 mt-6 p-1">

//                             <div className="mx-auto md:p-1 md:w-3/5">
//                                 {/* <div className="flex flex-wrap justify-between">
//                                     <h1 className="text-2xl font-semibold mt-2 ml-4 text-red-500 hover:text-teal-700 transition duration-500 p-4">
//                                         <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
//                                         Sign-in
//                                     </h1>
                                    
//                                 </div> */}

//                                 <div className=" rounded px-8 pt-16 pb-20 ">
//                                     <form method="POST" action="#login">
//                                         <div className="mb-8">
//                                             <label for="username" className="block text-gray-700 text-sm font-bold mb-2">
//                                                 Username
//                                                 <span className="text-red-400">&nbsp;* </span>
//                                             </label>
//                                             <div className="mt-1 relative rounded-md shadow-sm">
//                                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                                                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
//                                                 </div>
//                                                 <input id="username" className="block pr-10 shadow appearance-none border-2 hover:border-blue-500 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition duration-500 ease-in-out" placeholder="you@example.com" />
//                                             </div>
//                                             {/* <strong className="text-teal-800 text-xs italic">username is required</strong> */}
//                                         </div>

//                                         <div className="mb-8">
//                                             <label for="password" className="block text-gray-700 text-sm font-bold mb-2">
                                                
//                                                 Password
//                                                 <span className="text-red-400">&nbsp;* </span>
//                                             </label>
//                                             <div className="mt-1 relative rounded-md shadow-sm">
//                                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                                                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
//                                                 </div>
//                                                 <input name="password" id="password" type="text" className="block pr-10 shadow appearance-none border-2 border-blue-500 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-teal-700 transition duration-500 ease-in-out"/>
//                                             </div>
//                                         </div>

//                                         <div className="mb-6">
//                                             <div className="flex items-center justify-between">
//                                                 <div>
//                                                     <label className="flex space-x-1 block text-gray-500 font-semibold" for="remember">
//                                                         <input className="ml-0 mt-1 leading-tight h-4 w-4 " type="checkbox" id="remember" name="remember"/>
//                                                         <span className="text-sm mt-0">
//                                                              Remember me
//                                                         </span>
//                                                     </label>
//                                                 </div>
//                                                 <div>
//                                                     <a className="font-semibold text-sm text-red-500 hover:text-teal-900" href="#password-request">
//                                                         Forgot Password
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="mb-6 text-center">
//                                             <button className="transition duration-500 bg-blue-500 hover:bg-teal-900 text-white font-semibold py-1.5 px-5 rounded-xl focus:outline-none focus:shadow-outline" type="submit">
//                                                 Login
//                                             </button>
//                                         </div>
//                                         <div className="mt-3">
//                                         <hr></hr>
//                                         </div>
//                                         <div className="flex space-x-1 mt-3 ">
//                                             <p className="text-sm font-normal text-gray-500 mr-1">
//                                                 No account?</p>
//                                                 <a className="font-semibold text-sm text-red-500 hover:text-teal-900" href="/register">
//                                                      Sign up
//                                                 </a>
                                            
//                                         </div>
//                                     </form>


//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//             </div>
//         </div>
//         </div>
//     )
// }