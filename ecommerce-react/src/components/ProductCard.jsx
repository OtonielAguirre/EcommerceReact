import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 900,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Added successfully"
          }); 
    }
  return (
    <div className="border rounded-lg p-4 m-4 max-w-xs hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.title} 
        className="h-48 object-contain mx-auto"
      />
      <h3 className="font-bold text-lg mt-2 truncate">{product.title}</h3>
      <p className="text-gray-600 text-sm h-12 overflow-hidden">{product.description}</p>
      <p className="text-xl font-bold my-2">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;