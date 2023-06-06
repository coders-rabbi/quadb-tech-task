import React from 'react';
import { Outlet } from 'react-router-dom';
import NaveBar from '../Shared/NavBar/NavBar';

const Root = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;