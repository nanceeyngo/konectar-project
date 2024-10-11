import React from 'react';
import FHeroSection from '../farmspageComponents/FHeroSection';
import FarmersOfferSection from '../farmspageComponents/FarmersOfferSection';
import OpportunitySection from '../farmspageComponents/OpportunitySection';
import FarmersReviewSection from '../farmspageComponents/FarmersReviewSection';
import FarmersFAQSection from '../farmspageComponents/FarmersFAQSection';

const FarmersPage = () => {
    return (
       
       <>
        <FHeroSection />
        <FarmersOfferSection />
        <OpportunitySection/>
        <FarmersReviewSection/>
        <FarmersFAQSection/>

       </>
    );
};

export default FarmersPage;
