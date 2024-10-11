import React from 'react';
import BHeroSection from '../buyerspageComponent/BHeroSection';
import BuyersOfferSection from '../buyerspageComponent/BuyersOfferSection';
import BuyersMarketSection from '../buyerspageComponent/BuyersMarketSection';
import BuyersOppSection from '../buyerspageComponent/BuyersOppSection';
import BuyersReviewSection from '../buyerspageComponent/BuyersReviewSection';
import BuyersFAQSection from '../buyerspageComponent/BuyersFAQSection';
import BuyersHowItWorks from '../buyerspageComponent/BuyersHowItWorks';
import BuyersOurOffering from '../buyerspageComponent/BuyersOurOffering';

const BuyersPage = () => {
    return (
        <>
           <BHeroSection/>
           <BuyersHowItWorks/>
           <BuyersOurOffering/>
           <BuyersOfferSection/> 
           <BuyersMarketSection/> 
           <BuyersOppSection/> 
           <BuyersReviewSection/> 
           <BuyersFAQSection/> 
        </>
    );
};

export default BuyersPage;
