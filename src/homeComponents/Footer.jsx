import React from 'react';
import Logo from '../assets/images/KLogo.png';
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        
        <>
        <section className='w-full bg-[#CECEDE] flex flex-col justify-center items-center py-11 px-12 md:px-4'>

            
            <div className='flex justify-center'>
                <img className='w-[40%] md:w-[18%]' src={Logo} alt="Logo" />
            </div>

            <h1 className='text-center mt-5 font-Manrope font-bold text-[1rem] md:text-[1.7rem] leading-tight md:leading-snug'>Subscribe to our newsletter to get first hand updates.</h1>

            <div className='mt-5 flex flex-col md:flex-row justify-center items-center md:items-start gap-5'>
                <input className='w-[200px] md:w-[400px] border-solid border-[#948e8e] border-[1px] rounded-lg py-1 md:py-1.5 px-5' type="text" placeholder='Enter Email' name='email' />
                

                <button className='bg-[#003333] text-white px-6 py-2 md:px-8 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'>
            Subscribe
          </button>
          
            </div>
            
            
        </section>

        <section className='w-full bg-white py-11 flex flex-col md:flex-row px-20 items-left justify-center md:items-center gap-3 md:gap-14'>

       <div className='basis-[30%]'>


       <div>
        <img className='w-[44%]' src={Logo} alt="Konectar Logo" />
        </div>

        <p className='mt-4'>Connecting Farms to Businesses: Nigeria's Leading Marketplace for Fresh Fruits and Vegetable</p>

        <p className='font-bold mt-5'>Social Media</p>

        <div className='cursor-pointer mt-5 flex gap-8'>
            <div className='text-[#4080c9]'><FaTwitter size={20} /></div>
            <div><FaInstagram size={20} /></div>
            <div className='text-[#20348d]'><FaLinkedin size={20}/></div>
        </div>



       </div>


       <div className='flex flex-col gap-1 md:gap-4 cursor-pointer basis-[10%]'>

        <h1 className='font-bold'>Company</h1>

        <p className='hover:text-[#009933]'>About</p>
        <p className='hover:text-[#009933]'>Contact</p>
        <p className='hover:text-[#009933]'>Blog</p>


       </div>


       <div className='flex flex-col gap-1 md:gap-4 cursor-pointer basis-[10%]'>

        <h1 className='font-bold'>Resources</h1>

        <p className='hover:text-[#009933]'>Product</p>
        <p className='hover:text-[#009933]'>Blog</p>
        <p className='hover:text-[#009933]'>FAQs</p>


       </div>


       <div className='flex flex-col gap-1 md:gap-4 cursor-pointer basis-[15%]'>

        <h1 className='font-bold'>Legal</h1>

        <p className='hover:text-[#009933]'>Terms and Conditions</p>
        <p className='hover:text-[#009933]'>Privacy Policy</p>
        <p className='hover:text-[#009933]'>FAQs</p>


       </div>


       <div className='flex flex-col gap-1 md:gap-4 basis-[10%]'>

        <h1 className='font-bold'>Contact</h1>

        <p className=''>Address: 12b Capital Road, Lagos</p>
        <p className=''>Phone: +2348065125745</p>
        <p className=''>konectar.ag@gmail.com</p>


       </div>


        </section>

        <section className='w-full bg-[#003311] py-3 text-center text-white px-3'>
            <p>Konectar Copyright, 2024. All rights reserved.</p>
        </section>
        </>
    );
};

export default Footer;
