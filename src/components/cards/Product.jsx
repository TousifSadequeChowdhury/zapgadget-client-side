import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {product_id,product_title,price,product_image,category}= product;
    return (
        <div>
 <div className="card bg-base-100 h-full w-full object-cover shadow-md flex gap-2">
  <figure className="px-2 pt-2">
    <img
      src={product_image}
      alt="Gadged"
      className="rounded-xl h-44 w-full object-cover " />
  </figure>
  <div className="card-body">
    <h2 className="font-semibold">{product_title}</h2>
    <p>Price: {price}k</p>
    <div className="card-actions">
    <Link to={`/cards/${category}/detail/${product_id}`}>

    <button className="btn btn-outline rounded-full btn-primary">View Details</button>
    </Link>
    </div>
  </div>
</div>
   </div>
    );
};

export default Product;