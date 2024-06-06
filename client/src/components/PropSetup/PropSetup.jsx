import React from 'react'
import PropDetails from './PropDetails';
import { useState } from 'react';

const PropSetup = () => {
  const [pageno, setPageno] = useState(1);
    function renderSubSection(pageno){
        switch (pageno){
            case 1: 
                return <PropDetails setPageno={setPageno}/>
        }
    }
  return (
    <div className='min-h-[110vh] bg-gray-100'>
        {
            renderSubSection(pageno)
        }
    </div>
  )
}

export default PropSetup