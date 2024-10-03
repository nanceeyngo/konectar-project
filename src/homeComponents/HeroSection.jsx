import { useState, useEffect } from 'react';
import Hero from '../assets/images/Hero1.png';
import HeroImg from '../assets/images/Hero Image.png';
import HeroImg1 from '../assets/images/Hero Image (1).png';
import HeroImg2 from '../assets/images/Hero Image (2).png';
import HeroImg3 from '../assets/images/Hero Image (3).png';
import HeroImg4 from '../assets/images/Hero Image (4).png';

const images = [Hero, HeroImg, HeroImg1, HeroImg2, HeroImg3, HeroImg4];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen text-white text-left justify-left items-center flex lg:px-0 px-8 md:px-24 overflow-hidden">
      {/* Background Image */}
      <img 
        src={images[currentImageIndex]} 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        style={{ opacity: 1 }} 
      />
      
      {/* Overlay for darkening */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero content */}
      <div className="relative w-full md:w-[54%] ml-0 md:ml-20 z-10 text-center md:text-left">
        <h1 className='font-Manrope font-semibold text-[1.4rem] md:text-[2.8rem] leading-tight md:leading-snug'>
          Connecting Farms to Businesses: Nigeria's Leading Marketplace for Fresh Fruits and Vegetables
        </h1>
        <div className='flex flex-col md:flex-row gap-4 mt-6 font-Manrope items-center md:items-start'>
          <button type="button"
            className='bg-[#009933] px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'
          >
            Join the Waitlist
          </button>
          <button
            type='button'
            className='bg-transparent border-[#009933] border px-6 py-2 md:px-6 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
