import React from 'react';
import HeroMain from '../hero/HeroMain';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Categories';
import Products from '../Cards/Products';
const Home = () => {
    const categories = useLoaderData(); 
    return (
        <div >
            <HeroMain />
            <div className='h-[360px]' id='shop'></div>                    
            <Categories categories={categories}/>
            <Outlet/>
        </div>
    );
};

export default Home;
