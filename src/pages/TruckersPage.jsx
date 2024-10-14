import React from 'react';




import TruckersReviewSection from '../truckerspageComponent/TruckersReviewSection';
import TruckersReadySection from '../truckerspageComponent/TruckersReadySection';
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
          <TruckersReviewSection/>  
          <TruckersReadySection/>  
        </>
    );
};

export default TruckersPage;
