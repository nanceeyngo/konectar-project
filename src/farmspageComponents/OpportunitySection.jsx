import React from 'react';
import { PiPottedPlant } from "react-icons/pi";
import { VscDebugDisconnect } from "react-icons/vsc";
import { FiTruck } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const OpportunitySection = () => {
    return (
        <>
          <section className='w-full bg-white p-10'>

          <h1 className='text-center font-Manrope font-semibold text-[1.4rem] md:text-[2.3rem] leading-tight md:leading-snug'>Maximize Every Opportunity with Konectar</h1>

          <div className='flex flex-col md:flex-row gap-6 mt-10 px-5 md:px-16'>

            <div className='container bg-[#55D480] rounded-lg p-4 pr-20'>
                    <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
                    <PiPottedPlant size={35} />
                    </div>
                   
                    <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Grow & Harvest</p>

                    <p className='mt-8 text-[1rem] md:text-[1.3rem]'>As a farmer, you can grow and harvest farm produce. With Konectar, delivering to various 
                        locations is not a barrier.
                    </p>

            </div>


            
            <div className='container bg-[#55D480] rounded-lg p-4 pr-20'>
                    <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
                    <VscDebugDisconnect size={35} />
                    </div>

                    <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Connect</p>

                    <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Reach and connect with worldwide buyers to negotiate fair prices. Konectar also eliminates middlemen.
                    </p>

            </div>

          </div>

          <div className='flex flex-col md:flex-row gap-6 mt-6 px-5 md:px-16'>

<div className='container bg-[#55D480] rounded-lg p-4 pr-20'>
        <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
        <FiTruck size={35} />
        </div>
       
        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Ship & Transport</p>

        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Optimize your logistics with Konectar. At Konectar, we promise efficient shipping, reliable transportation 
            and real time monitoring.
        </p>

</div>



<div className='container bg-[#55D480] rounded-lg p-4 pr-20'>
        <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
        <AiOutlineSafetyCertificate size={35}/>
        </div>

        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Gain & Enjoy</p>

        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Receive secure and timely payment. Konectar ensures your personal market data and makes your 
            transaction seamless.
        </p>

</div>

</div>



        </section>  
        </>
    );
};

export default OpportunitySection;
