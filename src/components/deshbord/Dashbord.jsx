import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

const Deshbord = () => {
  const location = useLocation();
  const activeStyle = 'bg-white text-[#3B1C32]';
  const inactiveStyle = 'bg-[#3B1C32] text-white';
  
    return (
        <div className='h-52'>
        <div className="bg-[#3B1C32] px-20 h-52">
    <div className='flex flex-col  items-center justify-center '>
    <h1 className='font-extrabold text-xl text-center text-white'>Dashboard</h1>
    <p className='text-center text-sm text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    <div className="flex gap-3">
            {/* Cart button */}
            <Link to="/deshbord/addtocart">
              <button
                className={`btn rounded-full my-4 w-20 ${
                  location.pathname === '/deshbord/addtocart' ? activeStyle : inactiveStyle
                }`}
              >
                Cart
              </button>
            </Link>
            {/* Wishlist button */}
            <Link to="/deshbord/addtowish">
              <button
                className={`btn rounded-full my-4 w-20 ${
                  location.pathname === '/deshbord/addtowish' ? activeStyle : inactiveStyle
                }`}
              >
                Wishlist
              </button>
            </Link>
          </div>
  </div>
  </div>
  </div>
    );
};
export default Deshbord;

