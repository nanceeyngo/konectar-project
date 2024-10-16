import React from 'react'
import box from '../assets/images/BOX.png'

const ProcessSection = () => {
  return (
    <>
         <div className='py-16'>
            <h1 className='text-[#003333] font-Manrope font-bold text-center'>Our Process: The Golden Path</h1>    
        </div>   

        <div className='m-auto md:px-20 w-[80%]'>
            <img src={box} alt="Our Process: The Golden Path" />
        </div>
        </>
  )
}

export default ProcessSection