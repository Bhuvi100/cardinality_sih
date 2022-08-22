import { Link } from 'react-router-dom';
import logo2 from "../assets/logo2.png"
export default function SideBar(){
    return(
        
<div class="fixed top-0 bottom-0 z-10 h-screen bg-blue-500 overflow-hidden ">
  <div class="sidebar border-r border-blue-500 md:w-60 w-16 ">
    <div class="flex flex-col justify-between overflow-hidden">
      <div className=''>
      <img class="md:w-44 md:mr-3" src={logo2} />
        <ul class="space-y-2 tracking-wide">
        {/* <li class="min-w-max hover:bg-white md:hidden">
        <button class="relative flex items-center space-x-4  px-4 py-3">
        <svg class="w-9 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            </li> */}
          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/userdashboard' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg class="w-9 h-10 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Dashboard</span>
            </Link>
            </div>
          </li>
          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/myqueries' class="bg group flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg class="w-9 h-10 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">My Queries</span>
            </Link>
            </div>
          </li>
          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/profile' class="group flex items-center space-x-4  hover:bg-white px-4 py-3 text-white hover:text-black">
            <svg class="w-9 h-10 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Profile</span>
            </Link>
            </div>
          </li>
          
        </ul>
      </div>
      <div></div>
    </div>
  </div>
</div>
    )
}