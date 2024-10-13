import React from 'react';

const FarmersWhatWeOffer = () => {
    return (
        <>
             <section className='w-full bg-[#CECEDE] p-10 text-center'>
                <h1 className='text-center text-[#07190B] font-bold text-[1.5rem] md:text-[2rem]'>What We Offer</h1>
                <p className='text-center'>Produce, Harvest, and Sell without Stress</p>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                    <div className='bg-[#07190B] text-white py-2 md:py-4 px-5 md:px-5 rounded-lg'><p>Negotiate Pricing in Real-Time</p></div>
                    <div className='bg-[#07190B] text-white py-2 md:py-4 px-6 md:px-12 rounded-lg'><p>Guaranteed Payments</p></div>
                </div>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                   <div className='bg-[#07190B] text-white py-4 px-4 rounded-lg'><p>Direct Access to Verified Wholesale Buyers</p></div>
                   
               </div>


               <div className='flex justify-center items-center gap-24 mt-8'>
                   
                   <div className='bg-[#07190B] text-white py-2 md:py-4 px-6 md:px-12 rounded-lg'><p>Efficient Logistics & Deliver</p></div>
                   <div className='bg-[#07190B] text-white py-2 md:py-4 px-6 md:px-7 rounded-lg'><p>Market Insights</p></div>
               </div>

            </section>
        </>
    );
};

export default FarmersWhatWeOffer;
