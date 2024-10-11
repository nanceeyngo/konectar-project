import React from 'react';
import phone1 from '../assets/images/iPhone 18.png'
import phone2 from '../assets/images/iPhone 17.png'
import phone3 from '../assets/images/iPhone 13 Pro.png'
import phone4 from '../assets/images/iPhone 16.png'

const BuyersHowItWorks = () => {
    return (
        <>
            <section className='w-full bg-[#97d6ad] py-16'>
            
            <h1 className='text-center font-Manrope font-semibold text-[1.2rem] md:text-[2rem] leading-tight md:leading-snug'>How It Works</h1>
 
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-20'>
 
             <div className='basis-[75%]'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Step 1: Type A Prompt (Product, Price, Proximity and Quantity.)</h1>
             <p className='text-[0.8rem] md:text-[1.4rem]'>Konectar bridges the gap between farmers and markets, providing unparalleled access to buyers and wholesalers. 
                 By eliminating intermediaries, farmers reap better prices for their produces, boosting sales revenue 
                 and negotiation power.
             </p>
             </div>
 
             <div className='basis-[20%]'>
                 <img className='[60%]' src={phone1} alt="Picture 1" />
             </div>
 
            </div>
 
            
            
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-20'>
 
            <div className='basis-[20%]'>
                 <img className='[60%]' src={phone2} alt="Picture 2" />
             </div>
             
             <div className='basis-[75%]'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Step 2: View Farmer's Profile</h1>
             <p className='text-[0.8rem] md:text-[1.4rem]'>Konectar bridges the gap between farmers and markets, providing unparalleled access to buyers and wholesalers. 
                 By eliminating intermediaries, farmers reap better prices for their produces, boosting sales revenue 
                 and negotiation power.
             </p>
             </div>
 
             
 
            </div>
 
           
           
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-20'>
 
             <div className='basis-[75%]'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Step 3: Choose Produce</h1>
             <p className='text-[0.8rem] md:text-[1.4rem]'>Konectar bridges the gap between farmers and markets, providing unparalleled access to buyers and wholesalers. 
                 By eliminating intermediaries, farmers reap better prices for their produces, boosting sales revenue 
                 and negotiation power.
             </p>
             </div>
 
             <div className='basis-[20%]'>
                 <img className='[60%]' src={phone3} alt="Picture 3" />
             </div>
 
            </div>



            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-20'>
 
            <div className='basis-[20%]'>
                 <img className='[60%]' src={phone4} alt="Picture 3" />
             </div>
             
             <div className='basis-[75%]'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Step 4: Chat Supplier or Add to Cart</h1>
             <p className='text-[0.8rem] md:text-[1.4rem]'>Konectar bridges the gap between farmers and markets, providing unparalleled access to buyers and wholesalers. 
                 By eliminating intermediaries, farmers reap better prices for their produces, boosting sales revenue 
                 and negotiation power.
             </p>
             </div>
 
             
 
            </div>
 
             </section> 
        </>
    );
};

export default BuyersHowItWorks;
