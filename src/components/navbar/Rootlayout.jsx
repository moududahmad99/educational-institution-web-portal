import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from '../footer/Footer';
import LogoArea from '../logoArea/LogoArea';

const RootLayout = () => {
    return (
        <>
            <LogoArea />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout