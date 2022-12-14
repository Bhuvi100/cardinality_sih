import { Link } from 'react-router-dom';
import logo2 from "../../assets/logo2.png";
export default function ResolverSideBar(){
    return(
        
<div class="fixed top-0 bottom-0 z-10 h-screen bg-blue-500 overflow-hidden ">
  <div class="sidebar border-r border-blue-500 md:w-60 w-16 ">
    <div class="flex flex-col justify-between overflow-hidden">
      
      <img class="w-30 md:w-40 ml-3 md:mr-3" src={logo2} />
        <ul class="space-y-2 tracking-wide">
       
          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/resolverdashboard' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg class="w-9 h-10 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Dashboard</span>
            </Link>
            </div>
          </li>

          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/resolveruser' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-10 md:w-6 md:h-6" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
</svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">General User </span>
            </Link>
            </div>
          </li>

          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/resolverSPOC' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-10 md:w-6 md:h-6" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Institute SPOC </span>
            </Link>
            </div>
          </li>

          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/resolverdashboard' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter w-9 h-10 md:w-6 md:h-6" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Twitter Queries</span>
            </Link>
            </div>
          </li>

          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/resolverdashboard' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telegram w-9 h-10 md:w-6 md:h-6" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Telegram Queries</span>
            </Link>
            </div>
          </li>
         
          
        </ul>
      </div>
      <div></div>
    </div>
  </div>

    )
}