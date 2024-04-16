import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex flex-[6] flex-col'>
        <Navbar/>
        Home container
      </div>
    </div>
  )
}

export default Home