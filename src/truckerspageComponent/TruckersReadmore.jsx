import React, { useState } from 'react';
import { truckdata } from '../homeComponents/data';

const TruckersReadMore = ({ trucktrial, children }) => {


    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);

    }



    return (
        <div className='text-[#003311] bg-neutral20 rounded-md py-2 px-3 mb-7 font-semibold'>
            
            
            <div className='flex justify-between items-center'>
                <p>{trucktrial.question}</p>
                <p className='cursor-pointer text-[2.3rem] font-bold' onClick={toggleReadMore}>{isReadMore ? "+" : " -"}</p>
            </div>
            

            <p className="mt-4">
                {isReadMore ? "" : text}

            </p>
        </div>
    );
};


const TruckersContent = () => {

    const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the first ReadMore

    
    const toggleViewMore = () => {
        setIsExpanded(!isExpanded);
        
    };

    return (
        <div>
             {truckdata.slice(0, 5).map(truckdata => (
                <TruckersReadMore key={truckdata.id} trucktrial={truckdata}>
                    {truckdata.answer}
                </TruckersReadMore>
            ))}

            {isExpanded && (
                truckdata.slice(5)).map(truckdata => (
                    <TruckersReadMore key={truckdata.id} trucktrial={truckdata}>
                        {truckdata.answer}
                    </TruckersReadMore>
                ))
            }
            
                <div className='flex justify-end'><button onClick={toggleViewMore} className='text-[#003311] rounded-md bg-white p-3'>
                {isExpanded ? "View Less FAQs" : "View More FAQs"}
            </button></div>
        </div>
    );
};
 
export default TruckersContent;
