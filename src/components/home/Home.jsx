import React from 'react';
import HeroMain from '../hero/HeroMain';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>ZapGadget - Home</title>
            </Helmet>

            {/* Hero Section */}
            <div className="w-full mb-32 lg:mb-2">
                <HeroMain />
            </div>

            {/* Spacer Section */}
            <div className="md:h-60 lg:h-40 w-full" id="shop"></div>

            {/* Outlet for Dynamic Content */}
            <section className="w-full mx-auto px-4 md:px-8 lg:px-16">
                <Outlet />
            </section>

        </div>
    );
};

export default Home;
