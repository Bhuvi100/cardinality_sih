import { Link } from "react-router-dom";
export default function AdminSideBar() {
  return (
    <div class="fixed top-0 bottom-0 z-10 h-screen bg-blue-500 overflow-hidden ">
      <div class="sidebar border-r border-blue-500 md:w-60 w-16 ">
        <div class="flex flex-col justify-between pt-2 overflow-hidden">
          <div className="mt-6">
            <ul class="mt-8 space-y-2 tracking-wide">
              <li class="min-w-max hover:bg-white">
                <div class="md:ml-2">
                  <Link
                    to="/admin"
                    aria-label="dashboard"
                    class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black"
                  >
                    <svg
                      class="w-9 h-10 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="-mr-1 font-medium text-xl md:block hidden">
                      Dashboard
                    </span>
                  </Link>
                </div>
              </li>

              <li class="min-w-max hover:bg-white">
                <div class="md:ml-2">
                  <Link
                    to="/admin"
                    aria-label="dashboard"
                    class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-people-fill w-9 h-10 md:w-6 md:h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                      />
                      <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                    <span class="-mr-1 font-medium text-xl md:block hidden">
                      General Users
                    </span>
                  </Link>
                </div>
              </li>

              <li class="min-w-max hover:bg-white">
                <div class="md:ml-2">
                  <Link
                    to="/admin"
                    aria-label="dashboard"
                    class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-person-workspace w-9 h-10 md:w-6 md:h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                    </svg>
                    <span class="-mr-1 font-medium text-xl md:block hidden">
                      Institute SPOCs
                    </span>
                  </Link>
                </div>
              </li>

              <li class="min-w-max hover:bg-white">
                <div class="md:ml-2">
                  <Link
                    to="/admin"
                    aria-label="dashboard"
                    class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-search w-9 h-10 md:w-6 md:h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <span class="-mr-1 font-medium text-xl md:block hidden">
                      Resolvers
                    </span>
                  </Link>
                </div>
              </li>

              <li class="min-w-max hover:bg-white">
                <div class="md:ml-2">
                  <Link
                    to="/admin"
                    aria-label="dashboard"
                    class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black"
                  >
                    <svg
                      class="w-9 h-10 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="-mr-1 font-medium text-xl md:block hidden">
                      Modules
                    </span>
                  </Link>
                </div>
              </li>

              <li class="min-w-max hover:bg-white">
                <div class="md:ml-2">
                  <Link
                    to="/admin"
                    aria-label="dashboard"
                    class="relative flex items-center space-x-4  px-4 py-3 text-white hover:text-black"
                  >
                    <svg
                      class="w-9 h-10 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="-mr-1 font-medium text-xl md:block hidden">
                      All Queries
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
