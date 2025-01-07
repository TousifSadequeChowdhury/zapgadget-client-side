import { createContext,useState } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishcart, setCarsetwishcart] = useState([]);

    const addToCart = (addedproduct) => {
    setCart([...cart,addedproduct]);
  };

  const addToWishcart = (addedtowish) => {
    setCarsetwishcart([...wishcart,addedtowish]);
  };

  const handlesortbyprice = (product_id) => {
    setCart((prevCart) =>
      prevCart
        .filter((product) => product.product_id !== product_id)  // Filter out the product with the given product_id
        .sort((a, b) => b.price - a.price)  // Sort the remaining products by price in descending order
    );
  };
  

  const removeFromCart = (product_id) => {
   setCart((prevCart) => prevCart.filter((product)=> product.product_id   !== product_id ))
  };

  const removeFromwishlist = (product_id) => {
    setCarsetwishcart((prevCart) => prevCart.filter((product)=> product.product_id   !== product_id ))
   };
  const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  // console.log(totalPrice); 
  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,totalPrice ,handlesortbyprice,addToWishcart,wishcart, removeFromwishlist}}>
      {children}
    </CartContext.Provider>
  );
};
