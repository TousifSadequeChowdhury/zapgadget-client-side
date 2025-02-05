import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(100); // Default to All

  // Category data (for buttons)
  const categories = [
    { category_id: 100, category: "All" },
    { category_id: 101, category: "Smartphone" },
    { category_id: 102, category: "Laptop" },
    { category_id: 103, category: "Smartwatch" },
    { category_id: 104, category: "Tablet" },
    { category_id: 105, category: "Headphones" },
    { category_id: 106, category: "Earbuds" },
    { category_id: 107, category: "Camera" },
    { category_id: 108, category: "Drone" },
    { category_id: 109, category: "VR Headset" },
    { category_id: 110, category: "Gaming Console" },
    { category_id: 111, category: "Smart Home Devices" },
    { category_id: 112, category: "Wearable Tech" },
    { category_id: 113, category: "3D Printers" }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');

        if (!response.data || response.data.length === 0) {
          throw new Error("No products received from API");
        }

        // Filter products based on selected category
        const filteredProducts =
          selectedCategory === 100
            ? response.data // Show all products
            : response.data.filter((product) => product.category === selectedCategory);

        setProducts(filteredProducts);
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]); // Re-fetch products when category changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 md:mb-6">
      {selectedCategory === 100
        ? "All Products"
        : `Products in ${categories.find(cat => cat.category_id === selectedCategory)?.category}`}
    </h2>
  
    {/* Category Scrollable Tabs */}
    <div className="relative">
      <div className="flex space-x-4 pb-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.category_id}
            onClick={() => setSelectedCategory(cat.category_id)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl border transition-all ${
              selectedCategory === cat.category_id
                ? 'border-blue-500 bg-blue-50 text-blue-600 font-semibold'
                : 'border-gray-200 hover:border-blue-200 text-gray-600 hover:text-blue-500'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>
    </div>


      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => <Product key={product.productid} product={product} />)
        ) : (
          <p>No products Available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
