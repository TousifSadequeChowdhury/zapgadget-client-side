import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useParams, useLoaderData } from 'react-router-dom';

const Products = () => {

  const {category}= useParams()
  const data = useLoaderData();

  // console.log(category)
  const[products,setProducts]= useState([]);
useEffect(()=>{
  const filteredByCategory = [...data].filter(product=> product.category === category)

  setProducts(filteredByCategory.length > 0 ? filteredByCategory : data);

  console.log(filteredByCategory)
},[category, data])
  return (
    <div className="grid mx-40 -mt-64 ml-auto w-7/12 grid-cols-3 gap-4 ">       
     {products.map(product => (
              <Product 
                key={product.product_id} 
                product={product} 
              />
            ))}
          </div>
          
        );
};

export default Products;


