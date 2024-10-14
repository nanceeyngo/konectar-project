import React from 'react';

const TruckersWhatWeOffer = () => {
    return (
        <>
            <section className='w-full bg-[#CECEDE] p-10 py-24 text-center'>
                <h1 className='text-center text-[#07190B] font-bold text-[1.5rem] md:text-[2rem]'>What We Offer</h1>
                <p className='text-center'>Receive Orders, Pickup, and Deliver</p>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                    <div className='bg-[#07190B] text-white py-2 md:py-6 px-5 md:px-5 rounded-lg'><p>Increased Business Opportunities</p></div>
                    <div className='bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-12 rounded-lg'><p>Route Optimization</p></div>
                </div>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                   <div className='bg-[#07190B] text-white py-4 md:py-6 px-4 rounded-lg'><p>Access to Verified Clients</p></div>
                   
               </div>


               <div className='flex justify-center items-center gap-24 mt-8'>
                   
                   <div className='bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-12 rounded-lg'><p>Real-Time Tracking</p></div>
                   <div className='bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-7 rounded-lg'><p>Improved Access Utilization</p></div>
               </div>

            </section>
        </>
    );
};

export default TruckersWhatWeOffer;
