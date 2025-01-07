import React, { createContext, useContext } from 'react';
import { CartContext } from './CartProvider';
import { RxCross2 } from 'react-icons/rx';

const Addtowishlist = () => {
    const {addToCart} =useContext(CartContext);
 const {wishcart, cart, removeFromwishlist,totalPrice ,handlesortbyprice,product_id} = useContext(CartContext);
 const productIds = cart.map(item => item.product_id);

 const handladdtocart = () => {
  // Iterate through wishcart and check for existing product IDs
  wishcart.map(product => {
    if (productIds.includes(Number(product.product_id))) {
      alert('This product already exists!');
    } else {
      addToCart(product); // Only add to cart if the product is not already there
      productIds.push(Number(product.product_id)); // Add the product_id to productIds to track it
      removeFromwishlist(product.product_id)
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
          <div key={product.id} className="flex items-center mt-4 mb-4 bg-white mx-4 sm:mx-auto rounded-lg">
            <img
              className="h-24 w-auto pl-3"
              src={product.product_image}
              alt={product.product_title}
            />
            <div className="flex justify-between w-full pr-5">
              <div>
                <h2 className="font-bold">{product.product_title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800">Price: ${product.price}</p>
              </div>
              <RxCross2
                onClick={() => removeFromwishlist(product.product_id)}
                className="text-red-700 text-2xl border border-red-700 rounded-full p-1 hover:text-red-500 hover:border-red-500 transition-all duration-300"
              />
            <button onClick={handladdtocart}>add</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Addtowishlist;