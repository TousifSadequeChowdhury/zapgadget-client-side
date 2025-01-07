import React from 'react';
import Dashbord from './Dashbord';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DashbordMain = () => {
    return (
        <div>
    <Helmet>
        <title>Gadget Heaven - Dashboard</title>
    </Helmet>
            <Dashbord></Dashbord>
            <Outlet>
            </Outlet>
        </div>
    );
};

export default DashbordMain;