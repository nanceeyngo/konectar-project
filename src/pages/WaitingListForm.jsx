import React, { useState } from 'react';

const WaitingListForm = () => {


    const [inputValues, setInputValues] = useState({});

    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // controling the values of all input fields by mapping and concatenating with the 3 dots
        setInputValues(values => ({ ...values, [name]: value }));


        if (!value.trim()) {
            setError('This field is required!');

        }
        else {
            setError('')
        }

    }

    //function to drop an alert messeage, as well as print input values into the console, if all fields have been filled
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!error) {

            console.log('Form submitted with input:', inputValues);
            alert('THANK YOU FOR JOINING THE WAIT LIST! YOUR RESPONSE HAS BEEN RECEIVED.');
        }
    }


    return (
        <>
            <section className='mt-10 mb-10 m-auto w-[80%] md:w-[55%] px-8 py-12 rounded-md border-solid border-[1px] border-[#afb8c299]'>

                <h1 className='font-bold text-center text-[1rem] md:text-[1.5rem]'>Register Your Farm with Konectar</h1>

                <form className='mt-10' onSubmit={handleSubmit}>
                    {/*form input fields  */}
                    <label className='font-bold' htmlFor='username'>
                        Full Name  </label><br></br>

                    {/* specifying input type as 'text' name as 'username' (used to track input valuesin 'value={inputValues.username}, placeholder to give info in the inputfield, and the handleInputChange to handle onChange events*/}
                    {/* inserting 'required' in my form fields (example on line 57) helps validate the form by putting up the notification 'Please fill out this field' whenever a user fails to fill in all fields */}
                    <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
                        type="text"
                        name='username'
                        placeholder='Enter your full name'
                        value={inputValues.username || ""}
                        onChange={handleInputChange} required />
                    <br></br><br></br>


                    <label className='font-bold' htmlFor='farmname'>
                        Farm Name  </label><br></br>

                    <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
                        type="text"
                        name='farmname'
                        placeholder='Enter your farm name'
                        value={inputValues.farmname || ""}
                        onChange={handleInputChange} required />
                    <br></br><br></br>


                    <label className='font-bold' htmlFor='location'>
                        Full Location  </label><br></br>

                    <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
                        type="text"
                        name='location'
                        placeholder='Enter your city, state and Country'
                        value={inputValues.location || ""}
                        onChange={handleInputChange} required />
                    <br></br><br></br>


                    <label className='font-bold' htmlFor='contact'>
                        Contact Information  </label><br></br>

                    <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
                        type="email"
                        name='contact'
                        placeholder='Enter email address'
                        value={inputValues.contact || ""}
                        onChange={handleInputChange} required />
                    <br></br>

                    <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
                        type="tel"
                        name='contact'
                        placeholder='Enter phone number'
                        value={inputValues.contact || ""}
                        onChange={handleInputChange} required />
                    <br></br><br></br>


                    <label className='font-bold' htmlFor='produce'>
                        Types of Produce  </label><br></br>

                    <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
                        type="text"
                        name='produce'
                        placeholder='Type of produce'
                        value={inputValues.location || ""}
                        onChange={handleInputChange} required />
                    <br></br><br></br>


                    <div className='text-[0.7rem] md:text-[0.9rem] flex bg-[#dcd6ec99] p-4 rounded-md md:w-[70%] gap-8'>


                        <div className='flex flex-col gap-4'>

                            <div><input className='bg-[#32be51]'
                                type="checkbox"
                                name='checkbox1'
                                value={inputValues.checkbox1 || ""}
                                onChange={handleInputChange} required />


                                <label className='ml-2' htmlFor='checkbox1'>
                                    Leafy Greens  </label><br></br></div>

                            <div><input className='bg-[#32be51]'
                                type="checkbox"
                                name='checkbox2'
                                value={inputValues.checkbox2 || ""}
                                onChange={handleInputChange} required />


                                <label className='ml-2' htmlFor='checkbox2'>
                                    Root Vegetables  </label><br></br></div>


                            <div><input className='bg-[#32be51]'
                                type="checkbox"
                                name='checkbox3'
                                value={inputValues.checkbox3 || ""}
                                onChange={handleInputChange} required />


                                <label className='ml-2' htmlFor='checkbox3'>
                                    Cruciferous Vegetables  </label><br></br></div>

                        </div>


                        <div className='flex flex-col gap-4'>

                            <div><input className='bg-[#32be51]'
                                type="checkbox"
                                name='checkbox1'
                                value={inputValues.checkbox1 || ""}
                                onChange={handleInputChange} required />


                                <label className='ml-2' htmlFor='checkbox1'>
                                    Starchy Vegetables  </label><br></br></div>

                            <div><input className='bg-[#32be51]'
                                type="checkbox"
                                name='checkbox2'
                                value={inputValues.checkbox2 || ""}
                                onChange={handleInputChange} required />


                                <label className='ml-2' htmlFor='checkbox2'>
                                    Fruiting Vegetables  </label><br></br></div>


                            <div><input className='bg-[#32be51]'
                                type="checkbox"
                                name='checkbox3'
                                value={inputValues.checkbox3 || ""}
                                onChange={handleInputChange} required />


                                <label className='ml-2' htmlFor='checkbox3'>
                                    Fruiting Vegetables  </label><br></br></div>

                        </div>


                    </div>

                    <p className='text-[0.7rem]'>Indicate in the input field above if you don't see your category here</p>


                </form>

            </section>
        </>
    );
};

export default WaitingListForm;
