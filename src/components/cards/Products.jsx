import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useParams, useLoaderData } from 'react-router-dom';

const Products = () => {
  const { category } = useParams();
  const data = useLoaderData();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredByCategory = [...data].filter(product => product.category === category);
    setProducts(filteredByCategory.length > 0 ? filteredByCategory : data);
  }, [category, data]);

  return (
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-semibold mb-3">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <Product
            key={product.product_id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;