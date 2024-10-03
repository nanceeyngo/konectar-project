import React from 'react';

import MissionSection from "../homeComponents/MissionSection";
import HeroSection from "../homeComponents/HeroSection";
import SdgSection from "../homeComponents/SdgSection";
import OfferSection from "../homeComponents/OfferSection";
import ProcessSection from "../homeComponents/ProcessSection";
import BlogSection from "../homeComponents/BlogSection";
import PartnersSection from "../homeComponents/PartnersSection";
import TeamSection from "../homeComponents/TeamSection";

const Home = () => {
    return (
        <>
    
    <HeroSection />
    <MissionSection />
    <SdgSection />
    <PartnersSection />
    <OfferSection />
    <ProcessSection />
    <BlogSection />
    <TeamSection />
        </>
    );
};

export default Home;
