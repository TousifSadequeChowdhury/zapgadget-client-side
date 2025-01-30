import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaHeart, FaInfoCircle } from 'react-icons/fa';
import { CartContext } from '../CartProvider';

const Product = ({ product }) => {
  const { addToCart, addToWishcart } = useContext(CartContext);
  const { productid, productTitle, price, productImage, category, quantity } = product;

  // Determine if the product is out of stock
  const isOutOfStock = quantity === 0;

  return (
    <div className="card bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
      {/* Out of Stock Badge */}
      {isOutOfStock && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          Out of Stock
        </div>
      )}

      {/* Product Image with Hover Zoom */}
      <div className="relative overflow-hidden">
        <img
          src={productImage}
          alt={productTitle}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-3">
        {/* Product Title */}
        <h2 className="text-sm font-semibold text-gray-800 mb-2 truncate">{productTitle}</h2>

        {/* Price and Stock Availability */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-gray-900">${price}</p>
          <p className={`text-xs font-semibold ${isOutOfStock ? 'text-red-500' : 'text-green-500'}`}>
            {isOutOfStock ? 'Out of Stock' : `In Stock (${quantity})`}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1">
          <button
            className={`btn ${
              isOutOfStock ? 'border-gray-300 cursor-not-allowed' : 'border-gray-500 hover:bg-gray-100'
            } border text-black rounded-sm py-1 px-2 text-xs flex items-center justify-center flex-1 transition-all duration-200`}
            onClick={() => !isOutOfStock && addToCart(product)}
            disabled={isOutOfStock}
          >
            <FaCartPlus className="mr-1 text-sm" /> Add to Cart
          </button>
          <button
            className="btn border border-gray-500 text-black rounded-sm py-1 px-2 text-xs flex items-center justify-center flex-1 hover:bg-gray-100 transition-all duration-200"
            onClick={() => addToWishcart(product)}
          >
            <FaHeart className="mr-1 text-sm" /> Wishlist
          </button>
        </div>

        {/* Details Button */}
        <Link
  to={`/cards/${category}/detail/${product._id}`} // Use _id instead of productid
  className="btn border border-gray-500 text-black rounded-sm py-1 px-2 text-xs flex items-center justify-center gap-1 hover:bg-gray-100 transition-all duration-200 w-full mt-2"
>
  <FaInfoCircle className="text-sm" /> Details
</Link>

      </div>
    </div>
  );
};

export default Product;
