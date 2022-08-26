import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import NewModule from "./NewModule";

export default function AdminModules() {
  const [query, setQuery] = useState(0);

  const [newModule, setNewModule] = useState(false)

  return (
    <div>
      <NavBar currentMenu="Modules" />

      { newModule ? <NewModule></NewModule> :
        <div>
          <button class="flex flex-row bg-white ml-6 hover:bg-blue-500 text-blue-700 font-bold mt-3 hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded-xl" onClick={() => setNewModule(true)}>Add New Module</button>
          <div class="px-6 pt-6 2xl:container">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead class=" title text-gray-900 uppercase text-lg bg-[#E4EAEB]  dark:text-[#273339]">
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
                <tbody className="">
                <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-60">
                  <th
                      scope="row"
                      class="px-6 py-4 font-semibold  whitespace-nowrap "
                  >
                    INTR20220817091123444
                  </th>
                  <td class="px-5 py-4">Internship</td>
                  <td class="px-5 py-4 ">AICTE Internship</td>
                  <td class="px-5 py-4">17-08-2022</td>
                  <td class="flex flex-row px-5 py-4 mt-3 text-green-600 font-semibold">
                    Resolved
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mt-1 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                      />
                    </svg>
                  </td>
                  <td class="px-5 py-4">
                    <button
                        class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded"
                        onClick={() => {
                          setQuery(1);
                        }}
                    >
                      View
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mt-1 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path
                            fill-rule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-50">
                  <th
                      scope="row"
                      class="px-6 py-4 font-semibold  whitespace-nowrap "
                  >
                    INTR20220817091123444
                  </th>
                  <td class="px-5 py-4">Internship</td>
                  <td class="px-5 py-4 ">AICTE Internship</td>
                  <td class="px-5 py-4">17-08-2022</td>
                  <td class="flex flex-row px-5 py-4 mt-3 text-green-600 font-semibold">
                    Resolved
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mt-1 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                      <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                      />
                    </svg>
                  </td>
                  <td class="px-5 py-4">
                    <button
                        class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded"
                        onClick={() => {
                          setQuery(1);
                        }}
                    >
                      View
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mt-1 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path
                            fill-rule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>}
    </div>
  );
}
