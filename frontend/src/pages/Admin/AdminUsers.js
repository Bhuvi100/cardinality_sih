import React, { useState } from "react";
import NavBar from "../../components/Navbar";

export default function AdminUsers() {
  const [query, setQuery] = useState(0);

  return (
    <div>
      <NavBar currentMenu="Users" />

      <div>
        <div class="px-6 pt-6 2xl:container">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class=" title text-gray-900 uppercase text-lg bg-[#E4EAEB]  dark:text-[#273339]">
                <tr>
                  <th scope="col" class="px-5 py-5">
                    Name
                  </th>
                  <th scope="col" class="px-5 py-5">
                    Email
                  </th>
                  <th scope="col" class="px-5 py-5">
                    User Role
                  </th>
                  <th scope="col" class="px-5 py-5">
                    Institute Role
                  </th>
                  <th scope="col" class="px-5 py-5 ">
                    Query count
                  </th>
                  <th scope="col" class="px-5 py-5">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
              <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-60">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold  whitespace-nowrap "
                  >
                    Aswathy
                  </th>
                  <td class="px-5 py-4">aswathy@gmail.com</td>
                  <td class="px-5 py-4 text-green-600 font-semibold">Student </td>
                  <td class="px-5 py-4">TamilNadu</td>
                  <td class="px-5 py-4">20</td>
                  <td class="px-5 py-4">
                    <button
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border-2 border-blue-500 hover:border-transparent rounded"
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
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-60">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold  whitespace-nowrap "
                  >
                    Aswathy
                  </th>
                  <td class="px-5 py-4">aswathy@gmail.com</td>
                  <td class="px-5 py-4 text-green-600 font-semibold">Student </td>
                  <td class="px-5 py-4">TamilNadu</td>
                  <td class="px-5 py-4">20</td>
                  <td class="px-5 py-4">
                    <button
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border-2 border-blue-500 hover:border-transparent rounded"
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
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-60">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold  whitespace-nowrap "
                  >
                    Aswathy
                  </th>
                  <td class="px-5 py-4">aswathy@gmail.com</td>
                  <td class="px-5 py-4 text-green-600 font-semibold">Student </td>
                  <td class="px-5 py-4">TamilNadu</td>
                  <td class="px-5 py-4">20</td>
                  <td class="px-5 py-4">
                    <button
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border-2 border-blue-500 hover:border-transparent rounded"
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
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-60">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold  whitespace-nowrap "
                  >
                    Aswathy
                  </th>
                  <td class="px-5 py-4">aswathy@gmail.com</td>
                  <td class="px-5 py-4 text-green-600 font-semibold">Student </td>
                  <td class="px-5 py-4">TamilNadu</td>
                  <td class="px-5 py-4">20</td>
                  <td class="px-5 py-4">
                    <button
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border-2 border-blue-500 hover:border-transparent rounded"
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
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
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
      </div>
    </div>
  );
}
