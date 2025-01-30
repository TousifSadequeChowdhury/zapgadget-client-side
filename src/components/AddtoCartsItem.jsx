import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { MdDelete } from "react-icons/md";  // Importing MdDelete from react-icons
import { ToastContainer, toast } from 'react-toastify';
import priceicon from '/src/assets/priceadded.png'

const AddtoCartsItem = () => {
  const { cart, removeFromCart, totalPrice, handlesortbyprice } = useContext(CartContext);
  const remove = () => toast("Successfully removed from cart!");
  console.log(cart);

  return (
    <div className="bg-slate-100 mx-5">
      <div className="flex items-center justify-between mx-4 sm:mx-9">
        <h1 className="font-bold text-sm sm:text-lg">Cart</h1>
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-sm sm:text-lg">Total cost: ${totalPrice}</h1>
          <button
            className="bg-transparent hover:bg-[#3B1C32] text-[#3B1C32] font-semibold hover:text-white py-2 px-4 border border-[#3B1C32] rounded-full hover:border-transparent text-xs sm:text-sm"
            onClick={handlesortbyprice}
          >
            Sort by Price
          </button>
          <button
            className="btn bg-[#3B1C32] text-white rounded-full text-xs sm:text-sm"
            onClick={() => document.getElementById('my_modal_5').showModal()}
          >
            Purchase
          </button>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center justify-center">
          <h3 className="font-bold text-lg text-center">Payment Successfully!</h3>
          <p className="py-4 text-xs sm:text-sm">Thanks for purchasing</p>
          <img src={priceicon} alt="Price Icon" className="w-16 h-auto mb-4" />
          <p className="py-4 text-xs sm:text-sm">Total price: ${totalPrice}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <ul>
        {cart.map((product) => (
          <div key={product.id} className="flex flex-col sm:flex-row items-center mt-4 mb-4 py-4 px-4 bg-white mx-4 sm:mx-auto rounded-lg">
            <img
              className="h-20 w-auto sm:h-24 sm:w-24 pl-3 bg-slate-100 rounded-md mr-3 mb-3 sm:mb-0"
              src={product.productImage}
              alt={product.product_title}
            />
            <div className="flex flex-col sm:flex-row justify-between w-full pr-5">
              <div>
                <h2 className="font-bold text-sm sm:text-base">{product.product_title}</h2>
                <p className="text-gray-600 text-xs sm:text-sm">{product.description}</p>
                <p className="text-gray-800 text-sm sm:text-base">Price: ${product.price}</p>
              </div>
              <MdDelete
                onClick={() => {
                  removeFromCart(product.product_id); remove();
                }}
                className="text-red-700 text-2xl sm:text-3xl border border-red-700 rounded-full p-1 hover:text-red-500 hover:border-red-500 transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
};

export default AddtoCartsItem;
