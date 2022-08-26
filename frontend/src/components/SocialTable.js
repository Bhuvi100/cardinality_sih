import { useEffect } from "react";
import axios from "../utils/axios";
import React, { useState } from "react";
import Loading from "./Loading";
import { toast } from "react-toastify";
import auth from "../utils/auth";

export default function SocialTable(props) {
  const [queries, setQueries] = useState([]);
  const [reply, setReply] = useState("");

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8082/tweet", {
        keyword: props.keyword ?? "samarthanbot",
        count: 10,
      })
      .then((res) => {
        setQueries(res.data);
      });
  }, []);

  if (queries.length === 0) {
    return <Loading></Loading>;
  }

  function handleResolved(id, noted = false) {
    let data = {
      tweetid: `1563102414454280193`,
      text: noted ? "" : reply
    };

    toast.promise(axios.post("http://127.0.0.1:8082/tweetaccepted", data), {
      pending: {
        render() {
          return "Tweeting reply...";
        },
      },
      success: {
        render({ data }) {
          return "Reply sent successfully";
        },
      },
      error: {
        render({ data }) {
          let status = data.response.status;
          data = data.response.data;
          if (status === 422) {
            return Object.values(data.errors)[0].toString();
          } else {
            return "Something went wrong!";
          }
        },
      },
    });
  }

  return (
    <div>
      <button
        class="px-3 py-1 mb-3 text-blue-600 font-semibold hover:bg-blue-500 hover:text-white bg-white border-2 border-blue-500 rounded-xl"
        onClick={() => props.setModtable(0)}
      >
        Back
      </button>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead class=" title text-gray-900 uppercase text-lg bg-[#E4EAEB]  dark:text-[#273339]">
            <tr>
              <th scope="col" class="px-5 py-5">
                Username
              </th>
              <th scope="col" class="px-5 py-5">
                Summary
              </th>
              <th scope="col" class="px-5 py-5">
                Posted At
              </th>
              <th scope="col" class="px-5 py-5 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {queries.map((query, index) => (
              <tr
                key={index}
                class=" text-lg  font-normal  text-[#273339] dark:border-gray-800 bg-white bg-opacity-50"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-semibold  whitespace-nowrap "
                >
                  {query.user_id}
                </th>
                <td class="px-5 py-4">{query.tweet}</td>
                <td class="px-5 py-4 text-base font-semibold">
                  {query.posted_at}
                </td>

                <td class="px-5 py-4">
                  <div className="flex flex-row gap-3 justify-center">
                    <a
                      href={query.url}
                      class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border-2 border-blue-500 hover:border-transparent rounded"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleResolved(query.tweet_id, 1)}
                      class="flex flex-row bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border-2 border-yellow-500 hover:border-transparent rounded"
                    >
                      Noted
                    </button>
                    <div>
                      <input
                        type={"text"}
                        name={"text"}
                        className="mb-3"
                        onChange={(e) => setReply(e.target.value)}
                      />
                      <button
                        onClick={() => handleResolved(query.tweet_id)}
                        type="submit"
                        class="flex flex-row bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-3 border-2 border-green-500 hover:border-transparent rounded"
                      >
                        Resolved
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
