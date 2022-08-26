export default function MailTable(props){
    return(
        <div>
            <button class="px-3 py-1 mb-3 text-blue-600 font-semibold hover:bg-blue-500 hover:text-white bg-white border-2 border-blue-500 rounded-xl" onClick={() => props.setModtable(0)}>Back</button>
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
                  <td class="px-5 py-4 text-base font-semibold">17-08-2022</td>
                 
                  <td class="px-5 py-4">
                  <div className="flex flex-row gap-3 justify-center">
                    <button
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                    <button
                      class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded"
                    >
                      Noted
                    </button>
                    <button
                      class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded"
                    >
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
                  <td class="px-5 py-4">Replace junk food with fruits in school canteen</td>
                  <td class="px-5 py-4 text-base font-semibold">17-08-2022</td>
                 
                  <td class="px-5 py-4">
                  <div className="flex flex-row gap-3 justify-center">
                    <button
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                    <button
                      class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded"
                    >
                      Noted
                    </button>
                    <button
                      class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded"
                    >
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
                  <td class="px-5 py-4">IIT-BHU is conducting a wonderful hackathon</td>
                  <td class="px-5 py-4 text-base font-semibold">17-08-2022</td>
                 
                  <td class="px-5 py-4">
                  <div className="flex flex-row gap-3 justify-center">
                    <button
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                    <button
                      class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded"
                    >
                      Noted
                    </button>
                    <button
                      class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded"
                    >
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
                  <td class="px-5 py-4">My college is not providing any funding for my projects.</td>
                  <td class="px-5 py-4 text-base font-semibold">17-08-2022</td>
                 
                  <td class="px-5 py-4">
                  <div className="flex flex-row gap-3 justify-center">
                    <button
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                    <button
                      class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded"
                    >
                      Noted
                    </button>
                    <button
                      class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded"
                    >
                      Resolved
                    </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}