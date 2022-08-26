import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div class=" h-16 mr-10 md:mr-0 lg:py-2.5">
      <div class="px-6 flex items-center justify-between 2xl:container">
        <h5 class="mt-2 title text-3xl ml-1 text-[#2368FB]  md:block">
          {props.currentMenu ?? "Dashboard"}
        </h5>
        <div class="flex mt-3 md:mt-0">
          <div class="dropdown inline-block relative ml-3">
            <button class="w-10 h-10 mr-1.5 rounded-xl border bg-[#2368FB] text-white hover:text-[#2368FB] hover:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 ml-2.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <ul class="dropdown-menu absolute hidden rounded-xl text-gray-900 bg-gray-200 pt-1 mr-10">
              <li class="rounded-xl bg-gray-200 hover:bg-gray-400 py-2 px-10 text-left mr-10">
                <a href="/ta/dashboard">Tamil</a>
              </li>
              <li class="">
                <a
                  class="bg-gray-200 rounded-xl hover:bg-gray-400 py-2 px-10 block whitespace-no-wrap mr-10"
                  href="/hi/dashboard/"
                >
                  Hindi
                </a>
              </li>
              <li class="">
                <a
                  class="rounded-xl bg-gray-200 hover:bg-gray-400 py-2 px-10 block whitespace-no-wrap mr-10"
                  href="/dashboard"
                >
                  English
                </a>
              </li>
            </ul>
          </div>

          <button
            aria-label="notification"
            class="w-10 h-10 rounded-xl border bg-[#2368FB] text-white hover:text-[#2368FB] hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                fill-rule="evenodd"
                d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
