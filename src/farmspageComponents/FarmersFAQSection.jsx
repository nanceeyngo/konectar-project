import React from 'react';
import FarmersContent from './FarmersReadmore';

const FarmersFAQSection = () => {
    return (
        <>
            <section className='w-full bg-[#003311] m-auto py-10 px-10 md:px-60'>

                <h1 className='font-bold text-[2rem] md:text-[2.8rem] text-center text-neutral20'>We know you have questions.</h1>
                <p className='mt-3 text-center mb-12 text-neutral20'>So we've answered some of them.</p>

                <FarmersContent/>
            </section>
        </>
    );
};

export default FarmersFAQSection;
