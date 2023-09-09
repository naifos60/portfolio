import React from 'react'
import PropTypes  from "prop-types";

function Progress({percent}) {
  return (
    <div className='w-full px-4 lg:w-5/12 mt-4 h-4 mb-4'>
      <div className='mb-8'>
        <div className='bg-[hsl(218,81%,75%)] relative h-4 w-full rounded-2xl'>
          <div className={`bg-[hsl(218,81%,95%)] absolute top-0 left-0 flex h-full  items-center justify-center rounded-2xl text-xs  text-blue-night`} style={{width:`${percent}`}}>
         {percent}
          </div>
        </div>
      </div>
    </div>
  )
}

Progress.propsTypes = {
  percent: PropTypes.string.isRequired,
}

export default Progress