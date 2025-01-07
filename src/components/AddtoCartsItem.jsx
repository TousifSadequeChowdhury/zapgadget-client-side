import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import priceicon from '/src/assets/priceadded.png'

const AddtoCartsItem = () => {
  const { cart, removeFromCart,totalPrice ,handlesortbyprice} = useContext(CartContext);
  const remove = () => toast("Successfully removed from cart!");


  return (
    <div className="bg-slate-100">
      <div className="flex items-center justify-between mx-9">
        <h1 className="font-bold">Cart</h1>
        <div className="flex items-center gap-3">
      <h1 className="font-bold">Total cost: ${totalPrice}</h1>
      <button className="bg-transparent hover:bg-[#9538E2] text-[#9538E2] font-semibold hover:text-white py-2 px-4 border border-[#9538E2] rounded-full hover:border-transparent" onClick={handlesortbyprice}>Sort by Price</button>
      <button className="btn bg-[#9538E2] text-white rounded-full" onClick={()=>document.getElementById('my_modal_5').showModal()}>Purchase</button>
      </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box flex flex-col items-center justify-center">
  <h3 className="font-bold text-lg text-center">Payment Successfully!</h3>
  <p className="py-4 ">Thanks for purchasing</p>
  <img src={priceicon} alt="Price Icon" className="" />
  <p className="py-4">Total price: ${totalPrice}</p>
  <div className="modal-action">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </form>
  </div>
</div>

</dialog>
      <ul>
        {cart.map((product) => (
          <div key={product.id} className="flex items-center mt-4 mb-4 py-4 px-4 bg-white mx-4 sm:mx-auto rounded-lg">
            <img
              className="h-24 w-auto pl-3 bg-slate-100 rounded-md mr-3"
              src={product.product_image}
              alt={product.product_title}
            />
            <div className="flex justify-between w-full pr-5">
              <div>
                <h2 className="font-bold">{product.product_title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800">Price: ${product.price}</p>
              </div>
              <RxCross2
                onClick={() =>{
                  removeFromCart(product.product_id); remove();
                } }
                className="text-red-700 text-2xl border border-red-700 rounded-full p-1 hover:text-red-500 hover:border-red-500 transition-all duration-300"
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
