import React, { useContext } from 'react';
import { CartContext } from './CartProvider';
import { MdDelete } from 'react-icons/md';  // Import MdDelete from react-icons/md
import { ToastContainer, toast } from 'react-toastify';

const Addtowishlist = () => {

  // Toast notifications
  const remove = () => toast("Successfully removed from Wish List!");
  const alreadyInCart = () => toast("Item already exists in the cart!");
  const add = () => toast("Item added to cart!");

  // Cart Context
  const { addToCart, wishcart, cart, removeFromwishlist } = useContext(CartContext);
  
  const productIds = cart.map(item => item.product_id); // Get the list of product IDs in the cart

  const handladdtocart = () => {
    // Iterate through wishcart and check for existing product IDs
    wishcart.forEach(product => {
      if (productIds.includes(Number(product.product_id))) {
        alreadyInCart(); // Notify the user if the item is already in the cart
      } else {
        addToCart(product); // Add to the cart
        productIds.push(Number(product.product_id)); // Track the added product ID
        removeFromwishlist(product.product_id); // Remove the product from the wishlist
        add(); // Notify the user that the item was added to the cart
      }
    });
  }

  return (
    <div className="bg-slate-100 mx-5">
      <div className="flex items-center justify-between mx-9">
        <h1 className="font-bold">Wish List</h1>
      </div>

      <ul>
        {wishcart.map((product) => (
          <div key={product.product_id} className="flex items-center mt-4 mb-4 py-4 px-4 bg-white mx-4 sm:mx-auto rounded-lg">
            <img
              className="h-24 w-auto pl-3 mr-5 bg-slate-100 rounded-md"
              src={product.productImage}
              alt={product.product_title}
            />
            <div className="flex justify-between w-full pr-5">
              <div className='my-2'>
                <h2 className="font-bold">{product.product_title}</h2>
                <p className="text-gray-600 mt-1">{product.description}</p>
                <p className="text-gray-800 mt-1">Price: ${product.price}</p>
                <button 
                  className="btn mt-1 bg-[#3B1C32] text-white rounded-full text-xs"  
                  onClick={handladdtocart}>
                    Add to Cart
                </button>
              </div>
              <MdDelete
                onClick={() => {
                  removeFromwishlist(product.product_id);
                  remove();
                }}
                className="text-red-700 text-2xl sm:text-3xl border border-red-700 rounded-full p-1 hover:text-red-500 hover:border-red-500 transition-all duration-300 cursor-pointer"
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
