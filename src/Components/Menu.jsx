import React from 'react';
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useState } from 'react';

import "./Menu.css"

const products = [
  // <Menu/>


];


function Menu() {



  const navigate = useNavigate();
  const { addToCart } = useCart();

  function handleClick() {
    navigate('/menu');

  }



  return (
    <>

      <div
        style={{
          backgroundImage: `url('https://theobroma.in/cdn/shop/files/Collection-desktop.jpg?v=1654084131')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '50vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <div className="" style={{ maxWidth: '1000px', color: '#c62744' }}>
          <h1 className=" products-heading" style={{ color: '#c62744', fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
            Theobroma Products
          </h1>
          <p
            className="fw-medium mt-4"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'black' }}
          >
            At Theobroma, we offer a wide range of products, both sweet & savoury. Our offerings include <br />
            indulgent brownies, cakes & desserts, artisanal breads, puffs & quiches, wholesome sandwiches,
            wraps & rolls, <br />
            beverages and more.
          </p>
        </div>
      </div>

     

      <div className="container py-5" style={{ color: '#c62744' }}>
        <h1 className="text-center mb-5">Brownies</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/Delicacies-02.jpg?v=1681320315"
                alt="Eggless Walnut Brownie"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Eggless Walnut Brownie
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 120</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da', // soft rose
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 1,
                      name: 'Eggless Walnut Brownie',
                      price: 120,
                      image: 'https://theobroma.in/cdn/shop/files/Delicacies-02.jpg?v=1681320315'
                    })
                  }
                >
                  Add to Cart!
                </button>

              </div>
            </div>


          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/ChocoChipBrownie.jpg?v=1711183096"
                alt="Choco Chip Brownie"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Choco Chip Brownie
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 110</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da', // soft rose
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 2,
                      name: 'Choco Chip Brownie',
                      price: 110,
                      image: 'https://theobroma.in/cdn/shop/files/ChocoChipBrownie.jpg?v=1711183096'
                    })
                  }
                >
                  Add to Cart!
                </button>

              </div>
            </div>



          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/EgglessMillionaireBrownie02.jpg?v=1711183229"
                alt="Millionaire Brownie"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Millionaire Brownie
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs.100</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da', // soft rose
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 3,
                      name: ' Millionaire Brownie',
                      price: 100,
                      image: 'https://theobroma.in/cdn/shop/files/EgglessMillionaireBrownie02.jpg?v=1711183229'
                    })
                  }
                >
                  Add to Cart!
                </button>

              </div>
            </div>


          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/EgglessMillionaireBrownie_aca12ee0-6bd7-4471-b2af-058405962414.jpg?v=1711183839"
                alt="Eggless Millionaire Brownie"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Eggless Millionaire Brownie
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 120</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da', // soft rose
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 4,
                      name: 'Eggless Millionaire Brownie',
                      price: 120,
                      image: 'https://theobroma.in/cdn/shop/files/EgglessMillionaireBrownie_aca12ee0-6bd7-4471-b2af-058405962414.jpg?v=1711183839'
                    })
                  }
                >
                  Add to Cart!
                </button>

              </div>
            </div>


          </div>

        </div>
      </div>

      <div className="container pb-5" style={{ backgroundColor: 'white' }}>
        <h1 className="text-center mb-5" style={{ color: '#c62744' }}>Cakes</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">

            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HazelnutPralineMousseCake.jpg?v=1711125988"
                alt="Hazelnut Praline Mousse Cake"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Hazelnut Praline Mousse Cake
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 850</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da', // soft rose
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd', // soft yellow
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 5,
                      name: 'Hazelnut Praline Mousse Cake',
                      price: 850,
                      image: 'https://theobroma.in/cdn/shop/files/HazelnutPralineMousseCake.jpg?v=1711125988'
                    })
                  }

                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">

            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/FreshCreamPineappleCakehalfkg_5e299618-cc46-4daf-953d-65616ca0299f.jpg?v=1711124785"
                alt="Fresh Cream Pineapple Cake"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Fresh Cream Pineapple Cake
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 625</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da', // soft rose
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd', // soft yellow
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 6,
                      name: 'Fresh Cream Pineapple Cake',
                      price: 625,
                      image: 'https://theobroma.in/cdn/shop/files/FreshCreamPineappleCakehalfkg_5e299618-cc46-4daf-953d-65616ca0299f.jpg?v=1711124785'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/ChocoholicCakehalfkg.jpg?v=1711125918"
                alt="Chocoholic Cake"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Chocoholic Cake
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 750</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 7,
                      name: 'Chocoholic Cake',
                      price: 750,
                      image: 'https://theobroma.in/cdn/shop/files/ChocoholicCakehalfkg.jpg?v=1711125918'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/DutchTruffleCakehalfkg.jpg?v=1711125138"
                alt="Dutch Truffle Cake"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Dutch Truffle Cake
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 825</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 8,
                      name: 'Dutch Truffle Cake',
                      price: 825,
                      image: 'https://theobroma.in/cdn/shop/files/DutchTruffleCakehalfkg.jpg?v=1711125138'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container pb-5" style={{ backgroundColor: 'white' }}>
        <h1 className="text-center mb-5" style={{ color: '#c62744' }}>Desserts & Cupcakes</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/BanoffeeHigh.jpg?v=1711514542"
                alt="Banoffee High"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Banoffee High
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 150</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 9,
                      name: 'Banoffee High',
                      price: 150,
                      image: 'https://theobroma.in/cdn/shop/files/BanoffeeHigh.jpg?v=1711514542'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/Strawberry_Cupcake_-_Square.jpg?v=1720539309"
                alt="Strawberry Cupcake"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Strawberry Cupcake
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 120</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 10,
                      name: 'Strawberry Cupcake',
                      price: 120,
                      image: 'https://theobroma.in/cdn/shop/files/Strawberry_Cupcake_-_Square.jpg?v=1720539309'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/CaramelChocolateTart-Square.jpg?v=1720539706"
                alt="Chocolate & Caramel Tart"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Chocolate & Caramel Tart
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 150</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 11,
                      name: 'Chocolate & Caramel Tart',
                      price: 150,
                      image: 'https://theobroma.in/cdn/shop/files/CaramelChocolateTart-Square.jpg?v=1720539706'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/VanillaandBlueberryCupcake.jpg?v=1711515195"
                alt="Vanilla & Blueberry Cupcake"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Vanilla & Blueberry Cupcake
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 125</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 12,
                      name: 'Vanilla & Blueberry Cupcake',
                      price: 125,
                      image: 'https://theobroma.in/cdn/shop/files/VanillaandBlueberryCupcake.jpg?v=1711515195'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>




        </div>
      </div>

      <div className="container pb-5" style={{ backgroundColor: 'white' }}>
        <h1 className="text-center mb-5" style={{ color: '#c62744' }}>Pastries</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/ChocoholicPastry.jpg?v=1711096267"
                alt="Chocoholic Pastry"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Chocoholic Pastry
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 150</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 13,
                      name: 'Chocoholic Pastry',
                      price: 150,
                      image: 'https://theobroma.in/cdn/shop/files/ChocoholicPastry.jpg?v=1711096267'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/DevilsMoussePastry02.jpg?v=1711096329"
                alt="Gluten Free Dark Chocolate Pastry"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Gluten Free Dark Chocolate Pastry
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 175</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 14,
                      name: 'Gluten Free Dark Chocolate Pastry',
                      price: 175,
                      image: 'https://theobroma.in/cdn/shop/files/DevilsMoussePastry02.jpg?v=1711096329'
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HazelnutPralineMoussePastry02.jpg?v=1711096565"
                alt="Hazelnut Praline Mousse Pastry"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Hazelnut Praline Mousse Pastry
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 125</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 15,
                      name: 'Hazelnut Praline Mousse Pastry',
                      price: 125,
                      image: 'https://theobroma.in/cdn/shop/files/HazelnutPralineMoussePastry02.jpg?v=1711096565',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">

            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/EgglessDutchTrufflePastry.jpg?v=1711099798"
                alt="Eggless Dutch Truffle Pastry"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Eggless Dutch Truffle Pastry
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 130</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 16,
                      name: 'Eggless Dutch Truffle Pastry',
                      price: 130,
                      image: 'https://theobroma.in/cdn/shop/files/EgglessDutchTrufflePastry.jpg?v=1711099798',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="container py-5" style={{ color: '#c62744' }}>
        <h1 className="text-center mb-5">Sandwiches & Savouries</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HIGH-RES_Spinach_Corn_Cheese_Sandwich_-_Square.jpg?v=1710549467"
                alt="Spinach Corn & Cheese Sandwich"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Spinach Corn & Cheese Sandwich
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 125</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 17,
                      name: 'Spinach Corn & Cheese Sandwich',
                      price: 125,
                      image: 'https://theobroma.in/cdn/shop/files/HIGH-RES_Spinach_Corn_Cheese_Sandwich_-_Square.jpg?v=1710549467',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/SpicyPaneerPuff-Square.jpg?v=1711609230"
                alt="Spicy Paneer Puff"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Spicy Paneer Puff
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 65</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 18,
                      name: 'Spicy Paneer Puff',
                      price: 65,
                      image:
                        'https://theobroma.in/cdn/shop/files/SpicyPaneerPuff-Square.jpg?v=1711609230',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/QuicheVeg.jpg?v=1711004665"
                alt="Quiche Veg"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Quiche Veg
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 150</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 19,
                      name: 'Quiche Veg',
                      price: 150,
                      image:
                        'https://theobroma.in/cdn/shop/files/QuicheVeg.jpg?v=1711004665',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/BakedVadaPav-Square.jpg?v=1711611145"
                alt="Baked Wada Pao"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Baked Wada Pao
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 50</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 20,
                      name: 'Baked Wada Pao',
                      price: 50,
                      image:
                        'https://theobroma.in/cdn/shop/files/BakedVadaPav-Square.jpg?v=1711611145',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="container pb-5" style={{ backgroundColor: 'white' }}>
        <h1 className="text-center mb-5" style={{ color: '#c62744' }}>Beverages</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/Cappuccino.jpg?v=1710922162"
                alt="Cappuccino"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Cappuccino
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 140</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 21,
                      name: 'Cappuccino',
                      price: 140,
                      image:
                        'https://theobroma.in/cdn/shop/files/Cappuccino.jpg?v=1710922162',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HotChocolate.jpg?v=1710922383"
                alt="Hot Chocolate"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Hot Chocolate
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 180</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 22,
                      name: 'Hot Chocolate',
                      price: 180,
                      image:
                        'https://theobroma.in/cdn/shop/files/HotChocolate.jpg?v=1710922383',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HIGHRESColdCoffeeinaGlassandStraw-Square01.jpg?v=1710922658"
                alt="Classic Cold Coffee"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Classic Cold Coffee
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 85</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 23,
                      name: 'Classic Cold Coffee',
                      price: 85,
                      image:
                        'https://theobroma.in/cdn/shop/files/HIGHRESColdCoffeeinaGlassandStraw-Square01.jpg?v=1710922658',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/Mango_PineappleJuice_200ml.jpg?v=1741691101"
                alt="Classic Mango Juice"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Classic Mango Juice
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 130</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 24,
                      name: 'Classic Mango Juice',
                      price: 130,
                      image:
                        'https://theobroma.in/cdn/shop/files/Mango_PineappleJuice_200ml.jpg?v=1741691101',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container pb-5" style={{ backgroundColor: 'white' }}>
        <h1 className="text-center mb-5" style={{ color: '#c62744' }}>BISCUITS, COOKIES & CRACKERS</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/AlmondBiscotti02.jpg?v=1711187263"
                alt="Almond Biscotti"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Almond Biscotti
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 215</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 25,
                      name: 'Almond Biscotti',
                      price: 215,
                      image:
                        'https://theobroma.in/cdn/shop/files/AlmondBiscotti02.jpg?v=1711187263',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HIGHRESChocolateCoatedBiscuits-InstagramFeeds01.jpg?v=1711187872"
                alt="Chocolate Coated Biscuits"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Chocolate Coated Biscuits
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 295</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 26,
                      name: 'Chocolate Coated Biscuits',
                      price: 295,
                      image:
                        'https://theobroma.in/cdn/shop/files/HIGHRESChocolateCoatedBiscuits-InstagramFeeds01.jpg?v=1711187872',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HIGHRESEgglessDoubleChocolateChipCookiesDip-Square.jpg?v=1711720173"
                alt="Double Choco Chip Cookies"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Double Choco Chip Cookies
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 260</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 27,
                      name: 'Double Choco Chip Cookies',
                      price: 260,
                      image:
                        'https://theobroma.in/cdn/shop/files/HIGHRESEgglessDoubleChocolateChipCookiesDip-Square.jpg?v=1711720173',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HIGHRESEgglessChocolateChipCookies-Square.jpg?v=1711188293"
                alt="Chocolate Chip Cookies"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Chocolate Chip Cookies
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 250</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 28,
                      name: 'Chocolate Chip Cookies',
                      price: 250,
                      image:
                        'https://theobroma.in/cdn/shop/files/HIGHRESEgglessChocolateChipCookies-Square.jpg?v=1711188293',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container pb-5" style={{ backgroundColor: 'white' }}>
        <h1 className="text-center mb-5" style={{ color: '#c62744' }}>Croissants & Danishes</h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/Croissant02.jpg?v=1710838794"
                alt="Butter Croissant"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Butter Croissant
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 90</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 29,
                      name: 'Butter Croissant',
                      price: 90,
                      image:
                        'https://theobroma.in/cdn/shop/files/Croissant02.jpg?v=1710838794',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/PainAuChocolat.jpg?v=1710838733"
                alt="Pain Au Chocolat"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Pain Au Chocolat
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 105</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 30,
                      name: 'Pain Au Chocolat',
                      price: 105,
                      image:
                        'https://theobroma.in/cdn/shop/files/PainAuChocolat.jpg?v=1710838733',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            <div
              className="text-center p-4"
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
                margin: 'auto',
              }}
            >
              <img
                src="https://theobroma.in/cdn/shop/files/HIGHRESBlueberryDanish-Square.jpg?v=1710838921"
                alt="Blueberry Danish"
                className="img-fluid"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                }}
              />

              <h5 className="mt-4" style={{ color: '#c62744', fontWeight: '600' }}>
                Blueberry Danish
              </h5>
              <h5 className="mb-3" style={{ color: '#555' }}>Rs. 85</h5>

              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#f8d7da',
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Order Online
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: '#fff3cd',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  onClick={() =>
                    addToCart({
                      id: 31,
                      name: 'Blueberry Danish',
                      price: 85,
                      image:
                        'https://theobroma.in/cdn/shop/files/HIGHRESBlueberryDanish-Square.jpg?v=1710838921',
                    })
                  }
                >
                  Add to Cart!
                </button>
              </div>
            </div>
          </div>



        </div>
      </div>

      <div className="mt-5 " style={{ backgroundColor: '#EBF6F4' }}>
        <div className="container text-center py-5">
          <h1 className="p-3" style={{ color: '#c62744' }}>Like Our Products?</h1>
          <p className="fw-medium fs-5 mt-1">
            Treat yourself to your favourite Theobroma products or surprise your loved ones with an edible gift.
          </p>
          <button type="button" className="btn btn-outline-danger mt-3 px-4 py-2 fw-medium" onClick={handleClick}>
            Order Online
          </button>
        </div>
      </div>

      <div className="pt-3 pb-5" style={{ backgroundColor: '#b0dcd1' }}>
        <div className="container pt-5">
          <div className="row">
            {/* Logo */}
            <div className="col-lg-2 col-md-3 col-sm-12 text-center mb-4">
              <img
                src="https://theobroma.in/cdn/shop/files/theo-logo-footer_8aecafbf-62c0-4aaf-84c1-194a7f79958a.png?v=1644247501"
                alt="Theobroma Logo"
                width="160"
                className="img-fluid"
              />
            </div>

            {/* Links 1 */}
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
              <ul className="list-unstyled fw-medium">
                <li>OUR STORY</li>
                <li>OUR PRODUCTS</li>
                <li>SPECIALITY CAKES</li>
                <li>BLOGS</li>
                <li>CSR</li>
                <li>HTML SITEMAP</li>
              </ul>
            </div>

            {/* Links 2 */}
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
              <ul className="list-unstyled fw-medium">
                <li>PRIVACY POLICY</li>
                <li>COOKIE POLICY</li>
                <li>REFUND POLICY</li>
                <li>FAQs</li>
                <li>NUTRITIONAL INFORMATION</li>
              </ul>
            </div>

            {/* Contact + Social */}
            <div className="col-lg-2 col-md-3 col-sm-12 mb-4 text-center">
              <p className="fw-bold mb-1">+91 935026xxxxx</p>
              <p className="fw-bold mb-3">contact@theobroma.in</p>
              <div className="d-flex justify-content-center">
                <a href="#" className="text-dark mx-2" aria-label="YouTube">
                  <i className="bi bi-youtube" style={{ fontSize: '24px' }}></i>
                </a>
                <a href="#" className="text-dark mx-2" aria-label="Instagram">
                  <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
                </a>
                <a href="#" className="text-dark mx-2" aria-label="Facebook">
                  <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
                </a>
              </div>
            </div>

            {/* Store locations */}
            <div className="col-lg-4 col-md-12 col-sm-12 text-center">
              <p className="fw-bold">
                OUR STORES - Agra | Ahmedabad | Ambala | Rohtak | Bengaluru | Chandigarh-Mohali | Chennai | Dehradun | Delhi |
                Faridabad | Ghaziabad | Gurgaon | Hyderabad | Indore | Jaipur | Jalandhar | Kanpur | Karnal | Lucknow | Ludhiana |
                Meerut | Mumbai | Mysore | Nagpur | Nashik | Navi Mumbai | Noida | Patiala | Prayagraj | Pune | Raipur | Rajkot |
                Rohtak | Surat | Thane | Vadodara | Varanasi | Vijaywada
              </p>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Menu