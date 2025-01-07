import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    // Ensure categories is always an array
    const safeCategories = Array.isArray(categories) ? categories : [];

    return (
        <div className="w-44 bg-white text-black p-4 ml-40 mt-2 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div>
                {safeCategories.length > 0 ? (
                    safeCategories.map((category, index) => (
                        <NavLink
                            key={index}
                            to={`/cards/${category.category}`}
                            className={({ isActive }) =>
                                `text-lg py-2 px-2 hover:text-white hover:bg-[#9538E2]  flex bg-slate-100 mb-2 rounded-lg ${isActive ? 'bg-violet-700 text-white': ''}`
                            }
                        >
                            {category.category}
                        </NavLink>
                    ))
                ) : (
                    <div>No categories available.</div>
                )}
            </div>
        </div>
    );
};

export default Categories;
