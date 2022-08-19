import { Link } from 'react-router-dom';

export default function NavBar(props){
    return(
        
    <div class="sticky z-10 top-0 h-16 border-b  bg-gradient-to-r from-blue-500 to-sky-400 lg:py-2.5">
        <div class="px-6 flex items-center justify-between 2xl:container">
            <h5 class="mt-2 text-2xl ml-1 text-white font-medium md:block">{props.currentMenu ?? "Dashboard"}</h5>
            <div class="flex mt-3 md:mt-0">
                <button aria-label="notification" class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600 hover:text-sky-500 focus:text-sky-500 active:text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                </button>
                <Link to='/landing' class="ml-2 w-10 h-10 rounded-xl group flex items-center space-x-4 bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
        <svg class="h-5 w-5 m-auto text-gray-600 hover:text-sky-500 focus:text-sky-500 active:text-sky-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
          {/* <span class="-mr-1 font-medium text-lg md:block hidden">Logout</span> */}
        </Link>
            </div>
        </div>
    </div>
        
    )
}