import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
