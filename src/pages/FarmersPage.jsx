import React from 'react';
import FHeroSection from '../farmspageComponents/FHeroSection';
import FarmersOfferSection from '../farmspageComponents/FarmersOfferSection';
import OpportunitySection from '../farmspageComponents/OpportunitySection';
import FarmersReviewSection from '../farmspageComponents/FarmersReviewSection';
import FarmersFAQSection from '../farmspageComponents/FarmersFAQSection';
import FarmersWhatWeOffer from '../farmspageComponents/FarmersWhatWeOffer';
import FarmersHowItWorks from '../farmspageComponents/FarmersHowItWorks';
import FarmersBenefit from '../farmspageComponents/FarmersBenefit';

const FarmersPage = () => {
    return (
       
       <>
        <FHeroSection />
        <FarmersWhatWeOffer />
        <FarmersHowItWorks/>
        <FarmersBenefit/>
        <OpportunitySection/>
        <FarmersReviewSection/>
        <FarmersFAQSection/>

       </>
    );
};

export default FarmersPage;
