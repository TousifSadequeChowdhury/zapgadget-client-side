import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useParams ,useLoaderData } from 'react-router-dom';
import { CartContext } from '../CartProvider';


const Detail = () => {
const {addToCart,cart} =useContext(CartContext);
const {addToWishcart,wishcart} =useContext(CartContext);
const { product_id , price} = useParams(); 

  const data = useLoaderData();  
  const product = data ? data.find((item) => item.product_id === Number(product_id)) : null;
  const productIds = cart.map(item => item.product_id);
  const wishproductsIds =wishcart.map(item => item.product_id);
  const handleAddToCart=()=>{
  if(productIds.includes(Number(product_id))){
    alert('This product already exists!');
    console.log('cccc');
  }else{
   addToCart(product);

  }
 
}

const handleAddToWish=()=>{
if(wishproductsIds.includes(Number(product_id)))
{
  alert('This product already exists!');

}
else{
  addToWishcart(product);
  console.log(product)
  console.log(wishcart)
}
 
 }

return (
    <div className="py-6">
      {/* Header */}
      <div className="px-20 h-64 bg-[#9538E2]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-xl text-center text-white">Product Details</h1>
          <p className="text-center text-sm text-white">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
      </div>

      {/* Product Details */}
      <div className="card card-side bg-base-100 w-8/12 h-auto shadow-xl flex items-center justify-center mx-auto -mt-40">
        <figure className="px-5">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="rounded-xl h-96"
          />
        </figure>
        <div className="flex flex-col gap-2 px-6 py-5">
          <h2 className="font-black mt-5 text-lg">{product.product_title}</h2>
          <p className="text-xl font-semibold">Price: ${product.price}</p>
          <div>
            {product.availability ? (
              <span className="px-2 py-1 text-green-600 bg-green-200 rounded-full text-xs border border-green-600">
                In Stock
              </span>
            ) : (
              <span className="px-2 py-0.5 text-red-600 bg-red-200 rounded-full text-xs border border-red-600">
                Sold Out
              </span>
            )}
          </div>
          <p className="mt-2 text-md">{product.description}</p>

          {/* Product Specifications */}
          <h3 className="font-semibold mt-4">Specification</h3>
          {product.specifications.map((spec, index) => (
            <p key={index} className="text-sm">{index + 1}. {spec}</p>
          ))}

          {/* Product Rating */}
          <div className="flex items-center gap-2 mb-5 mt-4">
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

          {/* Add to Cart Button */}
          <div className="flex items-center gap-4 mb-5">
          {/* <ToastContainer /> */}

            <button
              className="btn rounded-full bg-[#9538E2] text-white px-6 py-2"
       onClick={() => handleAddToCart(
        
        )}>
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
              
            {/* Wishlist Icon */}
            <div className="p-1 rounded-full inline-flex items-center justify-center hover:bg-[#9538e249] border-gray-300 border" onClick={() => handleAddToWish(
        
      )}>
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
    </div>
  );
};

export default Detail;
