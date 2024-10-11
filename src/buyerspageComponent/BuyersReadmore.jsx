import React, { useState } from 'react';
import { buydata } from '../homeComponents/data';

const BuyersReadMore = ({ buytrial, children }) => {


    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);

    }



    return (
        <div className='text-[#003311] bg-neutral20 rounded-md py-2 px-3 mb-7 font-semibold'>
            
            
            <div className='flex justify-between items-center'>
                <p>{buytrial.question}</p>
                <p className='cursor-pointer text-[2.3rem] font-bold' onClick={toggleReadMore}>{isReadMore ? "+" : " -"}</p>
            </div>
            

            <p className="mt-4">
                {isReadMore ? "" : text}

            </p>
        </div>
    );
};


const BuyersContent = () => {
    return (
        <div>
            {buydata.map(buydata => (
                <BuyersReadMore key={buydata.id} buytrial={buydata}>
                    {buydata.answer}
                </BuyersReadMore>
            ))}
        </div>
    );
};
 
export default BuyersContent;
