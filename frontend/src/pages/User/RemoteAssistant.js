import React, { useState } from "react";
import NavBar from "../../components/Navbar";

export default function RemoteAssistant() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <NavBar currentMenu="Remote assistance" />
      {step == 1 && (
        <div className="mt-10 flex justify-center space-x-5">
          <div className="bg-white rounded-lg p-10">
            <h1 className="title text-xl text-center">
              Schedule remote assistance
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Enter your prefered date and time
            </p>
            <div className="flex justify-center mt-4">
              <input
                type="date"
                className="border-2 flex justify-center rounded-xl p-2"
              />
            </div>
            <div className="flex justify-center mt-4">
              <input
                type="time"
                className="border-2 flex justify-center rounded-xl p-2"
              />
            </div>
            <p className="desc text-center text-gray-500 mt-6 underline">
              <a href="https://join.zoho.com/418617324">or schedule now</a>
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setStep(2)}
                className="bg-[#2368FB] text-white p-2 rounded-xl title"
              >
                Confirm
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-10">
            <h1 className="title text-xl text-center mb-10">
              Connect existing host
            </h1>

            <iframe
              width="100%"
              height="150px"
              src="https://assist.zoho.com/login/embed-remote-support.jsp"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="mt-10 flex justify-center space-x-5">
          <div className="bg-white rounded-lg p-10">
            <button onClick={() => setStep(1)} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <h1 className="title text-xl text-center">
              Join the remote assistance
            </h1>
            <p className="mt-2 text-center desc text-gray-600">
              Use the below session ID or link to join the remote assistance.
            </p>
            <p className="mt-6 text-center text-2xl title text-[#2368FB] mb-4">
              395 495 122
            </p>
            <hr />
            <div className="flex justify-center">
              <a
                href="              https://join.zoho.com/418617324
"
                className="mt-6 text-center underline text-xl title text-[#2368FB] mb-4"
              >
                https://join.zoho.com/418617324
              </a>
            </div>
            <p className="mt-2 text-center desc text-gray-600">
              By joining, you agree to share access to your desktop and all the
              files with the administrator.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
