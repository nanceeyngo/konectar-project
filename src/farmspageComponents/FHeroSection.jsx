import React from 'react';
import frame1 from "../assets/images/Frame1.png"

const FHeroSection = () => {
    return (
        <>
          <section className="flex flex-col-reverse md:flex-row text-center md:text-left items-center gap-5 justify-center my-16 px-8 md:px-16">
            
        <div className='md:basis-[50%]'>
            <h1 className='font-Manrope font-semibold text-[1.8rem] md:text-[2.8rem] leading-tight md:leading-snug'>Unlock New Markets, Maximize Your Farms Potential</h1>

            <p className='mt-5'>Connect directly with buyers across the nation, secure fair prices, and grow your farm with Konectar. 
                Cut out the middlemen and watch your business thrive.
            </p>

            <button className='mt-5 bg-[#009933] text-white px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'>
            Sign up for free now!
          </button>

        </div>
        
        <div className="w-full md:w-1/2 md:basis-[50%] mt-6 md:mt-0">
        <img className="w-full h-auto object-cover rounded-lg" src={frame1} alt="farmer's image"  />
          
             
         </div>    

        </section>  
        </>
    );
};

export default FHeroSection;
