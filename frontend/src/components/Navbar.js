import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div class=" h-16  lg:py-2.5">
      <div class="px-6 flex items-center justify-between 2xl:container">
        <h5 class="mt-2 title text-3xl ml-1 text-[#2368FB]  md:block">
          {props.currentMenu ?? "Dashboard"}
        </h5>
        <div class="flex mt-3 md:mt-0">
          <button
            aria-label="notification"
            class="w-10 h-10 rounded-xl border bg-[#2368FB] text-white hover:text-[#2368FB] hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 m-auto "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <Link
            to="/landing"
            class="ml-2 flex justify-center w-10 h-10 rounded-xl group flex items-center space-x-4 bg-[#2368FB] text-white hover:text-[#2368FB] hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                clip-rule="evenodd"
              />
            </svg>

            {/* <span class="-mr-1 font-medium text-lg md:block hidden">Logout</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
