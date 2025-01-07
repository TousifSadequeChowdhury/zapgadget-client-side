import React from 'react';
import bannerImage from '../../assets/banner.jpg';
const HeroMain = () => {
    return (
      
        <div className="navbar bg-[#9538E2] text-white rounded-b-2xl mx-auto w-11/12  flex flex-col items-center pt-10 relative h-[420px] ">  
     <div className='flex flex-col mx-64 items-center justify-center gap-7'>
    <h1 className='font-extrabold text-4xl text-center'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
    <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br></br>to the coolest accessories, we have it all!</p>
</div>
<button
  className="btn rounded-full text-[#9538E2] my-4"
  onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
>
  Shop Now
</button>
<div className="w-7/12 p-2 ">
  <div className="absolute -bottom-72 ">
  <img 
      src={bannerImage} 
      alt="Banner" 
      className="w-2/3 h-auto rounded-md border border-gray-100 p-4"
    />
  </div>

</div>
        </div>
      
    );
};

export default HeroMain;