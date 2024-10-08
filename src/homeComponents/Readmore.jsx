import React, { useState } from 'react';
import { data } from './data';

const ReadMore = ({ children }) => {


    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);

    }



    return (
        <div className='text-[#003311] bg-[#FFCECB] rounded-md py-4 px-3'>
            
            
            <div className='flex justify-between items-center'>
                <p>What is Konectar about?</p>
                <p className='cursor-pointer text-[2.3rem] font-bold' onClick={toggleReadMore}>{isReadMore ? "+" : " -"}</p>
            </div>
            

            <p className="mt-4">
                {isReadMore ? "" : text}

            </p>
        </div>
    );
};


const Content = () => {
    return (
        <div>
            {data.map((data, index) => (
                <ReadMore key={index}>
                    {data.answer}
                </ReadMore>
            ))}
        </div>
    );
};
 
export default Content;

