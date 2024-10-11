import React, { useState } from 'react';
import { farmdata } from '../homeComponents/data';

const FarmersReadMore = ({ farmtrial, children }) => {


    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);

    }



    return (
        <div className='text-[#003311] bg-neutral20 rounded-md py-2 px-3 mb-7 font-semibold'>
            
            
            <div className='flex justify-between items-center'>
                <p>{farmtrial.question}</p>
                <p className='cursor-pointer text-[2.3rem] font-bold' onClick={toggleReadMore}>{isReadMore ? "+" : " -"}</p>
            </div>
            

            <p className="mt-4">
                {isReadMore ? "" : text}

            </p>
        </div>
    );
};


const FarmersContent = () => {
    return (
        <div>
            {farmdata.map(farmdata => (
                <FarmersReadMore key={farmdata.id} farmtrial={farmdata}>
                    {farmdata.answer}
                </FarmersReadMore>
            ))}
        </div>
    );
};
 
export default FarmersContent;
