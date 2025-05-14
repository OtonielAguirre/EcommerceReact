import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  });