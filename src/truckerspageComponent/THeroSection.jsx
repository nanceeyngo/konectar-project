import React from 'react';
import KonectarTruck from '../assets/images//Linda Gift/KonectarTruck.png';

const THeroSection = () => {
    return (
        <>
            <section className='p-16 flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-16'>


                

                    <div className='text-center flex flex-col gap-6 justify-center items-center'>
                        <h1 className='text-[2.5rem] font-extrabold'>Revolutionize Agricultural Logistics with <span className='text-[#009933]'>Konectar's 3PL Solutions</span></h1>

                        <p>Join us in transforming fresh produce delivery with advanced technology and reliable
                            logistics solutions, ensuring freshness from farm to table.</p>


                        <div className='flex gap-6 font-bold'>

                            <button type="button"
                                className='bg-[#009933] text-white px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'
                            >
                                Partner with Us
                            </button>
                            <button
                                type='button'
                                className='bg-transparent border-[#009933] text-[#009933] border px-6 py-2 md:px-6 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'
                            >
                                Join our Network
                            </button>
                        </div>

                    </div>

                    <div>
                        <img className='h-full w-full' src={KonectarTruck} alt="Konectar Truck" />
                    </div>

               


            </section>
        </>
    );
};

export default THeroSection;
