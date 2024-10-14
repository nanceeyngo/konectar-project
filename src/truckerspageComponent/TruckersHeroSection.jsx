import React from 'react';

const TruckersHeroSection = () => {
    return (
        <>
            <section className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.6),rgba(6,8,15,0.2)),url('assets/images/KTruck.png')] h-screen bg-cover bg-top bg-no-repeat text-[white] text-center md:text-left justify-center md:justify-start items-center flex lg:px-0 px-24"> 
            
            <div className='md:w-[45%] md:ml-20'>
                      <h1 className='font-Manrope font-semibold text-center md:text-left text-[2.8rem]'>Grow Your Business. Deliver More. Earn More</h1>
                      <p className='text-[0.8rem] md:text-[1rem] mt-8'>At Konectar, we are transforming the agricultural marketplace by connecting Cold-chain logistics 
                      providers like you with an ever increasing network of farmers and wholesales buyers.
                      </p>
            
            <div className='mt-8'>
            
          <button type="button"
            className='bg-[#009933] mt-4 px-6 py-2 md:px-9 rounded-lg text-[0.8rem] md:text-[1rem] text-white'
          >
            Contact Us
          </button>
          
        
    
            </div>
            </div>
        </section>
        </>
    );
};

export default TruckersHeroSection;
