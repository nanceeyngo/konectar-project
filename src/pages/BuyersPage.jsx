import React from 'react';
import BHeroSection from '../buyerspageComponent/BHeroSection';

import BuyersReviewSection from '../buyerspageComponent/BuyersReviewSection';
import BuyersFAQSection from '../buyerspageComponent/BuyersFAQSection';
import BuyersHowItWorks from '../buyerspageComponent/BuyersHowItWorks';
import BuyersOurOffering from '../buyerspageComponent/BuyersOurOffering';
import BuyersOurBenefits from '../buyerspageComponent/BuyersOurBenefits';
import BuyersWhatWeOffer from '../buyerspageComponent/BuyersWhatWeOffer';

const BuyersPage = () => {
    return (
        <>
           <BHeroSection/>
           <BuyersHowItWorks/>
           <BuyersWhatWeOffer/>
           <BuyersOurOffering/>
           <BuyersOurBenefits/>
           
            
            
           <BuyersReviewSection/> 
           <BuyersFAQSection/> 
        </>
    );
};

export default BuyersPage;
