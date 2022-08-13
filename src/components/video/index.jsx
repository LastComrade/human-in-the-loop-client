import React from "react";
import { Link } from "react-router-dom";

const VideoCard = () => {
  return (
    <Link to="/data-video">
      <div className="cursor-pointer transition duration-200 group hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
        <div className="mb-8">
          <i className="text-white duration-200 group-hover:text-black text-5xl lni lni-image"></i>
        </div>
        <div className="text-center">
          <p className="text-xl group-hover:text-black text-white font-bold mb-2">
            Video
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
