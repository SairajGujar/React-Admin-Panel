import React, { useState } from 'react'
import Location from './Location';
import Address from './Address';
import PropName from './PropName';

const BasicInfo = () => {
    const [pageno, setPageno] = useState(1);
    function renderSubSection(pageno){
        switch (pageno){
            case 1: 
                return <PropName setPageno={setPageno}/>
            case 2:
                return <Address setPageno={setPageno}/>
            case 3:
                return <Location setPageno={setPageno}/>
        }
    }
    console.log(pageno)
  return (
    <div className='min-h-[110vh] bg-gray-100'>
        {
            renderSubSection(pageno)
        }
    </div>
  )
}

export default BasicInfo