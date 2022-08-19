import LoginPicNew from "../assets/LoginPicNew1.png";
export default function Temp(){
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
      <button type="submit" class="block w-40 bg-blue-500 mt-2 py-2 rounded-2xl text-white font-semibold mb-1 hover:shadow-xl">Login</button>
  
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