import React from 'react';

import MissionSection from "../homeComponents/MissionSection";
import HeroSection from "../homeComponents/HeroSection";
import SdgSection from "../homeComponents/SdgSection";
import OfferSection from "../homeComponents/OfferSection";
import ProcessSection from "../homeComponents/ProcessSection";
import BlogSection from "../homeComponents/BlogSection";
import PartnersSection from "../homeComponents/PartnersSection";
import TeamSection from "../homeComponents/TeamSection";
import ReviewSection from '../homeComponents/ReviewSection';
import FAQSection from '../homeComponents/FAQSection';
import AboutUsSection from '../homeComponents/AboutUsSection';
import OurVisionSection from '../homeComponents/OurVisionSection';
import ProductsSection from '../homeComponents/ProductsSection';

const Home = () => {
    return (
        <>
    
    <HeroSection />
    <AboutUsSection/>
    <OurVisionSection/>
    <MissionSection />
    <ProductsSection/>
    <SdgSection />
    <PartnersSection />
    <OfferSection />
    <ProcessSection />
    <BlogSection />
    <ReviewSection />
    <FAQSection />
    <TeamSection />
        </>
    );
};

export default Home;
