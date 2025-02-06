import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const categories = [

  { category_id: 101, category: 'Smartphone' },
  { category_id: 102, category: 'Laptop' },
  { category_id: 103, category: 'Smartwatch' },
  { category_id: 104, category: 'Tablet' },
  { category_id: 105, category: 'Headphones' },
  { category_id: 106, category: 'Earbuds' },
  { category_id: 107, category: 'Camera' },
  { category_id: 108, category: 'Drone' },
  { category_id: 109, category: 'VR Headset' },
  { category_id: 110, category: 'Gaming Console' },
  { category_id: 111, category: 'Smart Home Devices' },
  { category_id: 112, category: 'Wearable Tech' },
  { category_id: 113, category: '3D Printers' },
];

const ProductAdd = () => {
  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [quantity, setQuantity] = useState(''); // Quantity instead of availability
  const [category, setCategory] = useState(categories[0].category_id); // Default category set to "All"

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (productTitle && price && description && productImage && specifications && category && quantity) {
      try {
        const productData = {
          productTitle,              // Use productTitle instead of title
          price: parseFloat(price),
          description,
          productImage,              // Use productImage instead of image
          specifications,
          quantity: parseInt(quantity), // Use quantity instead of availability
          category,                  // Use category instead of category_id
        };

        const response = await axios.post('https://zapgadget-server.vercel.app/api/products', productData);

        if (response.status === 201) {
          toast.success('Product added successfully!');
        }
      } catch (error) {
        toast.error('Error adding product! Please try again.');
      }
    } else {
      toast.error('Please fill in all fields!');
    }
  };

  return (
    <div className="py-6">
      <Helmet>
        <title>ZapGadget - Add New Product</title>
      </Helmet>

      {/* Header */}
      <div className="px-6 md:px-20 h-64 bg-[#3B1C32] flex flex-col items-center justify-center mb-20">
        <h1 className="font-extrabold text-lg md:text-xl text-center text-white">Add New Product</h1>
        <p className="text-center text-sm md:text-base text-white">
          Add a new gadget to our store and boost your inventory.
        </p>
      </div>

      {/* Add Product Form */}
      <div className="card card-side bg-base-100 w-11/12 md:w-8/12 mx-auto shadow-xl flex flex-col md:flex-row items-center justify-center -mt-32">
        <div className="flex flex-col gap-4 px-4 md:px-6 py-5 w-full">
          <h2 className="font-black text-md md:text-lg text-center md:text-left">Product Information</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold">Product Title</label>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="input w-full p-2 border"
                  placeholder="Enter product title"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="input w-full p-2 border"
                  placeholder="Enter price"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea w-full p-2 border"
                  placeholder="Enter product description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Product Image URL</label>
                <input
                  type="text"
                  value={productImage}
                  onChange={(e) => setProductImage(e.target.value)}
                  className="input w-full p-2 border"
                  placeholder="Enter image URL"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Specifications</label>
                <input
                  type="text"
                  value={specifications}
                  onChange={(e) => setSpecifications(e.target.value)}
                  className="input w-full p-2 border"
                  placeholder="Enter product specifications"
                />
              </div>

              {/* New input for Quantity */}
              <div>
                <label className="block text-sm font-semibold">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="input w-full p-2 border"
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select w-full p-2 border max-h-40 overflow-y-auto"
                >
                  {categories.map((cat) => (
                    <option key={cat.category_id} value={cat.category_id}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn rounded-lg bg-[#3B1C32] text-white px-6 py-2 w-full mt-4">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductAdd;
