import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Swal from 'sweetalert2';
import { clearCart } from '../features/cart/cartSlice';



const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const showAlert = () => {
        Swal.fire({
          title: "Payment confirmation",
          text: "Are you sure you want to purchase these items?",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          customClass: {
            confirmButton: '!bg-blue-600 !hover:bg-blue-700 !text-white !px-4 !py-2 !rounded-lg',
            cancelButton: '!bg-red-600 !hover:bg-red-700 !text-white !px-4 !py-2 !rounded-lg'
          },
          confirmButtonText: "Yes, confirm purchase!"
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(clearCart());
            
            Swal.fire({
              title: "Payment confirmed!",
              text: "Your purchase has been successfully completed.",
              icon: "success",
              customClass: {
                confirmButton: '!bg-blue-600 !hover:bg-blue-700 !text-white !px-4 !py-2 !rounded-lg',
                cancelButton: '!bg-red-600 !hover:bg-red-700 !text-white !px-4 !py-2 !rounded-lg'
              },
            });
          }
        });
      }
    


  return (
    <div className="container mx-auto px-4">
      <nav className="bg-gray-100 p-4 mb-8 rounded">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          ← Continue Shopping
        </Link>
      </nav>
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-8 p-4 bg-gray-50 rounded">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Total:</h3>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={showAlert}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg"
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;