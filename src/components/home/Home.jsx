import React from 'react';
import HeroMain from '../hero/HeroMain';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Categories';
import Products from '../Cards/Products';
import { Helmet } from 'react-helmet';

const Home = () => {
    const categories = useLoaderData(); 
    return (
        <div >
     <Helmet>
        <title>Gadget Heaven - Home</title>
      </Helmet>
            <HeroMain />
            <div className='h-[360px]' id='shop'></div>                    
            <Categories categories={categories}/>
            <Outlet/>
        </div>
    );
};

export default Home;
