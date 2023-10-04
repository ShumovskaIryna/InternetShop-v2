import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import SubmitPage from './components/SubmitPage';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/submit" element={<SubmitPage />} />
      </Routes>
    </div>
  );
}

export default App;
