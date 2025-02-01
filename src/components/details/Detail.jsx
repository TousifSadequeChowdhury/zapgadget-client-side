import React, { useContext } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { CartContext } from '../CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
  const add = () => toast("Item added to cart!");
  const addToWishlist = () => toast("Item added to wishlist!");
  const alreadyInCart = () => toast("Item already exists in the cart!");
  const alreadyInWishList = () => toast("Item already exists in the Wish List!");

  const { addToCart, cart } = useContext(CartContext);
  const { addToWishcart, wishcart } = useContext(CartContext);
  const { product_id } = useParams();

  const data = useLoaderData(); // Fetch data from loader
  const product = data ? data.find((item) => item._id === product_id) : null; // Match using _id
  const productIds = cart.map(item => item._id); // Map cart items to _id
  const wishproductsIds = wishcart.map(item => item._id); // Map wishcart items to _id

  const handleAddToCart = () => {
    if (productIds.includes(product_id)) {
      alreadyInCart();
    } else {
      addToCart(product);
      add();
    }
  };

  const handleAddToWish = () => {
    if (wishproductsIds.includes(product_id)) {
      alreadyInWishList();
    } else {
      addToWishcart(product);
      addToWishlist();
    }
  };

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="py-6">
      <Helmet>
        <title>ZapGadget - Product Details</title>
      </Helmet>

      {/* Header */}
      <div className="px-6 md:px-20 h-64 bg-[#3B1C32] flex flex-col items-center justify-center mb-20">
        <h1 className="font-extrabold text-lg md:text-xl text-center text-white">Product Details</h1>
        <p className="text-center text-sm md:text-base text-white">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Details */}
      <div className="card card-side bg-base-100 w-11/12 md:w-8/12 mx-auto shadow-xl flex flex-col md:flex-row items-center justify-center -mt-32">
        <figure className="px-4 py-4 md:px-5">
          <img
            src={product.productImage}
            alt={product.productTitle}
            className="rounded-xl h-64 md:h-96 w-full object-cover"
          />
        </figure>
        <div className="flex flex-col gap-4 px-4 md:px-6 py-5 w-full">
          <h2 className="font-black text-md md:text-lg text-center md:text-left">{product.productTitle}</h2>
          <p className="text-lg font-semibold text-center md:text-left">Price: ৳{product.price}</p>
          <div className="text-center md:text-left">
            {product.quantity > 0 ? (
              <span className="px-2 py-1 text-green-600 bg-green-200 rounded-full text-xs border border-green-600">
                In Stock
              </span>
            ) : (
              <span className="px-2 py-0.5 text-red-600 bg-red-200 rounded-full text-xs border border-red-600">
                Sold Out
              </span>
            )}
          </div>
          <p className="mt-2 text-sm md:text-md text-justify">{product.description}</p>

         
<h3 className="font-semibold mt-4">Specification</h3>
<ul className="text-sm list-disc pl-5">
  {product.specifications
    ? product.specifications.split(',').map((spec, index) => (
        <li key={index}>{spec.trim()}</li>
      ))
    : "No specifications available."}
</ul>


          {/* Product Rating */}
          <div className="flex items-center gap-2 mt-4">
            <p className="font-semibold text-sm">Rating</p>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < product.rating ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-4 h-4 ${index < product.rating ? "text-yellow-500" : "text-gray-300"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            ))}
          </div>

          {/* Add to Cart and Wishlist Buttons */}
          <div className="flex items-center gap-4 mt-5">
            <button
              className="btn rounded-lg bg-[#3B1C32] text-white px-6 py-2 w-10/12 md:w-auto"
              onClick={() => handleAddToCart()}
            >
              Add To Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>

            <div
              className="p-2 rounded-full inline-flex items-center justify-center hover:bg-[#3B1C3249] border-gray-300 border cursor-pointer"
              onClick={() => handleAddToWish()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Detail;
