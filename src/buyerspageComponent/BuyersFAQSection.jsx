import React from 'react';
import BuyersContent from './BuyersReadmore';

const BuyersFAQSection = () => {
    return (
        <>
            <section className='w-full bg-[#07190B] m-auto py-10 px-10 md:px-20'>

                <h1 className='font-bold text-[1.5rem] md:text-[2.3rem] text-center text-neutral20'>We know you have questions</h1>
                <p className='mt-3 text-center mb-12 text-neutral20'>So we've answered some of them.</p>

                <BuyersContent/>
            </section>
        </>
    );
};

export default BuyersFAQSection;