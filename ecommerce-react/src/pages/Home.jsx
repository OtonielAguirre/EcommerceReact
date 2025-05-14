import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=10')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <nav className="bg-gray-100 p-4 mb-8 rounded">
        <Link 
          to="/cart"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded float-right"
        >
          🛒 View Cart
        </Link>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;