// import React from 'react';
// import './App.css';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Menu from './Components/Menu'
// import About from './Components/About';
// import Gallery from './Components/Gallery';
// import Contact from './Components/Contact';
// import Cart from './Components/Cart';
// import LogIn from './Components/LogIn';
// import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Includes collapse functionality



// const router = createBrowserRouter(
//         [
//                 {
//                         path: "/",
//                         element:
//                                 <div>
//                                         <Navbar />
//                                         <Home />
//                                 </div>
//                 },
//                 {
//                         path: "/menu",
//                         element:
//                                 <div>
//                                         <Navbar />
//                                         <Menu />
//                                 </div>
//                 },
//                 {
//                         path: "/about",
//                         element:
//                                 <div>
//                                         <Navbar />
//                                         <About />
//                                 </div>
//                 },
//                 {
//                         path: "/gallery",
//                         element:
//                                 <div>
//                                         <Navbar />
//                                         <Gallery />
//                                 </div>
//                 },
//                 {
//                         path: "/contact",
//                         element:
//                                 <div>
//                                         <Navbar />
//                                         <Contact />
//                                 </div>
//                 },
//                 {
//                         path: "/cart",
//                         element:

//                         <div>
//                                  <Navbar />
//                                  <Cart/>
//                         </div>

//                 },
//                 {
//                         path: "/login",
//                         element:

//                         <div>
//                                  <Navbar />
//                                  <LogIn/>

//                         </div>

//                 },
//         ]
// );


// function App() {
//         return (
//                 <div>
//                         <RouterProvider router={router} />
//                 </div>
//         )
// }
// export default App;


//3js   

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu'
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import LogIn from './Components/LogIn';


function App() {
        return (
                <>
                <Navbar />
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/Login" element={<LogIn />} />
                        
                </Routes>
                
                </>
               
        );
}

export default App;
