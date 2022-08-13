import React from "react";
import { useNavigate } from "react-router-dom";

const TextCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/text")}
      className="cursor-pointer transition duration-200 group hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
    >
      <div className="mb-8">
        <i className="text-white duration-200 group-hover:text-black text-5xl lni lni-text-align-center"></i>
      </div>
      <div className="text-center">
        <p className="text-xl group-hover:text-black text-white font-bold mb-2">
          Text
        </p>
      </div>
    </div>
  );
};

export default TextCard;
