import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Buy from './components/Buy';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Products from './components/Products';
import First from './components/First';
import Second from './components/Second';
import Farmer from './components/Farmer'; 
import Shop from './components/Shop';

const App = () => {
  return (
    <BrowserRouter>
      <ConditionalNavbar />
      <Routes>
        <Route path="/customer" element={<Products />} />
        <Route path="/second" element={<Second />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<First />} />
        <Route path="/farmer" element={<Farmer />} /> 
        <Route path="/shop" element={<Shop />} /> 
      </Routes>
    </BrowserRouter>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/second' && location.pathname !== '/farmer';

  return (
    <div>
      {showNavbar && <Navbar />}
    </div>
  );
};

export default App;
