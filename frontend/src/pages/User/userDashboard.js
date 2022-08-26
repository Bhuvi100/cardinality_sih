import React, { useState } from "react";
import Profile from "./Profile";
import UserHome from "./userHome";
import MyQueries from "./MyQueries";
import RemoteAssistant from "./RemoteAssistant";

export default function UserDashboard() {
  const [menu, setMenu] = useState(1);
  return (
    <div className="">
      <div className="flex min-h-full w-full gradient-bg bg-[#dffaff]">
        <div class="flex fixed z-10 bottom-0 left-0 flex-col bg-white bg-opacity-60 justify-between w-16 md:w-1/5 h-screen  border-r">
          <div>
            <div className="flex justify-center">
              <img
                class=" w-14 h-14 mt-4 md:w-32 md:h-32 rounded-lg"
                src="logo.png"
              ></img>
            </div>

            <div class="">
              <nav class="flex flex-col p-2 justify-between">
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
                        <path
                          fill-rule="evenodd"
                          d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span class="text-xl hidden md:block">My queries</span>
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
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span class="text-xl mt-1 hidden md:block">Profile</span>
                    </button>
                  </li>
                </ul>
                <li className="mt-64">
                  <button
                    onClick={() => setMenu(4)}
                    className={
                      menu == 4
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
                        d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span class="text-xl mt-1 hidden md:block">
                      Remote assistance
                    </span>
                  </button>
                </li>
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
          {menu == 1 && <UserHome />}
          {menu == 2 && <MyQueries />}
          {menu == 3 && <Profile />}
          {menu == 4 && <RemoteAssistant />}
        </div>
      </div>
    </div>
  );
}
