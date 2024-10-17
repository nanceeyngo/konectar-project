import React from 'react';
import { useState } from 'react';

const TruckersWhatWeOffer = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);


    return (
        <>
            <section className='w-full bg-[#CECEDE] p-10 py-24 text-center'>
                <h1 className='text-center text-[#07190B] font-bold text-[1.5rem] md:text-[2rem]'>What We Offer</h1>
                <p className='text-center'>Receive Orders, Pickup, and Deliver</p>

                <div className='flex justify-center items-center gap-20 md:gap-24 mt-8'>
                   
                    <div className={`md:basis-[25%] cursor-default bg-[#07190B] text-white py-4 md:py-6 md:px-5 rounded-lg ${isHovered ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-5 md:py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >

                        <p>{isHovered ? 'Grow your business by servicing multiple transactions on the Konectar platform' : 'Increased Business Opportunities'}</p></div>
                  
                    <div className={`md:basis-[25%] cursor-default bg-[#07190B] text-white py-4 md:py-6 px-6 md:px-12 rounded-lg ${isHovered2 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center max-w-[45%] py-2 md:py-[0.5rem]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} >

                        <p>{isHovered2 ? 'Avoid traffic and deliver on time with our route optimization feature embedded on the Marketplace' : 'Route Optimization'}</p></div>
                </div>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                <div className={`bg-[#07190B] text-white cursor-default py-4 md:py-6 px-4 rounded-lg max-w-[45%] md:max-w-[40%] ${isHovered3 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-6 md:py-4 md:basis-[25%]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} >

                        <p>{isHovered3 ? 'Get connected with a large pool of farmers and buyers in need of cold-chain services' : 'Access to Verified Clients'}</p></div>
                   
               </div>


               <div className='flex justify-center items-center gap-20 md:gap-24 mt-8'>
                   
                   <div className={`cursor-default bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-12 rounded-lg ${isHovered4 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-4 md:py-4 md:px-6 md:basis-[25%]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} >

                        <p>{isHovered4 ? 'Provide buyers and farmers with real-time updates on delivery status' : 'Real-Time Tracking'}</p></div>
                  
                   <div className={`cursor-default bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-7 rounded-lg ${isHovered5 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-4 md:py-[0.5rem] md:basis-[20%]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} >

                        <p>{isHovered5 ? 'Maximize your cold-chain capacity with regular and consistent contracts' : 'Improved Asset Utilization'}</p></div>
               </div>

            </section>
        </>
    );
};

export default TruckersWhatWeOffer;
