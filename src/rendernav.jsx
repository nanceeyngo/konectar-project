import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./homeComponents/Navbar";
import Home from './pages/home';
import About from './pages/about';
import FarmersPage from './pages/FarmersPage';
import Footer from './homeComponents/Footer';
import BuyersPage from './pages/BuyersPage';
import TruckersPage from './pages/TruckersPage';
import WaitingListForm from './pages/WaitingListForm';
import ContactForm from './pages/ContactForm';


const Rendernav = () => {
    return (
        <>
         <Navbar />

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/FarmersPage' element={<FarmersPage />} />
            <Route path='/BuyersPage' element={<BuyersPage />} />
            <Route path='/TruckersPage' element={<TruckersPage />} />
            <Route path='/WaitingListForm' element={<WaitingListForm />} />
            <Route path='/ContactForm' element={<ContactForm />} />
            
        
        
        </Routes>   

        <Footer/>
        </>
    );
};

export default Rendernav;
