import React from 'react';
import Dashbord from './Dashbord';
import { Outlet } from 'react-router-dom';

const DashbordMain = () => {
    return (
        <div>
            <Dashbord></Dashbord>
            <Outlet>
            </Outlet>
        </div>
    );
};

export default DashbordMain;