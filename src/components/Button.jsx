import React from 'react'
import { useState } from 'react'

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
  <>
  <button onClick={handleClick} class="hasCircle w-[160px] h-[150px] flex items-center relative overflow-hidden">
    <div className={`${isClicked ? 'bg-[#272E4C] translate-y-[55px]' : ' bg-[#3D85BC]  translate-y-[-55px]'} h-[175px] w-[160px] absolute transition-all duration-1000`}>
      <div className='flex flex-col h-full justify-between'>
        <div className='w-full'>
          <div className='flex items-center justify-around text-white'>
            <div>
              <span className='text-[10px]'>&#10022;</span>
            </div>
            <div>
              <span className='text-[4px]'>&#10022;</span>
            </div>
            <div>
              <span className='text-[7px]'>&#10022;</span>
            </div>
            <div>
              <span className='text-[4px]'>&#10022;</span>
            </div>
            <div>
              <span className='text-[1px]'>&#10022;</span>
            </div>
          </div>
          <div className='flex items-center justify-around text-white'>  
            <div>
              <span className='text-[8px]'>&#10022;</span>
            </div>
            <div>
              <span className='text-[5px]'>&#10022;</span>
            </div>
            <div>
              <span className='text-[7px]'>&#10022;</span>
            </div>
          </div>
          <div className='flex items-center justify-around text-white'>  
            <div>
              <span className='text-[7px]'>&#10022;</span>
            </div>
            <div>
              <span className='text-[9px]'>&#10022;</span>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex text-white'>
            <span>clouds</span>
          </div>
          <div className='flex text-white'>
            <span>clouds</span>
          </div>
        </div>
      </div>
    </div>
    <div className={`${isClicked ? 'translate-x-[101px] bg-slate-200' : 'translate-x-[11px] bg-[#F4CA2F] '} shadow-[0px_-2px_2px_0px_gray_inset] w-12 h-12 rounded-full transition-all duration-1000 outline outline-[20px] outline-slate-100/20 relative`}>
      <div className={`w-12 h-12 rounded-full transition-all duration-1000 outline outline-[40px] outline-slate-100/20 absolute`}/>
      <div className={`w-12 h-12 rounded-full transition-all duration-1000 outline outline-[60px] outline-slate-100/20 absolute`}/>
    </div>
  </button>
  </>
  )
}

export default Button