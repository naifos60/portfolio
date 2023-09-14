import React from 'react'
import PropTypes  from "prop-types"
import Card from '../Card/Card'
import Modal from '../Modal/Modal'
import {useState} from 'react'

function Progress({percent, color, logo, skill, content}) {
  const [open, setOpen] = useState(false);

  function toggleModal(){
          setOpen(!open);
  }
  return (
    <div className='w-full px-4 lg:w-5/12 mt-4 h-8 mb-0 md:mb-4 cursor-pointer ' onClick={toggleModal}>
        <div className='bg-white  relative h-10 w-full rounded-2md mb-8 bottom-4'>
          <div className={`absolute top-0 left-0 flex h-full  items-center justify-between rounded-2md text-xs  text-white`} style={{backgroundColor:`${color}`,width:`${percent}`}}>
         <p className='font-serif text-xs absolute left-1/2'>{skill}</p>
         <p className='absolute right-1'>{percent}</p>
         <img src={logo} alt="logo skill" className='font-lora mx-2 w-14 h-full absolute -left-2'/>
        </div>
      </div>
      {open &&
      <Modal open={open} onClose={() => setOpen(false)} children={<Card logo={logo} title={skill} content={content}/>}/>}
    </div>
    

  )
}

Progress.propsTypes = {
  percent: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
}

export default Progress