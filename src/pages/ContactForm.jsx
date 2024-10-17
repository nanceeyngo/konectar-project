import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ContactForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues(values => ({ ...values, [name]: value }));

    // if (!value.trim()) {
    //   setError('This field is required!');
    // }
    // else {
    //   setError('')
    // }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      setShowModal(true);
      console.log('Form submitted with input:', { inputValues })
    }
  }


  return (
    <>

      <section className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.1),rgba(6,8,15,0.1)),url('assets/images/Hero1.png')] h-screen bg-cover md:bg-top bg-center bg-no-repeat w-full p-10 md:p-20 flex justify-center itmes-center">

        <div className='m-auto md:w-[60%] px-8 py-7 rounded-xl bg-white container'>

              <h1 className='text-[1.5rem] md:text-[2rem] text-[#003311] font-bold'>How can we help?</h1>
              <p className='text-[#003311] font-semibold'>Reach out and we will get in touch in 24 hours.</p>
          <form className='mt-3' onSubmit={handleSubmit}>

            <div className='flex gap-5'>

              <div className='flex flex-col basis-[70%] md:basis-[50%]'>
              <label className='font-bold' htmlFor='firstname'>
                First Name  </label>
              <input className='mt-3 border-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-1 md:py-2 w-full'
                type="text"
                name='firstname'
                placeholder='First Name'
                value={inputValues.firstname || ""}
                onChange={handleInputChange} required />
              </div>


              <div className='flex flex-col basis-[70%] md:basis-[50%]'>
              <label className='font-bold' htmlFor='lastname'>
                Last Name  </label>
              <input className='mt-3 border-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-1 md:py-2 w-full'
                type="text"
                name='lastname'
                placeholder='Last Name'
                value={inputValues.lastname || ""}
                onChange={handleInputChange} required />
              </div>

            </div>


            <div className='flex gap-5 mt-6'>

              <div className='flex flex-col basis-[70%] md:basis-[50%]'>
              <label className='font-bold' htmlFor='email'>
                Email Address  </label>
              <input className='mt-3 border-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-1 md:py-2 w-full'
                type="email"
                name='email'
                placeholder='Enter your email address'
                value={inputValues.email || ""}
                onChange={handleInputChange} required />
              </div>


              <div className='flex flex-col basis-[70%] md:basis-[50%]'>
              <label className='font-bold' htmlFor='phoneno'>
                Phone Number </label>
              <input className='mt-3 border-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-1 md:py-2 w-full'
                type="tel"
                name='phoneno'
                placeholder='Enter your phone number'
                value={inputValues.phoneno || ""}
                onChange={handleInputChange} required />
              </div>

            </div>



            <label className='font-bold' htmlFor='message'>
              Send Us A Message  </label><br></br>
            <textarea className='h-[150px] md:h-[120px] bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
              name="message"
              placeholder='Send us a message'
              value={inputValues.message || ""}
              onChange={handleInputChange} required></textarea>
            <br></br><br></br>

            {error && <p className='text-error70 ease-in font-bold'>{error}</p>}
            <button type="submit"
              className='bg-[#009933] px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'
            >
              Submit
            </button>
          </form>



          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
              <div className="bg-white p-8 w-[90%] md:w-[35%] rounded-md shadow-md text-center transition-all duration-300 ease-in-out scale-95">
                
                <h1 className="text-[1.4rem] font-bold mt-11">Thank you for joining the Konectar Waitlist</h1>

                <p className="mt-3">We've received your information and you're now on the list to be one of the first to
                  experience our platform. Keep an eye on your inbox for updates, and we'll notify you as soon
                  as we're ready to launch!
                </p>


                <div className='flex gap-4 mt-6 justify-center items-center font-bold'>

                  <button type="button"
                    className='bg-[#009933] px-6 py-2 rounded-lg text-[0.8rem] md:text-[1rem] text-white flex gap-2 items-center'
                  >
                    Join Whatsapp 
                  </button>


                  <Link to="/"><button
                    type='button'
                    className='bg-white px-6 py-2 rounded-lg text-[0.8rem] md:text-[1rem] text-[#009933]'
                  >
                    Back to Home
                  </button>
                  </Link>
                </div>


              </div>

            </div>
          )}
        </div>

      </section>
    </>
  );
};

export default ContactForm;
