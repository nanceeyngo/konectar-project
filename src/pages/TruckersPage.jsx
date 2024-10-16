import React from 'react';






import TruckersFAQSection from '../truckerspageComponent/TruckersFAQSection';
import TruckersWhatWeOffer from '../truckerspageComponent/TruckersWhatWeOffer';
import TruckersHeroSection from '../truckerspageComponent/TruckersHeroSection';
import TruckersHowItWorks from '../truckerspageComponent/TruckersHowItWorks';
import TruckersBenefitSection from '../truckerspageComponent/TruckersBenefitSection';

const TruckersPage = () => {
    return (
        <>
          <TruckersHeroSection/>
          <TruckersWhatWeOffer/>
            
          <TruckersHowItWorks/> 
           
          <TruckersBenefitSection/>  
          <TruckersFAQSection/>  
          
         
        </>
    );
};

export default TruckersPage;
