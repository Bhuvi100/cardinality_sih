import React, { useState } from "react";
import MailTable from "../../components/MailTable";
import NavBar from "../../components/Navbar";

export default function MailQueries() {
  const [query, setQuery] = useState(0);
  const [modtable, setModtable] = useState(0);

  return (
    <div>
      <NavBar currentMenu="Email queries" />

      <div className="flex justify-between mr-4">
        <div class="px-6 pt-6 2xl:container w-3/4">
          {modtable === 0 ? (
            <div className="flex space-x-4 mt-4">
              <button onClick={() => setModtable(1)}>
                <div class="block overflow-hidden rounded-2xl w-80 shadow-xl">
                  <img
                    class="object-cover w-full h-32"
                    src="https://www.freshersnow.com/wp-content/uploads/2019/12/AICTE-PG-Scholarship.png"
                    alt=""
                  />

                  <div class="p-4 bg-white border-white">
                    <h5 class="text-sm title text-[#273339]">
                      AICTE Scholarships
                    </h5>

                    <p class="mt-1 text-xs text-gray-500 desc">
                      Kaasu kudupana nu theriyathu aana kandipa kadupu kudupan
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <MailTable setModtable={setModtable} />
          )}
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
