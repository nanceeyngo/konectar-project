import React, { useState } from 'react';
import { data } from './data';

const ReadMore = ({ trial, children }) => {


    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);

    }



    return (
        <div className='text-[#003311] bg-[#FFCECB] rounded-md py-2 px-3 mb-7'>
            
            
            <div className='flex justify-between items-center'>
                <p>{trial.question}</p>
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
            {data.map(data => (
                <ReadMore key={data.id} trial={data}>
                    {data.answer}
                </ReadMore>
            ))}
        </div>
    );
};
 
export default Content;

