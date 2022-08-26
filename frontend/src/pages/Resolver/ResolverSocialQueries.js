import React, { useState } from "react";
import NavBar from "../../components/Navbar";

export default function ResolverSocialQueries() {
  const [query, setQuery] = useState(0);
  const [modtable, setModtable] = useState(0);

  return (
    <div>
      <NavBar currentMenu="Twitter Queries" />
      <button
        class="px-3 py-1 mb-3 text-blue-600 font-semibold hover:bg-blue-500 hover:text-white bg-white border-2 border-blue-500 rounded-xl"
        onClick={() => setModtable(0)}
      >
        Back
      </button>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead class=" title text-gray-900 uppercase text-lg bg-[#E4EAEB]  dark:text-[#273339]">
            <tr>
              <th scope="col" class="px-5 py-5">
                Username
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
                Bhuvanesh
              </th>
              <td class="px-5 py-4">
                IIT-BHU is conducting a wonderful hackathon
              </td>
              <td class="px-5 py-4 text-base font-semibold">17-08-2022</td>

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
                Shametha
              </th>
              <td class="px-5 py-4">SIH is a great initiative</td>
              <td class="px-5 py-4 text-base font-semibold">19-08-2022</td>

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
                Kumaraguru
              </th>
              <td class="px-5 py-4">Need guidance to submit my patent</td>
              <td class="px-5 py-4 text-base font-semibold">21-08-2022</td>

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
                Prithika
              </th>
              <td class="px-5 py-4">XYZ sanitation is very poor</td>
              <td class="px-5 py-4 text-base font-semibold">23-08-2022</td>

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
    </div>
  );
}
