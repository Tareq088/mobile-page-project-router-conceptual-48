import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';

const MainLayOut = () => {
    return (
        <>
             <Navbar/>
             <div className='bg-red-50 min-h-[calc(100vh-116px)]'>
                <div className='max-w-screen-lg mx-auto px-4 md:px-8 lg:px-12 xl:px-16'>
                    <Outlet/>
                </div>
             </div>
             <Footer/>     
        </>
    );
};

export default MainLayOut;          