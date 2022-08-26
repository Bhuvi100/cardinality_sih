import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import GrievanceForm from "../../components/greivanceForm";
import Loading from "../../components/Loading";
import axios from "../../utils/axios";

export default function UserHome() {
  const [search, setSearch] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const [faq, setFaq] = useState(false);
  const [modules, setModules] = useState(false);

  useEffect(() => {
    axios
      .get("/faq" + (search !== true ? `/${search}` : ""))
      .then((res) => setFaq(res.data));
  }, [search]);

  useEffect(
    () => {
      axios.get("/modules").then((res) => setModules(res.data.data))
    },
    []
  );

  if (faq === false) {
    return <Loading></Loading>;
  }

  if (isSelected) {
    return <GrievanceForm setSelected={setIsSelected} selected={isSelected}></GrievanceForm>;
  }

  return (
    <div>
      <NavBar currentMenu="Home" />
      <div className="mt-10 flex justify-center space-x-4">
        <div class="relative w-1/2">
          <input
            placeholder="Enter your grievance"
            class="w-full desc border-gray-300 mt-3 py-3 pl-3 pr-12  border-2 bg-white bg-opacity-60 text-md shadow-xl rounded-xl"
            onKeyUp={(e) => {
              setSearch(e.target.value);
            }}
          />

          <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 mt-2 opacity-60"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      {faq.length !== 0 ? (
        <div>
          <div className="mt-8 pl-8">
            <h1 className="text-xl title text-[#273339]">Similar grievances</h1>
            {faq.map((f, index) => (
              <div
                key={index}
                class="bg-white bg-opacity-50 border-white border-2 shadow-xl divide-y  rounded-xl mr-10 mt-3"
              >
                <details class="p-6 group ">
                  <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class=" text-[#273339] ">{f.subject}</h5>

                    <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 text-sm leading-relaxed text-gray-500">
                    {f.solution}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-20 text-center mb-8">
          <p>
            No similar grievances were found, please submit your grievance and
            we will reach back to you with a solution.
          </p>
          <div className="mt-8 pl-8">
            <h1 className="text-xl title text-[#273339]">
              Suggested Categories
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3">{modules.map((m, index) => <div key={index} className=" mt-4">
              <div
                  className="block overflow-hidden rounded-2xl w-80 shadow-xl"
                  onClick={() => setIsSelected(m.id)}
              >
                <img
                    className="object-cover w-full h-32"
                    src={m.image}
                />

                <div className="p-4 bg-white bg-opacity-50 border-white">
                  <h5 className="text-sm title text-[#273339]">
                    {m.name}
                  </h5>

                  <p className="mt-1 text-xs text-gray-500 desc">
                    {m.description}
                  </p>
                </div>
              </div>
            </div>)}</div>
          </div>
        </div>
      )}
    </div>
  );
}
