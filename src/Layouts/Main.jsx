import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Main() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 min-h-[calc(100vh-408px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
