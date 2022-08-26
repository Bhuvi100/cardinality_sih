import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import NewModule from "./NewModule";
import {useEffect} from "react";
import axios from "../../utils/axios";
import Loading from "../../components/Loading";

export default function AdminModules() {
  const [query, setQuery] = useState(0);

  const [newModule, setNewModule] = useState(false)
  const [modules, setModules] = useState(false);

  useEffect(
      () => {
        axios.get("/modules").then((res) => setModules(res.data.data))
      },
      []
  );

  if (modules === false) {
    return <Loading></Loading>
  }

  return (
    <div>
      <NavBar currentMenu="Modules" />

      { newModule ? <NewModule></NewModule> :
        <div>
          <button class="flex flex-row bg-white ml-6 hover:bg-blue-500 text-blue-700 font-bold mt-3 hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded-xl" onClick={() => setNewModule(true)}>Add New Module</button>
          <div class="px-6 pt-6 2xl:container">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
              <div className="grid grid-cols-3">{modules.map((m, index) => <div key={index} className=" mt-4">
                <div
                    className="block overflow-hidden rounded-2xl w-80 shadow-xl"
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
        </div>}
    </div>
  );
}
