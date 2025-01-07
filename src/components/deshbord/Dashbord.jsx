import React from 'react';
import { Link } from 'react-router-dom';

const Deshbord = () => {
  
    return (
        <div className='h-96 '>
        <div className="bg-[#9538E2] px-20 h-52">
    <div className='flex flex-col  items-center justify-center '>
    <h1 className='font-extrabold text-xl text-center text-white'>Dashboard</h1>
    <p className='text-center text-sm text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
  <div className='flex gap-3'>
  <button  className='btn rounded-full text-[#9538E2] my-4 w-20 '><Link to="/deshbord/addtocart">Cart</Link></button>
  <button className='btn rounded-full text-[#9538E2] my-4 w-20'><Link to="/deshbord/addtowish">Wishlist</Link></button>
  </div>
  </div>
  </div>
  </div>
    );
};
export default Deshbord;

