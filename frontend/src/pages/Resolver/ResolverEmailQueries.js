import React, { useState } from "react";
import MailTable from "../../components/MailTable";
import NavBar from "../../components/Navbar";

export default function ResolverEmailQueries() {
  const [query, setQuery] = useState(0);
  const [modtable, setModtable] = useState(0);

  return (
    <div>
      <NavBar currentMenu="Email queries" />

      <div className="flex justify-between mr-4">
        <div class="px-6 pt-6 2xl:container w-3/4">
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead class=" title text-gray-900 uppercase text-lg bg-[#E4EAEB]  dark:text-[#273339]">
                  <tr>
                    <th scope="col" class="px-5 py-5">
                      Email
                    </th>
                    <th scope="col" class="px-5 py-5">
                      Summary
                    </th>
                    <th scope="col" class="px-5 py-5">
                      Posted At
                    </th>
                    <th scope="col" class="px-5 py-5 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-50">
                    <th
                      scope="row"
                      class="px-6 py-4 font-semibold  whitespace-nowrap "
                    >
                      shametha@gmail.com
                    </th>
                    <td class="px-5 py-4">Need guidance to submit my patent</td>
                    <td class="px-5 py-4 text-base font-semibold">
                      17-08-2022
                    </td>

                    <td class="px-5 py-4">
                      <div className="flex flex-row gap-3 justify-center">
                        <button class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                        <button class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded">
                          Noted
                        </button>
                        <button class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded">
                          Resolved
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-50">
                    <th
                      scope="row"
                      class="px-6 py-4 font-semibold  whitespace-nowrap "
                    >
                      bhuvi100@gmail.com
                    </th>
                    <td class="px-5 py-4">
                      Replace junk food with fruits in school canteen
                    </td>
                    <td class="px-5 py-4 text-base font-semibold">
                      17-08-2022
                    </td>

                    <td class="px-5 py-4">
                      <div className="flex flex-row gap-3 justify-center">
                        <button class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                        <button class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded">
                          Noted
                        </button>
                        <button class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded">
                          Resolved
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-50">
                    <th
                      scope="row"
                      class="px-6 py-4 font-semibold  whitespace-nowrap "
                    >
                      sasi@gmail.com
                    </th>
                    <td class="px-5 py-4">
                      IIT-BHU is conducting a wonderful hackathon
                    </td>
                    <td class="px-5 py-4 text-base font-semibold">
                      17-08-2022
                    </td>

                    <td class="px-5 py-4">
                      <div className="flex flex-row gap-3 justify-center">
                        <button class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                        <button class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded">
                          Noted
                        </button>
                        <button class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded">
                          Resolved
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-50">
                    <th
                      scope="row"
                      class="px-6 py-4 font-semibold  whitespace-nowrap "
                    >
                      prithika@gmail.com
                    </th>
                    <td class="px-5 py-4">
                      My college is not providing any funding for my projects.
                    </td>
                    <td class="px-5 py-4 text-base font-semibold">
                      17-08-2022
                    </td>

                    <td class="px-5 py-4">
                      <div className="flex flex-row gap-3 justify-center">
                        <button class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded">
                          View
                        </button>
                        <button class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded">
                          Noted
                        </button>
                        <button class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded">
                          Resolved
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>
        <div className="w-1/4">
          <details open class="overflow-hidden border border-gray-200 rounded">
            <summary class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
              <span class="text-sm font-medium"> Toggle Filters </span>

              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>

            <form action="" class="border-t border-gray-200 lg:border-t-0">
              <fieldset>
                <legend class="block title w-full px-5 py-3 text-xs text-white bg-[#2368FB]">
                  Select Type
                </legend>

                <div class="px-5 py-6 space-y-2 bg-stone-100">
                  <div class="flex items-center">
                    <input
                      id="toy"
                      type="checkbox"
                      name="type[toy]"
                      class="w-5 h-5 border-gray-300 rounded"
                    />

                    <label for="toy" class="ml-3 text-sm font-medium">
                      Noted
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input
                      id="game"
                      type="checkbox"
                      name="type[game]"
                      class="w-5 h-5 border-gray-300 rounded"
                    />

                    <label for="game" class="ml-3 text-sm font-medium">
                      Resolved
                    </label>
                  </div>

                  <div class="pt-2">
                    <button
                      type="button"
                      class="text-xs text-gray-800 underline"
                    >
                      Reset Type
                    </button>
                  </div>
                </div>
              </fieldset>

              <div class="flex justify-between px-5 py-3 border-t bg-stone-100 border-gray-200">
                <button
                  name="commit"
                  type="button"
                  class="px-5 py-3 text-xs title  text-white bg-[#2368FB] rounded"
                >
                  Apply Filters
                </button>
              </div>
            </form>
          </details>
        </div>
      </div>
    </div>
  );
}
