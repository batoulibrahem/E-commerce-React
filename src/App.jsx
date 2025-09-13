import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';  
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <main className="container-fluid px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
           <Route path="/Contact" element={<Contact />} />

        </Routes>
        
      </main>
    <Footer/>
    </CartProvider>
  );
}

export default App;
