import Logo from '../assets/images/KLogo.png'
import { navItems } from "../constants";
import { Menu, X} from "lucide-react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleNavbar = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 bg-neutral20 border-b border-neutral70/'>
    <div className='container mx-auto px-8 md:px-16'>
    <div className='flex justify-between items-center'>
    
     {/* logo */}
    <div className='basis-[40%] lg:basis-[20%]'>
    <img className='size-full' src={Logo}  alt="Logo"/>
    </div>

    <ul className='hidden lg:flex space-x-12'>
    {navItems.map((items, index) => (
      <li key={index}>
      <Link to={items.href}>{items.label}</Link>
      </li>
    ))}
    </ul>

    <div className='hidden lg:flex justify-center items-center space-x-12'>
    
    <Link to="/WaitingListForm"><button type="button"
       className='bg-[#009933] px-7 rounded-lg py-2 text-white text-[0.8rem] md:text-[1rem]'>Join Waitlist</button></Link>
    </div>

    <div className='lg:hidden md:flex flex-col justify-end'>
    <button onClick={toggleNavbar}>
    {mobileMenu ? <X /> : <Menu />}
    </button>
    </div>

    </div>
    </div>
    <div>

    {mobileMenu && (
      <div onClick={toggleNavbar} className='lg:hidden w-full py-12 fixed bg-white flex flex-col border-solid border-[1px] border-[#4665] justify-center items-center -z-50'>
      <ul>
      {navItems.map((item, index) => (
        <li key={index} className='py-4'>
        <Link to={item.href}>{item.label}</Link>
        
        </li>
      ))}
      </ul>
      <Link to="/WaitingListForm"><button type="button"
       className='bg-[#009933] px-7 rounded-lg py-2 text-white text-[0.8rem] md:text-[1rem]'>Join Waitlist</button></Link>
     
      
      </div>
    )}

    </div>
    </nav>
  )
}

export default Navbar