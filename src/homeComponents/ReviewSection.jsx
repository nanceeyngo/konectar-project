import React from 'react';
import LindaJohnson from '../assets/images/Linda Gift/LindaJohnson.png';
import RobertSmith from '../assets/images/Linda Gift/RobertSmith.png';
import BosunThomas from '../assets/images/Linda Gift/BosunThomas.png';
import ReginaTina from '../assets/images/Linda Gift/ReginaTina.png';

const ReviewSection = () => {
    return (
        <>
           <section className='w-full bg-[#CECEDE] py-16 px-5'>
            
                <h1 className='text-center font-bold text-[1.3rem] md:text-[2rem]'>What Clients say about us</h1>

                <div className='text-white flex flex-col md:flex-row px-8 md:px-36 gap-6 mt-8'>

                    <div className='flex rounded-md py-0 md:py-8 basis-[50%] max-h-fit md:max-h-full'>
                        <div className='basis-[50%]'><img className='w-full h-full' src={LindaJohnson} alt="First customer" /></div>
                        <div className='bg-[#003311] basis-[50%] rounded-r-md p-3 text-[0.7rem] md:text-[0.8rem]'><p>"As a new business in the food industry, we struggled to find relaible supppliers. Konectar 
                            provided us with a new seamless platform to connect with quality vendors. The variety of fruits 
                            and vegetables available is impressive, and the support team is always ready to assist. 
                            Thanks to Konectar, we can confidently meet our clients' demands."</p>
                            <p className='mt-3'>Linda Johnson</p>
                            <p className='text-[0.6rem]'>Co-founder of FarmFreshDelivery</p>
                            </div>

                    </div>


                    <div className='flex rounded-md py-0 md:py-8 basis-[50%] max-h-fit md:max-h-full'>
                        <div className='basis-[50%]'><img className='w-full h-full' src={RobertSmith} alt="Second customer" /></div>
                        <div className='bg-[#003311] basis-[50%] rounded-r-md p-3 text-[0.7rem] md:text-[0.8rem]'><p>"Konectar has been an invaluable partner for our business. Thea ability to source local 
                            produce at competitive prices has not only reduced our costs but also heled us support local 
                            farmers. The transparency in transactions and real-time inventory updates are game-changers for our 
                            purchasing strategy."</p>
                            <p className='mt-3'>Robert Smith</p>
                            <p className='text-[0.6rem]'>Supply Chain Manager at EcoFoods Distribution</p>
                            </div>

                    </div>


                </div>




                <div className='text-white flex flex-col md:flex-row px-8 md:px-36 gap-6 mt-6 md:mt-0'>

                    <div className='flex rounded-md py-0 md:py-8 basis-[50%] max-h-fit md:max-h-full'>
                        <div className='basis-[50%]'><img className='w-full h-full' src={BosunThomas} alt="First customer" /></div>
                        <div className='bg-[#003311] basis-[50%] rounded-r-md p-3 text-[0.7rem] md:text-[0.8rem]'><p>"We've been using Konectar for over a year now, and it has transformed the way we handle our procurement. 
                            The diverse range of products, coupled with the ease of use, make sourcing fruits and vegetables straightforward 
                            and efficient. Our operational efficiency has skyrocketed!"</p>
                            <p className='mt-3'>Bosun Thomas</p>
                            <p className='text-[0.6rem]'>Founder of Jaiz Restaurants</p>
                            </div>

                    </div>


                    <div className='flex rounded-md py-0 md:py-8 basis-[50%] max-h-fit md:max-h-full'>
                        <div className='basis-[50%]'><img className='w-full h-full' src={ReginaTina} alt="Second customer" /></div>
                        <div className='bg-[#003311] basis-[50%] rounded-r-md p-3 text-[0.7rem] md:text-[0.8rem]'><p>"Konectar has made sourcing fresh produce more accessible than ever. The user-friendly platform ensures we 
                            receive the best quality at competitive prices, helping us build stronger relationships with farmers. The service 
                            and support we receive make it vitl part of our business operations."</p>
                            <p className='mt-3'>Regina Tina</p>
                            <p className='text-[0.6rem]'>Head Chef at Basket Hotel & Suits</p>
                            </div>

                    </div>


                </div>


            </section> 
        </>
    );
};

export default ReviewSection;
