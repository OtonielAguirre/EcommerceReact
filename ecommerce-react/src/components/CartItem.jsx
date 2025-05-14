import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex-1">
        <h4 className="font-semibold">{item.title}</h4>
      </div>
      <input
        type="number"
        value={item.quantity}
        onChange={handleQuantityChange}
        className="w-20 mx-4 border rounded px-2 py-1"
        min="1"
      />
      <p className="flex-1 text-right">${(item.price * item.quantity).toFixed(2)}</p>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
};
export default CartItem;