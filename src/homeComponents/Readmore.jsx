import React, { useState } from 'react';
import { data } from './data';

const ReadMore = ({ trial, children }) => {


    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);

    }



    return (
        <>
            <div className='text-[#003311] bg-[#D2FFE1] rounded-md py-2 px-3 mb-7 font-semibold'>


                <div className='flex justify-between items-center'>
                    <p>{trial.question}</p>
                    <p className='cursor-pointer text-[2.3rem] font-bold' onClick={toggleReadMore}>{isReadMore ? "+" : " -"}</p>
                </div>


                <p className="mt-4">
                    {isReadMore ? "" : text}

                </p>

            </div>


        </>
    );
};



const Content = () => {

    const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the first ReadMore

    
    const toggleViewMore = () => {
        setIsExpanded(!isExpanded);
        
    };
   
     

    

    return (
        <div>
            {data.slice(0, 5).map(data => (
                <ReadMore key={data.id} trial={data}>
                    {data.answer}
                </ReadMore>
            ))}

            {isExpanded && (
                data.slice(5)).map(data => (
                    <ReadMore key={data.id} trial={data}>
                        {data.answer}
                    </ReadMore>
                ))
            }
                <div className='flex justify-end'><button onClick={toggleViewMore} className='text-white rounded-md bg-[#003311] p-3'>
                {isExpanded ? "View Less FAQs" : "View More FAQs"}
            </button></div>
        </div>
    );
};

export default Content;

