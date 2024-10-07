import React from 'react';
import Tcust1 from '../assets/images/Linda Gift/Tcust1.png';
import Tcust2 from '../assets/images/Linda Gift/Tcust2.png';
import { ImQuotesLeft } from "react-icons/im";


const TruckersReviewSection = () => {
    return (
        <>
            <section className='w-full p-16'>
                <h1 className='text-[2.3rem] text-center font-bold'>What Our Partners Are Saying</h1>


            <div className='flex flex-col md:flex-row mt-10 gap-6'>

                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>"Partnering with Konectar has improved our delivery efficiency by 30% and increased our revenue."</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust1} alt="First Customer" /></div>

                            <p className='text-[0.9rem]'>Deji & Kola Logistics</p>
                        </div>
                    </div>


                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>"Thanks to Konectar, we’ve connected with valuable clients and expanded our service area significantly."</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust2} alt="Second Customer" /></div>

                            <p className='text-[0.9rem]'>Deji & Kola Logistics</p>
                        </div>
                    </div>


                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>"Working with Konectar allows us to tap into a vast agricultural network, enhancing our services."</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust2} alt="Second Customer" /></div>

                            <p className='text-[0.9rem]'>Cold Logistics Owner</p>
                        </div>
                    </div>


            </div>





            <div className='flex flex-col md:flex-row mt-6 md:mt-10 gap-6'>

                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>"Konectar’s reliable payment system has made our logistics operations smoother and more profitable."</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust1} alt="First Customer" /></div>

                            <p className='text-[0.9rem]'>Cold Logistics Owner</p>
                        </div>
                    </div>


                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>"We appreciate the transparency Konectar provides, making every transaction straightforward and trustworthy."</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust2} alt="Second Customer" /></div>

                            <p className='text-[0.9rem]'>Cold Logistic Owner</p>
                        </div>
                    </div>


            </div>


            </section>
        </>
    );
};

export default TruckersReviewSection;
