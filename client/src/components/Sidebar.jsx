import React from "react";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {

  return (
    <div className="flex-[1] border-r min-h-[100vh] bg-white">
      <div className="h-[50px] flex items-center justify-center">
        {/* top */}
        <span className='text-[20px] font-bold text-violet-600'>Adminel</span>
      </div>
      <hr className="h-0 border-[0.5px] border-grey"/>
      
      <div className='pl-[10px]'>
        {/* center */}
        <ul>
          <p className='text-[10px] font-bold text-gray-400 mt-[14px] mb-[5px]'>MAIN</p>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
            <DashboardOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Dashboard</span>
          </li>
          <p className='text-[10px] font-bold text-gray-400 mt-[14px] mb-[5px]'>LISTS</p>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <PersonOutlineOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Users</span>
          </li>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <StoreMallDirectoryOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Products</span>
          </li>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <LocalMallOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Orders</span>
          </li>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <LocalShippingOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Delivery</span>
          </li>
          <p className='text-[10px] font-bold text-gray-400 mt-[14px] mb-[5px]'>USEFUL</p>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <AssessmentOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Stats</span>
          </li>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <NotificationsNoneOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Notification</span>
          </li>
          <p className='text-[10px] font-bold text-gray-400 mt-[14px] mb-[5px]'>SERVICES</p>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <MonitorHeartOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>System Health</span>
          </li>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <PsychologyOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Logs</span>
          </li>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <SettingsOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Setting</span>
          </li>
          <p className='text-[10px] font-bold text-gray-400 mt-[14px] mb-[5px]'>USER</p>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <AccountCircleOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Profile</span>
          </li>
          <li className="flex items-center px-5 cursor-pointer hover:bg-violet-300">
          <LogoutOutlinedIcon className='text-[18px] text-violet-600'/>
            <span className='text-[14px] font-semibold ml-[10px] text-gray-400'>Logout</span>
          </li>
        </ul>
      </div>
      <div className="flex m-[10px] gap-2">{/* bottom */}
        <div className="w-[20px] h-[20px] border-[1px] border-violet-500 cursor-pointer bg-white rounded-[5px]">

        </div>
        <div className="w-[20px] h-[20px] border-[1px] border-violet-500 cursor-pointer bg-black rounded-[5px]">

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
