import React from 'react'
import Navbar from '../components/Navbar'
import TabBar from '../components/TabBar'
import { useParams } from 'react-router-dom'
import BasicInfo from '../components/BasicInfo/BasicInfo'
import PropSetup from '../components/PropSetup/PropSetup'
import Photos from '../components/Photos'
import Pricing from '../components/Pricing'

const Apartment = () => {
    const {section} = useParams()
    console.log(section)
    function renderSwitch(section) {
        switch(section) {
            case 'basic_info':
                return <BasicInfo/>;
            case 'setup_info':
                return <PropSetup/>;
            case 'photos':
                return <Photos/>;
            case 'pricing':
                return <Pricing/>;
            case 'legal_info':
                return 'legal';
            
        }
      }
  return (
    <div className='h-[92vh]'>
        <Navbar/>
        <TabBar/>
        {
            renderSwitch(section)
        }
    </div>
  )
}

export default Apartment