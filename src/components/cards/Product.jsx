import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaHeart, FaInfoCircle } from 'react-icons/fa';

const Product = ({ product, addToCart, addToWishlist }) => {
  const { product_id, product_title, price, product_image, category } = product;

  return (
    <div className="card bg-white border rounded-lg shadow-sm p-4">
      <img
        src={product_image}
        alt={product_title}
        className="rounded w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-medium mb-2">{product_title}</h2>
      <p className="text-gray-700 mb-4">Price: ${price}</p>
      <div className="flex items-center gap-2">
        <Link to={`/cards/${category}/detail/${product_id}`} className="btn bg-blue-400 text-white rounded py-1 px-3 text-sm flex items-center gap-1 hover:bg-blue-500">
          <FaInfoCircle /> Detail
        </Link>
        <button
          className="btn bg-green-400 text-white rounded p-2 text-sm flex items-center justify-center hover:bg-green-500"
          onClick={() => addToCart(product)}
        >
          <FaCartPlus />
        </button>
        <button
          className="btn bg-gray-400 text-white rounded p-2 text-sm flex items-center justify-center hover:bg-gray-500"
          onClick={() => addToWishlist(product)}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default Product;
