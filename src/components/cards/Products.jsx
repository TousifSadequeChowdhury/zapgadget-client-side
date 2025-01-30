import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const allProducts = response.data;
        
        // Filter products by category if specified
        const filteredByCategory = category
          ? allProducts.filter(product => product.category === parseInt(category))
          : allProducts;

        setProducts(filteredByCategory);
      } catch (err) {
        setError('Failed to fetch products. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl font-semibold mb-3">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map(product => (
            <Product key={product.productid} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
