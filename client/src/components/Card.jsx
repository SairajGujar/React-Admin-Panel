import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, link, Icon }) => {
  const navigate = useNavigate()
  return (
    <div className="flex p-4  items-center justify-center rounded-md  shadow-lg flex-col gap-4 aspect-square h-[50vh] cursor-pointer  transition duration-300 hover:scale-105 transform bg-white border-[0.5px]">
      {<Icon className="text-blue-700" />}
      <span className="text-xl font-medium ">{title}</span>
      <button
        onClick={() => {
          navigate(`/enquiry/${link}`);
        }}
        className="text-white flex gap-2 justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Continue
      </button>
    </div>
  );
};

export default Card;
