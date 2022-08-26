import React, { useState } from "react";
import AdminHome from "./AdminHome";
import AdminModules from "./AdminModules";
import AdminQueries from "./AdminQueries";
import AdminResolvers from "./AdminResolvers";
import AdminUsers from "./AdminUsers";
import MailQueries from "./MailQueries";
import SocialQueries from "./SocialQueries";

export default function AdminDashboard() {
  const [menu, setMenu] = useState(1);
  return (
    <div className="">
      <div className="flex min-h-full w-full gradient-bg overflow-scroll bg-[#dffaff]">
        <div class="flex fixed z-10 bottom-0 left-0 flex-col bg-white bg-opacity-60 justify-between w-16 md:w-1/5 h-screen  border-r">
          <div>
            <div className="flex justify-center">
              <img
                class=" w-14 h-14 mt-4 md:w-32 md:h-32 rounded-lg"
                src="logo.png"
              ></img>
            </div>

            <div class="">
              <nav class="flex flex-col p-2">
                <ul class="pt-8 space-y-3">
                  <li>
                    <button
                      onClick={() => setMenu(1)}
                      className={
                        menu == 1
                          ? "title text-white rounded bg-[#2368FB] flex space-x-4 px-2 py-1.5 w-full"
                          : "desc w-full   flex space-x-4 px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 mt-1"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>

                      <span class="text-xl  hidden md:block">Home</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setMenu(2)}
                      className={
                        menu == 2
                          ? "title text-white rounded bg-[#2368FB] flex space-x-4 px-2 py-1.5 w-full"
                          : "desc w-full   flex space-x-4 px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 mt-1"
                      >
                        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                      </svg>

                      <span class="text-xl hidden md:block">Users</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setMenu(3)}
                      className={
                        menu == 3
                          ? "title text-white rounded bg-[#2368FB] flex space-x-4 px-2 py-1.5 w-full"
                          : "desc w-full   flex space-x-4 px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6 mt-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span class="text-xl hidden md:block">Queries</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setMenu(4)}
                      className={
                        menu == 4
                          ? "title text-white rounded bg-[#2368FB] flex space-x-4 px-2 py-1.5 w-full"
                          : "desc w-full   flex space-x-4 px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                      }
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter w-6 h-6 mt-1" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>

                      <span class="text-xl hidden md:block">
                        Twitter queries
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setMenu(8)}
                      className={
                        menu == 8
                          ? "title text-white rounded bg-[#2368FB] flex space-x-4 px-2 py-1.5 w-full"
                          : "desc w-full   flex space-x-4 px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                      }
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-fill w-6 h-6" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>

                      <span class="text-xl hidden md:block">Email queries</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setMenu(5)}
                      className={
                        menu == 5
                          ? "title text-white rounded bg-[#2368FB] flex space-x-4 px-2 py-1.5 w-full"
                          : "desc w-full   flex space-x-4 px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span class="text-xl hidden md:block">Modules</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setMenu(6)}
                      className={
                        menu == 6
                          ? "title text-white rounded bg-[#2368FB] flex space-x-4 px-2 py-1.5 w-full"
                          : "desc w-full   flex space-x-4 px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                        <path
                          fill-rule="evenodd"
                          d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                          clip-rule="evenodd"
                        />
                        <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                      </svg>

                      <span class="text-xl hidden md:block">Resolvers</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="sticky hover:bg-red-500 bg-[#2368FB] inset-x-0 bottom-0 p-2  border-t border-gray-100">
            <form action="/logout">
              <button
                type="submit"
                class="flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:text-gray-700 group relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-screen ml-16 md:ml-80">
          {menu == 1 && <AdminHome />}
          {menu == 2 && <AdminUsers />}
          {menu == 3 && <AdminQueries />}
          {menu == 4 && <SocialQueries />}
          {menu == 5 && <AdminModules />}
          {menu == 6 && <AdminResolvers />}
          {menu == 8 && <MailQueries />}

        </div>
      </div>
    </div>
  );
}
