import React from 'react';

const BuyersWhatWeOffer = () => {
    return (
        <>
            <section className='w-full bg-[#CECEDE] p-10 py-24 text-center'>
                <h1 className='text-center text-[#07190B] font-bold text-[1.5rem] md:text-[2rem]'>What We Offer</h1>
                <p className='text-center'>Prompt, Source, Negotiate and Procure Quality Fruits and Vegetables.</p>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                    <div className='bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-12 rounded-lg'><p>Competitive Pricing</p></div>
                    <div className='bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-12 rounded-lg'><p>Convenient Sourcing</p></div>
                </div>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                   <div className='bg-[#07190B] text-white py-4 md:py-6 px-4 rounded-lg'><p>Direct Access to Verified Farmers</p></div>
                   
               </div>


               <div className='flex justify-center items-center gap-24 mt-8'>
                   
                   <div className='bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-12 rounded-lg'><p>Payment Protection</p></div>
                   <div className='bg-[#07190B] text-white py-2 md:py-6 px-6 md:px-12 rounded-lg'><p>Quality Assurance</p></div>
               </div>

            </section>
        </>
    );
};

export default BuyersWhatWeOffer;
