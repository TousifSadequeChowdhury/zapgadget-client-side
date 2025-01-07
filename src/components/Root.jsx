import React from 'react';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const Router = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Nav></Nav>
            <Outlet>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Router;