import React from 'react';




import FarmersFAQSection from '../farmspageComponents/FarmersFAQSection';
import FarmersWhatWeOffer from '../farmspageComponents/FarmersWhatWeOffer';
import FarmersHowItWorks from '../farmspageComponents/FarmersHowItWorks';
import FarmersBenefit from '../farmspageComponents/FarmersBenefit';
import FarmersHeroSection from '../farmspageComponents/FarmersHeroSection';

const FarmersPage = () => {
    return (
       
       <>
        <FarmersHeroSection />
        <FarmersWhatWeOffer />
        <FarmersHowItWorks/>
        <FarmersBenefit/>
        
        
        <FarmersFAQSection/>

       </>
    );
};

export default FarmersPage;
