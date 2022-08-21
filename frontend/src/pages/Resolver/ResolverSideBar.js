import { Link } from 'react-router-dom';
export default function ResolverSideBar(){
    return(
        
<div class="fixed top-0 bottom-0 z-10 h-screen bg-blue-500 overflow-hidden ">
  <div class="sidebar border-r border-blue-500 md:w-60 w-16 ">
    <div class="flex flex-col justify-between pt-2 overflow-hidden">
      <div className='mt-6'>
      
        <ul class="mt-8 space-y-2 tracking-wide">
       
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
            <svg class="w-9 h-10 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">General User </span>
            </Link>
            </div>
          </li>

          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/resolverSPOC' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg class="w-9 h-10 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Institute SPOC </span>
            </Link>
            </div>
          </li>

          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/resolverdashboard' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg class="w-9 h-10 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Twitter Queries</span>
            </Link>
            </div>
          </li>

          <li class="min-w-max hover:bg-white">
            <div class="md:ml-2">
            <Link to='/resolverdashboard' aria-label="dashboard" class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black">
            <svg class="w-9 h-10 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="-mr-1 font-medium text-lg md:block hidden">Telegram Queries</span>
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