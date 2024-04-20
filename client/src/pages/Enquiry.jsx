import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import HouseIcon from '@mui/icons-material/House';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
const Enquiry = () => {
  return (
    <div className='w-full h-[92vh]'>
        <Navbar/>
        <div className='flex flex-col justify-center items-center w-full h-full bg-[#f8f8f8]'>
            <span className='font-semibold text-3xl m-4 '>List your property on Travel.com and start earning in no time!</span>
            <span className='text-2xl'>To get started, select the type of service you want to list on Travel.com</span>
            <div className="container flex gap-10 justify-center  items-center h-full">
                <Card title={"Apartment"} Icon={HouseIcon} link="apartment/basic_info"/>
                <Card title={"Transportation Facility"} link="transport" Icon={DirectionsBusIcon}/>
            </div>
        </div>
    </div>
  )
}

export default Enquiry