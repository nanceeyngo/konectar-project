import grouppic from '../assets/images/Grouppic.png'

const ProcessSection = () => {
  return (
    <>
         <div className='py-16'>
            <h1 className='text-[#003333] font-Manrope font-bold text-center'>Our Process: The Golden Path</h1>    
        </div>   

        <div className='m-auto md:px-20 w-[80%]'>
            <img src={grouppic} alt="Our Process: The Golden Path" />
        </div>
        </>
  )
}

export default ProcessSection