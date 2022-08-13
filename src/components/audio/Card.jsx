import React from "react";
import { Link } from "react-router-dom";

const AudioCard = ({ data }) => {
  return (
    <Link to={`/audio-annotate/${data.id}`}>
      <div className="w-80 bg-white pb-2 rounded group hover:bg-blue-900 text-black hover:text-white duration-200">
        <img
          alt="Some text"
          className="h-52 w-full object-cover rounded"
          src={data.urls}
        />
        <ul className="pt-3 px-3 items-center flex justify-between">
          <li className="mr-2">
            <div className="cursor-pointer text-red-900 group-hover:text-red-300 flex">
              {data.accuracy === 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-800 group-hover:text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                  />
                </svg>
              )}
              <span
                className={
                  data.accuracy === 1
                    ? "text-green-800 group-hover:text-green-300"
                    : "text-red-900 group-hover:text-red-300"
                }
              >
                {data.accuracy === 1 ? "" : data.accuracy}
              </span>
            </div>
          </li>
          <li>
            <div className="cursor-pointer flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {data.user}
            </div>
          </li>
          <li className="mr-2">
            <div className="cursor-pointer flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              {data.labels.split(",").length}
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default AudioCard;
