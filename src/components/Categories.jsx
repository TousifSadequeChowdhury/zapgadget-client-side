import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    const safeCategories = Array.isArray(categories) ? categories : [];

  

    const allCategories = safeCategories.length > 0 ? safeCategories : defaultCategories;

    return (
        <div className="w-full bg-white text-black p-3 rounded-lg shadow-sm ">
            <div className="flex overflow-x-auto space-x-3 justify-center">
                
                {allCategories.map((category, index) => (
                
                    <NavLink
                        key={index}
                        to={`/cards/${category.category}`}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center p-2 hover:text-white hover:bg-[#3B1C32] bg-slate-100 rounded-lg transition-all ${
                                isActive ? 'bg-blue-900 text-white' : 'text-black'
                            }`
                        }
                    >
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-xs mt-1">{category.category}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
