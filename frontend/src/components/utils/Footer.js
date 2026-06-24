import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full bg-[#0f3b7c]  text-white text-center p- mt-40 h-[40px] z-11'>
      <p>&copy; {new Date().getFullYear()}  Compile and Conquer. Built by Ishika Singh. All rights reserved.</p>
    </div>
  )
}

export default Footer