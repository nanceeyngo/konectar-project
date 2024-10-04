import React from 'react';
import { IoContractOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { HiArrowTrendingUp } from "react-icons/hi2";

const TruckersWhyPartnerSection = () => {
    return (
        <>
            <section className='px-12 py-16'>

                <h1 className='text-[2rem] font-bold text-center'>Why Partner with Us?</h1>

                <div className='flex flex-col md:flex-row gap-6 mt-16 px-5 md:px-16'>

                    <div className='container bg-[#EDEDF2] rounded-lg p-4 py-6 pr-20'>
                        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <IoContractOutline size={45} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Seamless Integration with Digital Platforms</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Easily integrate your current logistics system with Konectar’s platform. 
                            Streamline your operations and reduce disruptions effectively
                        </p>

                    </div>



                    <div className='container bg-[#EDEDF2] rounded-lg p-4 py-6 pr-20'>
                        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <IoRocketOutline size={45} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Boost Your Business and Operations Effectively</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Expand your business with Konectar’s vast 
                            network of farmers and businesses. Gain new opportunities and maximize delivery routes
                        </p>

                    </div>


                    <div className='container bg-[#EDEDF2] rounded-lg p-4 py-6 pr-20'>
                        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <HiArrowTrendingUp size={45} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Strengthen Your Brand and Gain Recognition</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Join the movement towards sustainability 
                            in agriculture. Build a positive brand reputation by supporting the agri-tech sector
                        </p>

                    </div>

                </div>

            </section>
        </>
    );
};

export default TruckersWhyPartnerSection;


