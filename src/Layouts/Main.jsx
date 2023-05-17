import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Main() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Main;
