import React from 'react';
import bannerVideo from '../../assets/zabgadget_hero.mp4'; 

const HeroMain = () => {
    return (
<div className="bg-[#221f65] text-white rounded-b-2xl mx-auto w-11/12 flex flex-col items-center relative h-auto">
    <div className="flex flex-col  mx-4 sm:mx-8 md:mx-16 lg:mx-64 items-center justify-center mt-6 gap-5">
    <h1 className="text-center font-bold text-3xl sm:font-bold sm:text-3xl lg:font-extrabold lg:text-4xl">
    Upgrade Your Tech Accessorize with ZapGadget Accessories
</h1>

<p className="text-center text-sm sm:text-base lg:text-lg">
    Explore the latest gadgets that will take your experience to the next level. From smart devices
    <br />
    to the coolest accessories, we have it all!
</p>

    </div>
    <div className="w-8/12 -mt-24">
        <div className="relative lg:w-full -bottom-28 mx-auto lg:ml-32 md:ml-20">
            <video
                src={bannerVideo}
                autoPlay
                loop
                muted
                className="lg:w-2/3 md:w-4/5 sm:w-4/5 h-auto rounded-md border border-gray-100 p-4 "
            >
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</div>

    );
};

export default HeroMain;
