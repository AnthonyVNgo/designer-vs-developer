import React from 'react'
import { useState } from 'react'

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
  <>
  {/* <button onClick={handleClick} className='rounded-full w-24 h-12 relative z-50 border border-green-300'>
    <div className={`${isClicked ? 'translate-x-full' : 'translate-x-0'} w-12 h-12 rounded-full border-orange-400 border`}/>
    <div className={`${isClicked ? 'top-0 bg-slate-500' : 'bottom-0 bg-blue-300'} h-36 absolute w-24 -z-10 transition-all`}>
    </div>
  </button> */}
  {/* <div className='relative border border-black w-24 h-24'>
    <div className='absolute z-20 h-12 w-12 bg-transparent border-[2px] rounded-full border-white'>

    </div>
    <div className='bg-blue-300 h-24 w-24 absolute z-10'></div>
  </div> */}
  {/* <div class="hasCircle">
    <div className='h-[175px] w-[150px] bg-blue-300 absolute top-0'>

    </div>
  </div> */}
  {/* <button onClick={handleClick} class="hasCircle w-[150px] h-[150px] border flex items-center relative overflow-hidden"> */}
  <button onClick={handleClick} class="hasCircle w-[150px] h-[150px] flex items-center relative overflow-hidden">
    <div className={`${isClicked ? 'bg-slate-500 translate-y-[61px]' : ' bg-blue-300  translate-y-[-61px]'} h-[175px] w-[150px] absolute transition-all duration-1000`}>
      <div className='flex flex-col h-full justify-between'>
        <div className='w-full'>
          <div className='flex items-center justify-around text-white'>
            <span className='text-[7px]'>&#10022;</span>
            <span className='text-[14px]'>&#10022;</span>
            <span className='text-[5px]'>&#10022;</span>
            <span className='text-[9px]'>&#10022;</span>
          </div>
          <div className='flex items-center justify-around text-white'>  
            <span className='text-[13px]'>&#10022;</span>
            <span className='text-[7px]'>&#10022;</span>
            <span className='text-[5px]'>&#10022;</span>
            <span className='text-[16px]'>&#10022;</span>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex text-white'>
            <span>clouds</span>
            <span>clouds</span>
            <span>clouds</span>
          </div>
          <div className='flex text-white'>
            <span>clouds</span>
            <span>clouds</span>
            <span>clouds</span>
          </div>
        </div>
      </div>
    </div>
    <div className={`${isClicked ? 'translate-x-[101px] bg-slate-200' : 'translate-x-[1px] bg-yellow-300 '} w-12 h-12 rounded-full transition-all duration-1000 outline outline-[30px] outline-slate-100/50 `}>
      <div className={`w-12 h-12 rounded-full transition-all duration-1000 outline outline-[15px] outline-slate-100/25 `}/>
    </div>
  </button>
  </>
  )
}

export default Button