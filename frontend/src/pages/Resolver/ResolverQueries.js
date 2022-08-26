import React, { useState } from "react";
import QueryTable from "../../components/QueryTable";
import NavBar from "../../components/Navbar";

export default function ResolverQueries() {
  const [query, setQuery] = useState(0);
  const [modtable, setModtable] = useState(0);

  return (
    <div>
      <NavBar currentMenu="Queries" />
      <div className="flex justify-between mr-4">
        <div class="px-6 pt-6 2xl:container w-3/4">
          
            <div>
             
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
                        Query Type
                      </th>
                      <th scope="col" class="px-5 py-5">
                        Resolver
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
                      <td class="px-5 py-4 ">Suggestion</td>
                      <td class="px-5 py-4">Kumaraguru</td>
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
                            // setQuery(1);
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
                        INTR20220817091123445
                      </th>
                      <td class="px-5 py-4">Internship</td>
                      <td class="px-5 py-4 ">Grievance</td>
                      <td class="px-5 py-4">Aswathy</td>
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
                            // setQuery(1);
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
                        INTR20220817091123446
                      </th>
                      <td class="px-5 py-4">Internship</td>
                      <td class="px-5 py-4 ">Suggestion</td>
                      <td class="px-5 py-4">Shametha</td>
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
                            // setQuery(1);
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
                        INTR20220817091123447
                      </th>
                      <td class="px-5 py-4">Internship</td>
                      <td class="px-5 py-4 ">Appreciation</td>
                      <td class="px-5 py-4">Prithika</td>
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
                            // setQuery(1);
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
        <div className="md:w-1/4">
          <details open class="overflow-hidden border border-gray-200 rounded">
            <summary class="flex md:items-center md:justify-between px-5 py-3 bg-gray-100 lg:hidden">
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
                  User designation
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
                      Student
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
                      SPOC
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input
                      id="outdoor"
                      type="checkbox"
                      name="type[outdoor]"
                      class="w-5 h-5 border-gray-300 rounded"
                    />

                    <label for="outdoor" class="ml-3 text-sm font-medium">
                      Faculty
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
