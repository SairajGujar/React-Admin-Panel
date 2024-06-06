import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TabBar = () => {
  return (
    <div className='w-full bg-gray-50 grid grid-cols-5 h-[55px] items-center'>
        <Link to="/enquiry/apartment/basic_info" className='hover:bg-gray-300 hover:text-blue-600 cursor-pointer h-full hover:bg-opacity-40 flex items-center justify-center font-light'>Basic Info</Link>
        <Link to="/enquiry/apartment/setup_info" className='hover:bg-gray-300 hover:text-blue-600 cursor-pointer h-full hover:bg-opacity-40 flex items-center justify-center font-light'>Property Setup Info</Link>
        <Link to="/enquiry/apartment/photos" className='hover:bg-gray-300 hover:text-blue-600 cursor-pointer h-full hover:bg-opacity-40 flex items-center justify-center font-light'>Photos</Link>
        <Link to="/enquiry/apartment/pricing" className='hover:bg-gray-300 hover:text-blue-600 cursor-pointer h-full hover:bg-opacity-40 flex items-center justify-center font-light'>Pricing</Link>
        <Link to="/enquiry/apartment/legal_info" className='hover:bg-gray-300 hover:text-blue-600 cursor-pointer h-full hover:bg-opacity-40 flex items-center justify-center font-light'>Legal Info</Link>
    </div>
  )
}


export default TabBar