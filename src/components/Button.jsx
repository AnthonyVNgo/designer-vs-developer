import React from 'react'
import { useState } from 'react'

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
  <>
  <button onClick={handleClick} className='rounded-full w-24 h-12 relative z-50'>
    <div className={`${isClicked ? 'translate-x-full' : 'translate-x-0'} w-12 h-12 rounded-full border-white border`}>
    </div>
    <div className={`${isClicked ? 'top-0 bg-slate-500' : 'bottom-0 bg-blue-300'} h-36  absolute w-24 z-10`}>
    </div>
  </button>
  </>
  )
}

export default Button