import InstituteSideBar from "./InstituteSideBar";
import NavBar from "../../components/Navbar";
export default function InstituteDashboard(){
    return(
        <div>
            <div className="flex flex-row">
            <InstituteSideBar/>
<div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">
    <NavBar currentMenu="Dashboard"/>
    <div class="px-6 pt-6 2xl:container">
       
   
<div class="px-3 md:mt-3">
        <div class="grid grid-cols-1 md:lg:xl:grid-cols-6 group bg-white shadow-lg shadow-gray-500 border ">


            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
             <span class="p-5 rounded-full bg-green-900 text-white shadow-lg shadow-green-600 ">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
</svg></span>
                <p class="text-lg font-medium text-slate-700 mt-8">My Previous Year Application</p>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                    </span>
                <p class="text-lg font-medium text-slate-700 mt-8">Institute Accounts / JFDR</p>
            </div>

            <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-pink-700 text-white shadow-lg shadow-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
</svg>
                    </span>
                <p class="text-lg font-medium text-slate-700 mt-8">AICTE Quality Improvement Schemes</p>
            </div>


            <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-violet-700 text-white shadow-lg shadow-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>
                    </span>
                <p class="text-lg font-medium text-slate-700 mt-8">PGDM Student Details </p>
            </div>

            <div class="p-10 flex flex-col items-center text-center group  md:lg:xl:border-b  md:lg:xl:border-r hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-yellow-400 text-white shadow-lg shadow-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
</svg>
                    </span>
                <p class="text-lg font-medium text-slate-700 mt-8">Faculty Update</p>
            </div>

            <div class="p-10 flex flex-col items-center text-center group  md:lg:xl:border-b   hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-red-400 text-white shadow-lg shadow-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
</svg>
                    </span>
                <p class="text-lg font-medium text-slate-700 mt-8">DSC Utility</p>
            </div>

<div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-violet-300 text-white shadow-lg shadow-violet-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
                    </span>
                <p class="text-lg font-medium text-slate-700 mt-8">Application for AY 2022-2023</p>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
              <span class="p-5 rounded-full bg-green-900 text-white shadow-lg shadow-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></span>
                <p class="text-lg font-medium text-slate-700 mt-8">CII Questionnaire</p>
            </div>

            <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-orange-800 text-white shadow-lg shadow-orange-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg></span>
                <p class="text-lg font-medium text-slate-700 mt-8">NSQF</p>
            </div>

            <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-pink-700 text-white shadow-lg shadow-pink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
                </span>
                <p class="text-lg font-medium text-slate-700 mt-8">Block / Unblock Student</p>
            </div>

            <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r  hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-indigo-800 text-white shadow-lg shadow-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg></span>
                <p class="text-lg font-medium text-slate-700 mt-8">Reports</p>
            </div>

  <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-0.3 hover:scale-105 duration-300">
                <span class="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p class="text-lg font-medium text-slate-700 mt-8">PG Scholarship</p>
            </div>

        </div>

    </div>




</div>
        </div>
    </div>
</div>
    
    )
}