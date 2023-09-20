import React from 'react'
import PropTypes  from "prop-types"
import Card from '../Card/Card'
import Modal from '../Modal/Modal'
import {useState} from 'react'

function Progress({percent, color, logo, skill, children}) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  function toggleModal(){
    setOpen(!open);
  }
  function changeTextAtHover(){
    setHover(!hover)
  }
  return (
    <div className='w-full px-4 lg:w-full lg:px-16 mt-4 h-8 mb-0  cursor-pointer' onClick={toggleModal}>
        <div onMouseEnter={changeTextAtHover} onMouseLeave={changeTextAtHover} className='bg-white  relative h-10 w-full rounded-md mb-8 bottom-4 brightness-100 hover:brightness-120 scale-100 hover:scale-105'>
          <div className={`absolute top-0 left-0 flex h-full  items-center justify-between rounded-md text-xs  text-`} style={{backgroundColor:`${color}`,width:`${percent}`}}>
            {!hover ? <p className='font-serif text-xs absolute left-1/2'>{skill}</p> : <p className='font-serif text-xs absolute left-1/2 bg-white bg-opacity-60 rounded-lg px-2'>OPEN</p>}
         <p className='absolute right-1'>{percent}</p>
         <img src={logo} alt={'logo' + skill} className='font-lora mx-2 w-14 h-full absolute -left-2'/>
        </div>
      </div>
      {open &&
      <Modal open={open} onClose={() => setOpen(false)} children={<Card logo={logo} title={skill} content={children}/>}/>}
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