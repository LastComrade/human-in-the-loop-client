import React from "react";
import { Link } from "react-router-dom";

const AudioCard = () => {
  return (
    <Link to="/data-audio">
      <div className="cursor-pointer transition duration-200 group hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
        <div className="mb-8">
          <i className="text-white duration-200 group-hover:text-black text-5xl lni lni-music"></i>
        </div>
        <div className="text-center">
          <p className="text-xl group-hover:text-black text-white font-bold mb-2">
            Audio
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AudioCard;
