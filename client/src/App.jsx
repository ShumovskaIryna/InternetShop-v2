import React from 'react';
// import FullProduct from './components/Items/FullProduct/FullProduct';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/Products';

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
        <Routes>
          <Route exact path="/" element={
          <Home/>}/>
          <Route exact path="/products" element={
          <Products/>}/>
        </Routes>
      {/* <FullProduct
      /> */}
    </div>
  );
}

export default App;