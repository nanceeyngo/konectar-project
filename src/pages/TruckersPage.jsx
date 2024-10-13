import React from 'react';
import THeroSection from '../truckerspageComponent/THeroSection';
import TruckersWhyPartnerSection from '../truckerspageComponent/TruckersWhyPartnerSection';
import TruckersHowItWorks from '../truckerspageComponent/TruckersHowItWorks';
import TruckersBenefitSection from '../truckerspageComponent/TruckersBenefitSection';
import TruckersReviewSection from '../truckerspageComponent/TruckersReviewSection';
import TruckersReadySection from '../truckerspageComponent/TruckersReadySection';
import TruckersFAQSection from '../truckerspageComponent/TruckersFAQSection';
import TruckersWhatWeOffer from '../truckerspageComponent/TruckersWhatWeOffer';

const TruckersPage = () => {
    return (
        <>
          <THeroSection/>
          <TruckersWhyPartnerSection/>  
          <TruckersHowItWorks/> 
          <TruckersWhatWeOffer/> 
          <TruckersBenefitSection/>  
          <TruckersFAQSection/>  
          <TruckersReviewSection/>  
          <TruckersReadySection/>  
        </>
    );
};

export default TruckersPage;
