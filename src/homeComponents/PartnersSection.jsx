import emery from "../assets/images/Logo (1).png";
import prepworld from "../assets/images/Logo (2).png";
import didafresh from "../assets/images/Logo (3).png";
import logistics from "../assets/images/Logo (4).png";
import pik from "../assets/images/pik.png";
import microsoft from "../assets/images/microsoft.jpg";
import roifarm from "../assets/images/roifarm.jpg";
import startglobal from "../assets/images/start-global.jpg";
import alx from "../assets/images/alx.jpg";


const PartnersSection = () => {
  return (
    <>
      <section className='font-Manrope bg-[#55BB77] py-5'>
        <h1 className='text-[#001F0A] font-extrabold text-[1.2rem] md:text-[2rem] text-center'>OUR PARTNERS</h1>

        <div className="overflow-hidden w-full">


          <div className="flex animate-scroll whitespace-nowrap">



            <div className='flex gap-3 md:gap-8 justify-center items-center mt-5 px-6 md:px-14 w-full'>
              
              <div className="basis:-[90%] md:basis-[30%]">
                <img className='w-[90rem] md:w-full' src={emery} alt="Emery Logo" />
              </div>

              <div className="basis:-[80%] md:basis-[30%]">
                <img className='w-full' src={pik} alt="Pik Logo" />
              </div>

              <div className="basis:-[80%] md:basis-[30%]">
                <img className='w-[100rem] md:w-full' src={microsoft} alt="roifarm Logo" />
              </div>

              <div className="basis:-[80%] md:basis-[30%]">
                <img className='w-[100rem] md:w-full' src={roifarm} alt="Dida Fresh Logo" />
              </div>

              <div className="basis:-[80%] md:basis-[40%]">
                <img className='w-[100rem] md:w-full' src={prepworld} alt="prep Logo" />
              </div>

              <div className="basis:-[80%] md:basis-[40%]">
                <img className='w-[100rem] md:w-full' src={didafresh} alt="Dida Fresh Logo" />
              </div>

              <div className="basis:-[100%] md:basis-[60%]">
                <img className='w-[120rem] md:w-full' src={logistics} alt="Fresh Fruits Logistics Logo" />
              </div>

              <div className="basis:-[80%] md:basis-[30%]">
                <img className='w-[800px] md:w-full' src={alx} alt="alx Logo" />
              </div>

              <div className="basis:-[80%] md:basis-[30%]">
                <img className='w-[90rem] md:w-full' src={startglobal} alt="start-global Logo" />
              </div>

            </div>




          </div>
        </div>

      </section>
    </>
  )
}

export default PartnersSection