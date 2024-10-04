import React from 'react';
import BHeroSection from '../buyerspageComponent/BHeroSection';
import BuyersOfferSection from '../buyerspageComponent/BuyersOfferSection';
import BuyersMarketSection from '../buyerspageComponent/BuyersMarketSection';
import BuyersOppSection from '../buyerspageComponent/BuyersOppSection';
import BuyersReviewSection from '../buyerspageComponent/BuyersReviewSection';

const BuyersPage = () => {
    return (
        <>
           <BHeroSection/>
           <BuyersOfferSection/> 
           <BuyersMarketSection/> 
           <BuyersOppSection/> 
           <BuyersReviewSection/> 
        </>
    );
};

export default BuyersPage;
