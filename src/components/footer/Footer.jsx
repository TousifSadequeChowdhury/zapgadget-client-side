import React from 'react';

const Footer = () => {
    return (
     
      <footer className="footer bg-white text-[#09080F] flex flex-col items-center gap-8 mx-auto py-8 justify-center mt-5 divide-y">
   <div className="text-center flex flex-col items-center">
  <h1 className="text-2xl font-bold">Gadget Heaven</h1>
  <p className="text-sm text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
</div>

      <div className="flex justify-center gap-20 pt-4">
        <nav className="flex flex-col items-center">
        <h6 className="text-black font-bold">Services</h6>
          <a className="link link-hover text-gray-400">Product Support</a>
          <a className="link link-hover text-gray-400">Order Tracking</a>
          <a className="link link-hover text-gray-400">Shipping & Delivery</a>
          <a className="link link-hover text-gray-400">Returns</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-black font-bold">Company</h6>
          <a className="link link-hover text-gray-400">About us</a>
          <a className="link link-hover text-gray-400">Careers</a>
          <a className="link link-hover text-gray-400">Contact</a>

        </nav>
        <nav className="flex flex-col items-center">
        <h6 className="text-black font-bold">Legal</h6>
          <a className="link link-hover text-gray-400">Terms of use</a>
          <a className="link link-hover text-gray-400">Privacy policy</a>
          <a className="link link-hover text-gray-400">Cookie policy</a>
        </nav>
      </div>
    </footer>

        
    );
};

export default Footer;