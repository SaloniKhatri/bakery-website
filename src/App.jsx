
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu'
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import LogIn from './Components/LogIn';
import { useCart } from './context/CartContext';

function App() {
        

        return (
                <>

                        <Navbar/>
                        <div className='pt-5'></div><Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/menu" element={<Menu />} />
                                <Route path="/gallery" element={<Gallery />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/checkout" element={<Checkout />} />

                                <Route path="/Login" element={<LogIn />} />

                        </Routes>

                </>

        );
}

export default App;
