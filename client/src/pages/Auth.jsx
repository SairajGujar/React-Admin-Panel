import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CircularProgress from '@mui/material/CircularProgress';
import toast from "react-hot-toast";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Auth = () => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar/>
      <div className="wrapper bg-slate-100 min-h-[100vh] items-center justify-center flex flex-col gap-3">
        <p className="text-4xl font-semibold">Become A Partner</p>
        <div className="h-[83vh] relative p-5 bg-[#ffffff] w-[50%] shadow-lg flex flex-col justify-center items-center gap-2">
        {
          verify?<Tooltip title="Back">
          <ArrowBackIcon className="absolute top-7 left-10 hover:bg-slate-200 cursor-pointer hover:rounded-full"  onClick={()=>{
            setVerify(false)
          }}/>
        </Tooltip>
          :null
        }
          {verify ? (

            <form>
              <div className="grid gap-5 mb-2 md:grid-cols-1">
                <div>
                  <label
                    for="mobile_otp"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Mobile number OTP
                  </label>
                  <input
                    type="text"
                    id="mobile_otp"
                    class=" border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1234"
                    required
                  />
                  <span className="text-sm text-lime-600 cursor-pointer">Resend OTP</span>
                </div>
                <div>
                  <label
                    for="email_otp"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    E-mail OTP
                  </label>
                  <input
                    type="text"
                    id="email_otp"
                    class=" border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1234"
                    required
                  />
                  <span className="text-sm text-lime-600 cursor-pointer">Resend OTP</span>
                </div>
                <button onClick={(e)=>{
                  e.preventDefault()
                  setLoading(true);
                  setTimeout(()=>{
                    setLoading(false);
                  }, 2000)
                  toast.success("User verified")
                  navigate('/enquiry')
                  
                }} className="text-white flex gap-2 justify-center bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {
                  loading?<CircularProgress color="inherit" size='20px'/>:<p>Verify</p>
                }
              </button>
              </div>
            </form>
          ) : (
            <form>
              <div className="grid gap-5 mb-2 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class=" border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-white-900 "
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-45-678"
                    required
                  />
                </div>
              </div>
              <div class="mb-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div class="mb-2">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="confirm_password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
              </div>

              <button onClick={()=>{
                setVerify(true)
              }} className="text-white flex gap-2 justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Continue
                <ArrowRightAltIcon />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
