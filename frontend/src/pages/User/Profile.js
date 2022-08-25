import NavBar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
export default function Profile() {
  return (
    <div>
      <div class="w-full">
        <NavBar currentMenu="Profile" />

        <div class="px-6 pt-6 2xl:container">
          <div class="mt-10 sm:mt-0">
            <div class="md:w-3/4">
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white bg-opacity-60 sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="name"
                            class="block desc text-md font-medium text-gray-700 desc"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autocomplete="given-name"
                            class="mt-1 desc focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value="Krunal Pandey"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="email-address"
                            class="block desc text-md font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autocomplete="email"
                            class="mt-1 desc focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value="krunal01@gmail.com"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="mobile"
                            class="block text-md desc font-medium text-gray-700"
                          >
                            Mobile Number
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            id="mobile"
                            autocomplete="mobile"
                            class="mt-1 desc focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value="9182837465"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="user_role"
                            class="block text-md desc font-medium text-gray-700"
                          >
                            User Role
                          </label>
                          <select
                            id="user_role"
                            name="user_role"
                            autocomplete="user_role"
                            class="mt-1 block w-full desc p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-800 hover:border-2 sm:text-sm"
                            value="Student"
                          >
                            <option className="desc">
                              Institute/University
                            </option>
                            <option>Student</option>
                            <option>Participant (ATAL)</option>
                            <option>Coordinator (ATAL)</option>
                            <option>Faculty</option>
                            <option>Other</option>
                          </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="state"
                            class="block text-lg font-medium text-gray-700"
                          >
                            Institute State / UT
                          </label>
                          <select
                            id="state"
                            name="state"
                            autocomplete="state"
                            class="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-800 hover:border-2 sm:text-sm"
                            value="Delhi"
                          >
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jammu and Kashmir</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                            <option>Andaman and Nicobar Islands</option>
                            <option>Chandigarh</option>
                            <option>Dadra and Nagar Haveli</option>
                            <option>Daman and Diu</option>
                            <option>Delhi</option>
                            <option>Ladakh</option>
                            <option>Lakshadweep</option>
                            <option>Puducherry</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex mr-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                      >
                        Edit
                      </button>
                      <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
