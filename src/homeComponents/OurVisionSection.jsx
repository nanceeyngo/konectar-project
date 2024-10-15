import React from 'react';
import pic1 from '../assets/images/Image22.png';

const OurVisionSection = () => {
    return (
        <>
            <section className="flex flex-col-reverse md:flex-row text-center md:text-left items-center gap-9 justify-center my-16 px-8 md:px-16">

                <div className="w-full md:w-1/2 md:basis-[50%] mt-6 md:mt-0">
                    <img className="w-full h-auto object-cover rounded-lg" src={pic1} alt="Vision Image" />


                </div>


                <div className='md:basis-[50%]'>
                    <h1 className='font-Manrope font-semibold text-[1.8rem] md:text-[2.8rem] leading-tight md:leading-snug'>Our Vision</h1>

                    <p className='mt-5 text-[1rem] md:text-[1.3rem] text-[#003311]'>Our vision is to be seen and reckoned with as the frontier for using the best technologies present 
                        to strengthen trade and commerce in the Fruits and Vegetables Sector.
                    </p>


                </div>



            </section>
        </>
    );
};

export default OurVisionSection;
