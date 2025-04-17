
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { ShoppingCart } from 'lucide-react'; // For the shopping cart icon


const TheobromaNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <div className="container-fluid">
                
                <a className="navbar-brand" href="#">
                    <img
                        className="rounded-border ms-5"
                       
                        src="https://theobroma.in/cdn/shop/files/theologo.jpg?v=1614330377"
                        alt="theobroma"
                        width="220px"
                    />

                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 fw-bold fs-4">
                            <li className="nav-item px-3 py-2">
                                <NavLink to='/' className="nav-link " aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <NavLink to='/menu' className="nav-link " aria-current="page">
                                    Menu
                                </NavLink>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <NavLink to='/about' className="nav-link " aria-current="page">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <NavLink to='/gallery' className="nav-link " aria-current="page" >
                                    Gallery
                                </NavLink>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <NavLink to='/contact' className="nav-link " aria-current="page">
                                    Contact Us
                                </NavLink>
                            </li>



                        </ul>

                    <div className="d-flex align-items-center">
              <div className=" ms-2 p-4">
                <NavLink to='/cart' className="nav-link " aria-current="page">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    fill=""
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </NavLink>


              </div>
              <div className="p-4 d-flex flex-col">
                <div className="me-1">
                  <input type="search" name="" id="" placeholder="Search here..." />
                </div>

                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={26}
                                    height={26}
                                    fill="currentColor"
                                    className="bi bi-search-heart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                                    <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
                                </svg> */}
              </div>
              <div className="p-4">
                <NavLink to='/login' className="nav-link " aria-current="page">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                </NavLink>

              </div>


            </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default TheobromaNavbar;
