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



            <div className='flex gap-14 md:gap-20 justify-center items-center mt-5 px-6 md:px-14 w-full'>
              
             {/* First set of logos */}
                <img className='w-[30%] md:w-full' src={emery} alt="Emery Logo" />                   
                <img className='w-[20%] md:w-[10%]' src={pik} alt="Pik Logo" />                          
                <img className='w-[30%] md:w-[15%]' src={microsoft} alt="roifarm Logo" />             
                <img className='w-[20%] md:w-[10%]' src={roifarm} alt="Dida Fresh Logo" />                        
                <img className='w-[30%] md:w-full' src={prepworld} alt="prep Logo" />                         
                <img className='w-full' src={didafresh} alt="Dida Fresh Logo" />                     
                <img className='w-full' src={logistics} alt="Fresh Fruits Logistics Logo" />          
                <img className='w-[10%] md:w-[20%]' src={alx} alt="alx Logo" />           
                <img className='w-[25%] md:w-[20%]' src={startglobal} alt="start-global Logo" />  


                  {/* Second set of logos (for seamless scrolling) */}
                 <img className='w-[30%] md:w-full' src={emery} alt="Emery Logo" />                   
                <img className='w-[20%] md:w-[10%]' src={pik} alt="Pik Logo" />                          
                <img className='w-[30%] md:w-[15%]' src={microsoft} alt="roifarm Logo" />             
                <img className='w-[20%] md:w-[10%]' src={roifarm} alt="Dida Fresh Logo" />                        
                <img className='w-[30%] md:w-full' src={prepworld} alt="prep Logo" />                         
                <img className='w-full' src={didafresh} alt="Dida Fresh Logo" />                     
                <img className='w-full' src={logistics} alt="Fresh Fruits Logistics Logo" />          
                <img className='w-[10%] md:w-[20%]' src={alx} alt="alx Logo" />           
                <img className='w-[25%] md:w-[20%]' src={startglobal} alt="start-global Logo" />   

                {/* Third set of logos (for seamless scrolling) */}
                 <img className='w-[30%] md:w-full' src={emery} alt="Emery Logo" />                   
                <img className='w-[20%] md:w-[10%]' src={pik} alt="Pik Logo" />                          
                <img className='w-[30%] md:w-[15%]' src={microsoft} alt="roifarm Logo" />             
                <img className='w-[20%] md:w-[10%]' src={roifarm} alt="Dida Fresh Logo" />                        
                <img className='w-[30%] md:w-full' src={prepworld} alt="prep Logo" />                         
                <img className='w-full' src={didafresh} alt="Dida Fresh Logo" />                     
                <img className='w-full' src={logistics} alt="Fresh Fruits Logistics Logo" />          
                <img className='w-[10%] md:w-[20%]' src={alx} alt="alx Logo" />           
                <img className='w-[25%] md:w-[20%]' src={startglobal} alt="start-global Logo" />         
            
            </div>




          </div>
        </div>

      </section>
    </>
  )
}

export default PartnersSection