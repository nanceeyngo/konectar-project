import React from 'react';
import { useState } from 'react';

const FarmersWhatWeOffer = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);


    return (
        <>
            <section className='w-full bg-[#CECEDE] p-10 py-24 text-center'>
                <h1 className='text-center text-[#0d2727] font-bold text-[2rem] md:text-[2.8rem]'>What We Offer</h1>
                <p className='text-center text-[1rem] md:text-[1.3rem] text-[#003311] font-semibold'>Produce, Harvest, and Sell without Stress</p>

                <div className='flex justify-center items-center gap-24 mt-8'>

                    <div className={`md:h-[80px] md:w-[300px] text-white py-4 md:py-6 px-5 md:px-5 rounded-lg cursor-default  ${isHovered ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-4 md:py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >

                        <p>{isHovered ? 'Negotiate better deals on the platform without middlemen taking a cut' : 'Negotiate Pricing in Real-Time'}</p></div>

                    <div className={`md:h-[80px] md:w-[300px] text-white py-2 md:py-6 px-5 md:px-5 rounded-lg cursor-default  ${isHovered2 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-6 md:py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} >

                        <p>{isHovered2 ? 'Secure and timely payments through our escrow service' : 'Guaranteed Payments'}</p></div>
                </div>

                <div className='flex justify-center items-center gap-24 mt-8'>

                    <div className={`md:h-[80px] md:w-[300px] text-white cursor-default py-4 md:py-6 px-4 rounded-lg max-w-[45%] md:max-w-none  ${isHovered3 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-6 md:py-6' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} >

                        <p>{isHovered3 ? 'Connect instantly with wholesale buyers looking for fresh produce' : 'Direct Access to Verified Wholesale Buyers'}</p></div>

                </div>


                <div className='flex justify-center items-center gap-24 mt-8'>

                    <div className={`md:h-[83px] md:w-[300px] text-white py-2 md:py-6 px-5 md:px-5 rounded-lg cursor-default  ${isHovered4 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-4 max-w-[45%] md:py-[0.5rem]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} >

                        <p>{isHovered4 ? 'Access Cold-chain storage and transport to preserve and transport your fresh produce without losing its quality.' : 'Eficient Logistics & Delivery'}</p></div>


                    <div className={`md:h-[80px] md:w-[300px] text-white py-2 md:py-6 px-5 md:px-5 rounded-lg cursor-default  ${isHovered5 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-2 md:py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} >

                        <p>{isHovered5 ? 'Be informed ahead with real-time market trends and demand forecasts' : 'Market Insights'}</p></div>
                </div>

            </section>
        </>
    );
};

export default FarmersWhatWeOffer;
