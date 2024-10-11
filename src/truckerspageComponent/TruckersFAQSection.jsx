import React from 'react';
import TruckersContent from './TruckersReadmore';

const TruckersFAQSection = () => {
    return (
        <>
            <section className='w-full bg-[#07190B] m-auto py-10 px-10 md:px-20'>

                <h1 className='font-bold text-[1.5rem] md:text-[2.3rem] text-center text-neutral20'>FAQs for Logistics Providers.</h1>
                <p className='mt-3 text-center mb-12 text-neutral20'>We've answered some of your questions.</p>

                <TruckersContent/>
            </section>
        </>
    );
};

export default TruckersFAQSection;