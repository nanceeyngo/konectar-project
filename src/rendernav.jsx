import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./homeComponents/Navbar";
import Home from './pages/home';
import About from './pages/about';
import FarmersPage from './pages/FarmersPage';
import Footer from './homeComponents/Footer';


const Rendernav = () => {
    return (
        <>
         <Navbar />

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/FarmersPage' element={<FarmersPage />} />
            
        
        
        </Routes>   

        <Footer/>
        </>
    );
};

export default Rendernav;
