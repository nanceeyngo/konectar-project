import React from 'react';
import Content from './Readmore';


const FAQSection = () => {
    return (
        <>
           <section className='w-[90%] md:w-[50%] bg-[#b1f3c7] rounded-md text-[#003311] mt-10 m-auto py-4 px-6'>

                <h1 className='font-bold text-[1.5rem] md:text-[2.3rem] text-center'>We know you have questions.</h1>
                <p className='mt-3 text-center mb-12'>So we've answered some of them.</p>
            
                <Content/>
            </section> 
        </>
    );
};

export default FAQSection;
