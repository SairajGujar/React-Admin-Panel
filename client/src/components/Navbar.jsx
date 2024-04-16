import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import avatar from '../assets/avatar.jpg'
const Navbar = () => {
  return (
    <div className="h-[51px] border-[0.5px] flex items-center text-[14px] text-[#555]">
      <div className="flex items-center p-[20px] justify-between w-full">
        <div className="flex items-center border-[0.5px] border-gray-200 p-[3px] ">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className='outline-0 bg-transparent placeholder:text-[12px]'
          />
          <SearchOutlinedIcon className='text-[20px]'/>
        </div>
        <div className="items flex items-center">
          <div className="flex items-center mr-[20px]">
            <LanguageOutlinedIcon className='text-[20px]'/>
            English
          </div>
          <div className="flex items-center mr-[20px]">
            <DarkModeOutlinedIcon className='text-[20px]'/>
          </div>
          <div className="flex items-center mr-[20px]">
            <FullscreenExitOutlinedIcon className='text-[20px]'/>
          </div>
          <div className="flex items-center mr-[20px] relative">
            <NotificationsNoneOutlinedIcon className='text-[20px]'/>
            <div className="h-[15px] w-[15px] bg-red-500 rounded-full text-white flex items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">10</div>
          </div>
          <div className="flex items-center mr-[20px] relative">
            <ChatBubbleOutlineOutlinedIcon className='text-[20px]'/>
            <div className="h-[15px] w-[15px] bg-red-500 rounded-full text-white flex items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">2</div>
          </div>
          <div className="flex items-center mr-[20px]">
            <ListOutlinedIcon className='text-[26px]'/>
          </div>
          <div className="flex items-center mr-[20px]">
            <img className="rounded-full h-[30px] w-[30px]" src={avatar} alt="?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
