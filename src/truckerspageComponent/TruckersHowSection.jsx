import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaRegHandshake } from "react-icons/fa6";
import { LuBus } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5";

const TruckersHowSection = () => {
    return (
        <>
          <section className='w-full px-12 py-16 bg-[#003311]'>

<h1 className='text-white text-[2rem] font-bold text-center'>How it Works</h1>

<div className='flex flex-col md:flex-row gap-6 mt-16 px-5 md:px-16'>

    <div className='container bg-white rounded-lg p-6'>
        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
        <CgProfile size={50} />
        </div>

        <p className='font-bold text-[0.8rem] md:text-[1rem] mt-5'>Sign Up and get started</p>

        <p className='mt-8 text-[0.8rem] md:text-[1rem]'>Third-party logistics companies register to access new opportunities in 
            agriculture and supply chain operations.
        </p>

    </div>

    

    <div className='container bg-white rounded-lg p-6'>
        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
        <FaRegHandshake size={50} />
        </div>

        <p className='font-bold text-[0.8rem] md:text-[1rem] mt-5'>Match With Farmers or Buyers</p>

        <p className='mt-8 text-[0.8rem] md:text-[1rem]'>Konectar matches your logistics services with farmers or businesses requiring efficient, 
            timely deliveries.
        </p>

    </div>

    
    <div className='container bg-white rounded-lg p-6'>
        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
        <LuBus size={50} />
        </div>

        <p className='font-bold text-[0.8rem] md:text-[1rem] mt-5'>Delivery of Fresh Produce</p>

        <p className='mt-8 text-[0.8rem] md:text-[1rem]'>Your team transports fresh produce quickly and safely, ensuring high-quality 
            products reach the buyers.
        </p>

    </div>

    
    <div className='container bg-white rounded-lg p-6'>
        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
        <IoCardOutline size={50} />
        </div>

        <p className='font-bold text-[0.8rem] md:text-[1rem] mt-5'>Receive Payments Securely</p>

        <p className='mt-8 text-[0.8rem] md:text-[1rem]'>Get paid securely and transparently after successful delivery, with clear transactions to 
            grow your business.
        </p>

    </div>

</div>

</section>  
        </>
    );
};

export default TruckersHowSection;
