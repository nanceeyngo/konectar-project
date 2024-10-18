import React from 'react';
import { useState } from 'react';

const BuyersWhatWeOffer = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);




    return (
        <>
            <section className='w-full bg-[#CECEDE] p-10 py-24 text-center'>
                <h1 className='text-center text-[#07190B] font-bold text-[1.5rem] md:text-[2rem]'>What We Offer</h1>
                <p className='text-center'>Prompt, Source, Negotiate and Procure Quality Fruits and Vegetables.</p>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                    <div className={ `md:h-[80px] md:w-[300px] cursor-default text-white py-2 md:py-6 px-6 md:px-12 rounded-lg ${isHovered ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-4 md:py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >

                        <p>{isHovered ? 'Negotiate directly with farmers to secure the best deals' : 'Competitive Pricing'}</p></div>
                   
                    <div className={`md:h-[80px] md:w-[300px] cursor-default text-white py-2 md:py-6 px-6 md:px-12 rounded-lg ${isHovered2 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center max-w-[45%] py-2 md:py-[0.5rem]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} >

                        <p>{isHovered2 ? 'Prompt, Compare, Select and Order produce with ease through our platform' : 'Convenient Sourcing'}</p></div>
                </div>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                <div className={`md:h-[80px] md:w-[300px] text-white cursor-default py-4 md:py-6 px-4 rounded-lg max-w-[45%] md:max-w-none ${isHovered3 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-6 md:py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} >

                        <p>{isHovered3 ? 'Access a wide range of verified farmers for consistent and high-quality produce' : 'Direct Access to Verified Farmers'}</p></div>
                   
               </div>


               <div className='flex justify-center items-center gap-24 mt-8'>
                   
                   <div className={`md:h-[80px] md:w-[300px] cursor-default text-white py-2 md:py-6 px-6 md:px-12 rounded-lg ${isHovered4 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-4 md:py-[0.3rem]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} >

                        <p>{isHovered4 ? 'Payments are secured in escrow until farmers fulfill the requirements of your purchase order' : 'Payment Protection'}</p></div>
                   
                   <div className={`md:h-[85px] md:w-[300px] cursor-default text-white py-2 md:py-8 px-6 md:px-12 rounded-lg ${isHovered5 ? 'bg-[#030a04] text-[0.7rem] sm:text-[0.8rem] text-center py-2 md:py-[0.3rem]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} >

                        <p>{isHovered5 ? 'We conduct quality checks at our Packing House to ensure farmers meet your specific needs and requirements' : 'Quality Assurance'}</p></div>
               </div>

            </section>
        </>
    );
};

export default BuyersWhatWeOffer;
