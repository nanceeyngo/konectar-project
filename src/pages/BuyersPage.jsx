import React from 'react';
import BHeroSection from '../buyerspageComponent/BHeroSection';

import BuyersReviewSection from '../buyerspageComponent/BuyersReviewSection';
import BuyersFAQSection from '../buyerspageComponent/BuyersFAQSection';
import BuyersHowItWorks from '../buyerspageComponent/BuyersHowItWorks';


import BuyersWhatWeOffer from '../buyerspageComponent/BuyersWhatWeOffer';
import BuyersBenefitsSection from '../buyerspageComponent/BuyersBenefitsSection';

const BuyersPage = () => {
    return (
        <>
           <BHeroSection/>
           <BuyersWhatWeOffer/>
           <BuyersHowItWorks/>
           
           
           <BuyersBenefitsSection/>
           
            
            
           <BuyersReviewSection/> 
           <BuyersFAQSection/> 
        </>
    );
};

export default BuyersPage;
