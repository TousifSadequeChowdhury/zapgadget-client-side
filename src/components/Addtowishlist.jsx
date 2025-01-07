import React, { createContext, useContext } from 'react';
import { CartContext } from './CartProvider';
import { RxCross2 } from 'react-icons/rx';
import { ToastContainer, toast } from 'react-toastify';

const Addtowishlist = () => {

const remove = () => toast("Successfully removed from Wiah List!");
const alreadyInCart = () => toast("Item already exists in the cart!");
const add = () => toast("Item added to cart!");


 const {addToCart} =useContext(CartContext);
 const {wishcart, cart, removeFromwishlist,totalPrice ,handlesortbyprice,product_id} = useContext(CartContext);
 const productIds = cart.map(item => item.product_id);

 const handladdtocart = () => {
  // Iterate through wishcart and check for existing product IDs
  wishcart.map(product => {
    if (productIds.includes(Number(product.product_id))) {
      alreadyInCart();
    } else {
      addToCart(product); // Only add to cart if the product is not already there
      productIds.push(Number(product.product_id)); // Add the product_id to productIds to track it
      removeFromwishlist(product.product_id)
      add();
    }
  });
 }
      return (
    <div className="bg-slate-100">
      <div className="flex items-center justify-between mx-9">
        <h1 className="font-bold">WishList</h1>
   
      </div>

      <ul>
        {wishcart.map((product) => (
          <div key={product.id} className="flex items-center mt-4 mb-4 py-4 px-4 bg-white mx-4 sm:mx-auto rounded-lg">
            <img
              className="h-24 w-auto pl-3 mr-5 bg-slate-100 rounded-md"
              src={product.product_image}
              alt={product.product_title}
            />
            <div className="flex justify-between w-full pr-5">
              <div className='my-2'>
                <h2 className="font-bold ">{product.product_title}</h2>
                <p className="text-gray-600 mt-1">{product.description}</p>
                <p className="text-gray-800 mt-1">Price: ${product.price}</p>
                <button className="btn mt-1 bg-[#9538E2] text-white rounded-full text-xs "  onClick={handladdtocart}>Add to Card</button>
              </div>
              <RxCross2
                onClick={() =>{ removeFromwishlist(product.product_id);
                  remove();
                }}
                className="text-red-700 text-2xl border border-red-700 rounded-full p-1 hover:text-red-500 hover:border-red-500 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </ul>
      <ToastContainer />

    </div>
  );
}
export default Addtowishlist;