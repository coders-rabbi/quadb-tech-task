import React from 'react';
import { Outlet } from 'react-router-dom';
import NaveBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;