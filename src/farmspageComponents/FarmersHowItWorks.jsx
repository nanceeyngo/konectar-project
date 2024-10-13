import React from 'react';
import phone1 from '../assets/images/iPhone 16 Pro.png';
import phone2 from '../assets/images/iPhone 15 Pro.png';
import phone3 from '../assets/images/Screen 3.png';

const FarmersHowItWorks = () => {
    return (
        <>
          <section className='w-full bg-[#07190B] py-16 text-white'>
            
            <h1 className='text-center font-Manrope font-bold text-[1.2rem] md:text-[2rem] leading-tight md:leading-snug'>How It Works</h1>
 
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-12 md:px-20'>
 
             <div className='basis-[75%]'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Step 1: Prompt-to-Procure: Search and Connect</h1>
                
                    <li className='text-[0.8rem] md:text-[1.4rem]'>Type a prompt to search for suppliers based on Product type. Price, Proximity, Quantity and Quality</li>
                    <li className='text-[0.8rem] md:text-[1.4rem]'>From the search results, Review profiles of farmers and connect with them to discuss your business needs.</li>

                
             </div>
 
             <div className='basis-[20%]'>
                 <img className='[60%]' src={phone1} alt="Picture 1" />
             </div>
 
            </div>
 
            
            
            <div className='w-full flex justify-between gap-6 items-center mt-10 px-12 md:px-20'>
 
            <div className='basis-[20%]'>
                 <img className='[60%]' src={phone3} alt="Picture 2" />
             </div>
             
             <div className='basis-[75%]'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Step 2: Place Orders and Secure Payment</h1>
             
                    <li className='text-[0.8rem] md:text-[1.4rem]'>Select produce from farmers inventory and contact the supplier</li>
                    <li className='text-[0.8rem] md:text-[1.4rem]'>Negotiate terms and place your orders through the platform</li>
                    <li className='text-[0.8rem] md:text-[1.4rem]'>Enjoy the safety of our secure escrow payment system, which holds funds until you confirm delivery satisfaction</li>

                
             </div>
 
            </div>
 
           
           
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-12 md:px-20'>
 
             <div className='basis-[75%]'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Step 3: Receive and Review</h1>
             
                    <li className='text-[0.8rem] md:text-[1.4rem]'>Track your shipments in real-time and inspect the products upon deliver</li>
                    <li className='text-[0.8rem] md:text-[1.4rem]'>Leave feedback for suppliers to help maintain quality and build long-term partnerships</li>
                    <li className='text-[0.8rem] md:text-[1.4rem]'>Enjoy the safety of our secure escrow payment system, which holds funds until you confirm delivery satisfaction</li>           

                </div>
 
             <div className='basis-[20%]'>
                 <img className='[60%]' src={phone2} alt="Picture 3" />
             </div>
 
            </div>



           
             </section>   
        </>
    );
};

export default FarmersHowItWorks;
