import { useState } from "react";
import NavBar from "../../components/Navbar";
import InstituteSideBar from "./InstituteSideBar";
//import ViewQuery from "../../components/viewQueryForm";
export default function InstituteQueries(){
    const [query,setQuery] = useState(0);

    return(
        <div>
            <div className="flex flex-row">
<InstituteSideBar/>
<div class="w-full mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%] ml-16 md:ml-60">
            <NavBar currentMenu="Submitted Queries"/>
    <div>

    <div class="px-6 pt-6 2xl:container">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class=" text-gray-700 uppercase text-lg bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-5 py-5">
                    Query ID
                </th>
                <th scope="col" class="px-5 py-5">
                    Category
                </th>
                <th scope="col" class="px-5 py-5">
                    Scheme / Module Name
                </th>
                <th scope="col" class="px-5 py-5">
                    Raised On
                </th>
                <th scope="col" class="px-5 py-5 ">
                    Query Status
                </th>
                <th scope="col" class="px-5 py-5">
                    Details
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b text-lg dark:bg-gray-900 font-normal dark:border-gray-800 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th scope="row" class="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap ">
                    INTR20220817091123444
                </th>
                <td class="px-5 py-4">
                    Internship
                </td>
                <td class="px-5 py-4 ">
                    AICTE Internship
                </td>
                <td class="px-5 py-4">
                    17-08-2022 
                </td>
                <td class="flex flex-row px-5 py-4 mt-3 text-green-600 font-semibold">
                    Resolved 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                </td>
                <td class="px-5 py-4">
                <button class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded" onClick={()=>{setQuery(1)}}>
                         View
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
</svg>
                </button>
                </td>
            </tr>
            <tr class="border-b text-lg dark:bg-gray-900 font-normal dark:border-gray-800 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th scope="row" class="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap ">
                ADF24357255547927466
                </th>
                <td class="px-5 py-4">
                    ADF
                </td>
                <td class="px-5 py-4 ">
                    ADF
                </td>
                <td class="px-5 py-4">
                    10-08-2022 
                </td>
                <td class="flex flex-row px-5 py-4 mt-3 text-yellow-500 font-semibold">
                    In Progress
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
</svg>
                </td>
                <td class="px-5 py-4">
                <button class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded">
                         View
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
</svg>
                </button>
                </td>
            </tr>
            <tr class="border-b text-lg dark:bg-gray-900 font-normal dark:border-gray-800 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th scope="row" class="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap ">
                INIT82634527725156771
                </th>
                <td class="px-5 py-4">
                    Initiative
                </td>
                <td class="px-5 py-4 ">
                   Fit India Initiative
                </td>
                <td class="px-5 py-4">
                    01-08-2022 
                </td>
                <td class="flex flex-row px-5 py-4 mt-3 text-red-600 font-semibold">
                    Rejected 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
</svg>
                </td>
                <td class="px-5 py-4">
                <button class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded">
                         View
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-1 ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
</svg>
                </button>
                </td>
            </tr>
     
        </tbody>
    </table>
</div>
        </div>
        </div>
        </div>
</div>
</div>
        
    )
}