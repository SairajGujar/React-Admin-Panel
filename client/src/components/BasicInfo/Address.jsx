import React from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const Address = ({setPageno}) => {
  return (
    <div className="pt-16 pl-28 flex flex-col gap-4">
      <div className="text-3xl font-bold">Where is the property you're listing?</div>
      <div className="p-5 min-h-[300px] border-[0.5px] w-[500px] bg-white flex flex-col gap-5">
        <span className='text-sm'>We may send a letter to confirm the location of your property, so make sure that the address is correct – it’s difficult to make changes to this later.</span>
        <div>
          <label
            for="PropName"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Country/region <span className='text-[15px] text-red-500'>*</span>
          </label>
          <select
            id="PropName"
            class=" outline-none border-[0.5px] bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5   dark:placeholder-gray-400  "
            placeholder="India"
            required
          />
        </div>
        <div>
          <label
            for="PropName"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Street name and house number <span className='text-[15px] text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="PropName"
            class=" outline-none border-[0.5px] bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5   dark:placeholder-gray-400  "
            placeholder="Start typing your address"
            required
          />
        </div>
        <div>
          <label
            for="PropName"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Zip code
          </label>
          <input
            type="text"
            id="PropName"
            class=" outline-none border-[0.5px]  border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5   dark:placeholder-gray-400  "
            required
          />
        </div>
        <div>
          <label
            for="City"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            City <span className='text-[15px] text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="City"
            class=" outline-none border-[0.5px]  border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5   dark:placeholder-gray-400  "
            required
          />
        </div>
      </div>
      <div className="flex gap-2">
      <button onClick={()=>{
        setPageno(prev=>{
            if(prev>1) return prev-1;
            else return prev
        })
      }} className="text-gray-600 flex gap-2 justify-center  border-[1px] border-blue-600 bg-slate-200 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center  ">
      <ArrowBackIosNewOutlinedIcon fontSize="small" className="text-blue-500"/>
        </button>
        <button onClick={()=>{
            setPageno((prev)=>{
                if(prev<3){
                    return prev+1
                }
                else{
                    return prev
                }

            })
        }} className="text-white flex gap-2 justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Continue
        </button>
      </div>
    </div>
  )
}

export default Address