import React from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';


const PropDetails = () => {
  return (
    <div className="flex flex-col pl-28 pt-20 h-full">
      <span className="text-3xl font-semibold mb-5">Property Details</span>
      <div className="flex flex-col h-[400px] gap-4 w-[450px] bg-white py-5 border-[0.5px]">
        <p className="text-base mx-8">Where can people sleep?</p>
        <div className="flex mx-8 bg-white border-[0.5px] shadow-md hover:shadow-lg p-5 cursor-pointer">
          Bedroom 1
        </div>
        <div className="flex mx-8 bg-white border-[0.5px] shadow-md hover:shadow-lg p-5 cursor-pointer">
          Living room
        </div>
        <div className="flex mx-8 bg-white border-[0.5px] shadow-md hover:shadow-lg p-5 cursor-pointer">
          Other spaces
        </div>
        <span className="text-blue-600 w-fit mx-8 hover:underline cursor-pointer">
          Add bedroom
        </span>
      </div>
      <div className="flex flex-col h-fit py-6 w-[450px] bg-white my-4 justify-center gap-4 pl-3">
        <span>How many guests can stay?</span>
        <div className="flex border-[1px] border-solid border-black rounded-md w-fit justify-center items-center">
          <span className="px-5 py-2 text-blue-600 text-2xl cursor-pointer">
            -
          </span>
          <span className="px-5 py-2">1</span>
          <span className="px-5 py-2 text-blue-600 text-2xl cursor-pointer">
            +
          </span>
        </div>
        <span>How many bathrooms are there?</span>
        <div className="flex border-[1px] border-solid border-black rounded-md w-fit justify-center items-center">
          <span className="px-5 py-2 text-blue-600 text-2xl cursor-pointer">
            -
          </span>
          <span className="px-5 py-2">1</span>
          <span className="px-5 py-2 text-blue-600 text-2xl cursor-pointer">
            +
          </span>
        </div>
      </div>
      <div className="flex flex-col h-fit py-6 w-[450px] bg-white mb-4 justify-center gap-4 pl-3">
        <span>Do you allow children?</span>
        <div className="flex w-fit m-5 gap-4">
          <div class="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class=" text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ms-2 text-sm font-medium text-black"
            >
              Yes
            </label>
          </div>
          <div class="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class=" text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ms-2 text-sm font-medium text-black"
            >
              No
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setPageno((prev) => {
              if (prev > 1) return prev - 1;
              else return prev;
            });
          }}
          className="text-gray-600 flex gap-2 justify-center  border-[1px] border-blue-600 bg-slate-200 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center  "
        >
          <ArrowBackIosNewOutlinedIcon
            fontSize="small"
            className="text-blue-500"
          />
        </button>
        <button
          onClick={() => {
            setPageno((prev) => {
              if (prev < 3) {
                return prev + 1;
              } else {
                return prev;
              }
            });
          }}
          className="text-white flex gap-2 justify-center bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PropDetails;
