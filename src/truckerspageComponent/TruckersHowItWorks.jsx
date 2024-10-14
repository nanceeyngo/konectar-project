import React from 'react';
import phone1 from '../assets/images/iPhone 16 Pro.png';
import phone2 from '../assets/images/iPhone 15 Pro.png';
import phone3 from '../assets/images/Screen 3.png';

const TruckersHowItWorks = () => {
    return (
        <>
           <section className='w-full bg-[#003311] py-16 text-white'>
            
            <h1 className='text-center font-Manrope font-bold text-[1.2rem] md:text-[2.2rem] leading-tight md:leading-snug'>How It Works in 3 Simple Steps</h1>
 
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-12 md:px-20'>
 
             <div className='basis-[65%] md:basis-[75%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 1</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Sign Up & Add Vehicle Information</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>Get started by creating an account on Konectar. If you are a logistics partner, simply fill in your 
                        vehicle details to ensure our system matches you with suitable delivery orders.
                    </p>

                
             </div>
 
             <div className='basis-[20%]'>
                 <img className='[60%]' src={phone1} alt="Picture 1" />
             </div>
 
            </div>
 
            
            
            <div className='w-full flex justify-between gap-6 items-center mt-10 px-12 md:px-20'>
 
            <div className='basis-[20%]'>
                 <img className='[60%]' src={phone3} alt="Picture 2" />
             </div>
             
             <div className='basis-[65%] md:basis-[75%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 2</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Access Logistics Dashboard & Manage Orders</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>Once registered, log in to your personalized Logistics Dashboard to view available orders. See 
                        order details, routes, and delivery timelines, then accept orders that match your vehicle's capacity 
                        and schedule. 
                    </p>

                
             </div>
 
            </div>
 
           
           
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-12 md:px-20'>
 
            <div className='basis-[65%] md:basis-[75%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 3</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Confirm Payment & Track Order History</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>Upon Completing a delivery, confirm payment through our secure platform. Easily track past deliveries 
                        and earnings by viewing your order history in the dashboard.
                    </p>

                
             </div>
 
             <div className='basis-[20%]'>
                 <img className='[60%]' src={phone2} alt="Picture 3" />
             </div>
 
            </div>



           
             </section> 
        </>
    );
};

export default TruckersHowItWorks;
