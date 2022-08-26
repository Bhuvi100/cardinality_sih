import { useState, useEffect, useRef } from "react";
import SelectSearch from "react-select-search";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import auth from "../utils/auth";
import "react-toastify/dist/ReactToastify.css";
import RouteHelper from "../utils/routeHelper";

export default function Register() {
  const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bhopal",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "The Dadra and Nagar Haveli and Daman and Diu",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const password = useRef(null);
  const confirm_password = useRef(null);

  const [a, setA] = useState(null);
  const [isInstitute, setIsInstitute] = useState(false);
  const [state, setState] = useState("");
  const [institute, setInstitute] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function check_pass() {
    if (confirm_password.current.value === password.current.value) {
      setA(true);
    } else {
      setA(false);
    }
  }

  function getColleges(query) {
    if (query === "") {
      return [
        {
          name: institute?.name ?? "Please enter institute name",
          value: institute?.value ?? "",
        },
      ];
    }
    return new Promise((resolve, reject) => {
      axios
        .get(`colleges/${state}/${query}`)
        .then((response) =>
          resolve([...response.data.data, { value: "other", name: "Other" }])
        )
        .catch((error) => reject(error));
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    let data = new FormData(e.target);
    data.append("institute_name", institute?.name);

    toast.promise(auth().register(data), {
      pending: {
        render() {
          setIsLoading(true);
          return "Registering......";
        },
      },
      success: {
        render({ data }) {
          setIsLoading(false);
          setTimeout(() => {
            // auth().setToken(data.data);
            RouteHelper.redirect("/login");
          }, 5000);
          return "Registered successfully! Please login to continue.";
        },
      },
      error: {
        render({ data }) {
          setIsLoading(false);
          let status = data.response.status;
          data = data.response.data;
          if (status === 422) {
            Object.entries(data.errors).forEach(([key, value]) => {
              let v = value[0];
              toast.error(v.toString(), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });

            return "There were errors in some fields";
          } else {
            return "Something went wrong!";
          }
        },
      },
    });
  }

  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500 py-6 sm:py-12">
        <div class=" visible relative bg-white px-6 pt-10 pb-8 shadow-2Exl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="divide-y divide-gray-300/50">
            <h3 class="text-2xl text-center font-bold mb-2">
              USER REGISTRATION
            </h3>
            <div class="space-y-6 py-8">
              <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                <div class="flex flex-wrap -mx-3 ">
                  <div class="w-full px-3">
                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                      FULL NAME
                      <span className="text-red-400">&nbsp;* </span>
                    </label>
                    <div class="flex mb-3">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="******************"
                        required
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-3">
                  <div class="w-full px-3">
                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                      EMAIL
                      <span className="text-red-400">&nbsp;* </span>
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="username@domain.com"
                        required
                        name="email"
                      />
                    </div>
                  </div>{" "}
                </div>
                <div class="flex flex-wrap -mx-3 mb-3">
                  <div class="w-full px-3">
                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                      MOBILE NUMBER
                      <span className="text-red-400">&nbsp;* </span>
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-phone-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        required
                        name="mobile"
                      />
                    </div>{" "}
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-full px-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                          PASSWORD
                          <span className="text-red-400">&nbsp;* </span>
                        </label>
                        <div class="flex">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="password"
                            id="password"
                            ref={password}
                            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none active:border-blue-500 focus:border-green-400"
                            placeholder="************"
                            required
                            name="password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-full px-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                          CONFIRM PASSWORD
                          <span className="text-red-400">&nbsp;* </span>
                        </label>
                        <div class="flex">
                          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                          </div>
                          <input
                            type="password"
                            id="confirm_password"
                            ref={confirm_password}
                            onChange={() => check_pass()}
                            class={
                              "w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 " +
                              (a === true
                                ? "border-green-400"
                                : password?.current?.value === ""
                                ? ""
                                : "border-red-400")
                            }
                            placeholder="************"
                            required
                            name="password_confirmation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        htmlFor="roles"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        USER ROLE
                        <span className="text-red-400">&nbsp;* </span>
                      </label>

                      <select
                        className=" text-sm rounded-lg block w-full p-2.5 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        onChange={(e) =>
                          setIsInstitute(e.target.value === "institute")
                        }
                        name="role"
                      >
                        <option>Select an option</option>
                        <option value="institute">Institute/University</option>
                        <option value="student">Student</option>
                        <option value="participant(ATAL)">
                          Participant(ATAL)
                        </option>
                        <option value="coordinator(ATAL)">
                          Coordinator(ATAL)
                        </option>
                        <option value="faculty">Faculty</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        htmlFor="roles"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        INSTITUTE STATE/UT
                        <span className="text-red-400">&nbsp;* </span>
                      </label>
                      <select
                        className=" text-sm rounded-lg block w-full p-2.5 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        name="state"
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option>Select an option</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      htmlFor="roles"
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Select Institute
                      <span className="text-red-400">&nbsp;* </span>
                    </label>
                    <SelectSearch
                      search={true}
                      value={institute.value}
                      onChange={(value, obj) => {
                        setInstitute(obj);
                      }}
                      autoComplete={"on"}
                      debounce={500}
                      getOptions={getColleges}
                      className={
                        "w-full p-2.5 border rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      }
                      placeholder={"Please select an institute"}
                      options={[
                        { name: "Please enter institute name", value: "" },
                      ]}
                    />
                  </div>
                  {isInstitute && (
                    <div>
                      <div className="flex flex-wrap -mx-3 mt-5 mb-3">
                        <div className="w-full px-3">
                          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                            Institute Code:
                            <span className="text-red-400">&nbsp;* </span>
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-phone-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="************"
                              required
                              name="institute_code"
                            />
                          </div>{" "}
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                          <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                            Verification Letter
                            <span className="text-red-400">&nbsp;* </span>
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-phone-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="************"
                              required
                              name="verification_document"
                              type="file"
                              accept=".pdf"
                            />
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div class="flex items-center justify-center">
                  <button
                    type="submit"
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    {isLoading ? "Submitting" : "Submit"}
                  </button>
                </div>
                <p class="desc text-gray-500 text-center mt-4">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600">
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
