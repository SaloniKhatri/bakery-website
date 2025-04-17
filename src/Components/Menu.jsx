import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Menu.css"

function Menu() {
  const navigate = useNavigate();

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
                    backgroundColor: '#fff3cd', // soft yellow
                    // color: '#856404',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
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
                Eggless Walnut Brownie
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
                    backgroundColor: '#fff3cd', // soft yellow
                    // color: '#856404',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                >
                  Add to Cart!
                </button>
              </div>
            </div>
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/ChocoChipBrownie.jpg?v=1711183096"
                alt="Choco Chip Brownie"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Choco Chip Brownie</h5>
              <h5>Rs. 110</h5>
            </div> */}


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
                alt="Eggless Walnut Brownie"
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
                    backgroundColor: '#fff3cd', // soft yellow
                    // color: '#856404',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
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
                alt="Eggless Walnut Brownie"
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
                    backgroundColor: '#fff3cd', // soft yellow
                    // color: '#856404',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
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
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/HazelnutPralineMousseCake.jpg?v=1711125988"
                alt="Hazelnut Praline Mousse Cake"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Hazelnut Praline Mousse Cake</h5>
              <h5>Rs. 850</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/FreshCreamPineappleCakehalfkg_5e299618-cc46-4daf-953d-65616ca0299f.jpg?v=1711124785"
                alt="Fresh Cream Pineapple Cake"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Fresh Cream Pineapple Cake</h5>
              <h5>Rs. 625</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/ChocoholicCakehalfkg.jpg?v=1711125918"
                alt="Chocoholic Cake"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Chocoholic Cake</h5>
              <h5>Rs. 750</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/DutchTruffleCakehalfkg.jpg?v=1711125138"
                alt="Dutch Truffle Cake"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Dutch Truffle Cake</h5>
              <h5>Rs. 825</h5>
            </div> */}
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
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/BanoffeeHigh.jpg?v=1711514542"
                alt="Banoffee High"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Banoffee High</h5>
              <h5>Rs. 150</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>


          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/Strawberry_Cupcake_-_Square.jpg?v=1720539309"
                alt="Strawberry Cupcake"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Strawberry Cupcake</h5>
              <h5>Rs. 120</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/CaramelChocolateTart-Square.jpg?v=1720539706"
                alt="Chocolate & Caramel Tart"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Chocolate & Caramel Tart</h5>
              <h5>Rs. 150</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/VanillaandBlueberryCupcake.jpg?v=1711515195"
                alt="Vanilla & Blueberry Cupcake"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Vanilla & Blueberry Cupcake</h5>
              <h5>Rs. 125</h5>
            </div> */}
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
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/ChocoholicPastry.jpg?v=1711096267"
                alt="Chocoholic Pastry"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Chocoholic Pastry</h5>
              <h5>Rs. 150</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/DevilsMoussePastry02.jpg?v=1711096329"
                alt="Gluten Free Dark Chocolate Pastry"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Gluten Free Dark Chocolate Pastry</h5>
              <h5>Rs. 175</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>

          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/HazelnutPralineMoussePastry02.jpg?v=1711096565"
                alt="Hazelnut Praline Mousse Pastry"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Hazelnut Praline Mousse Pastry</h5>
              <h5>Rs. 125</h5>
            </div> */}
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
                >
                  Add to Cart!
                </button>
              </div>
            </div>


          </div>

          <div className="col-lg-3 col-md-5 col-sm-10 mb-5 d-flex justify-content-center">
            {/* <div className="text-center">
              <img
                src="https://theobroma.in/cdn/shop/files/EgglessDutchTrufflePastry.jpg?v=1711099798"
                alt="Eggless Dutch Truffle Pastry"
                className="img-fluid"
              />
              <h5 className="mt-4" style={{ color: '#c62744' }}>Eggless Dutch Truffle Pastry</h5>
              <h5>Rs. 130</h5>
            </div> */}
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
                    // color: '#856404',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
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
                    // color: '#856404',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
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
              <h5 className="mb-3" style={{ color: '#555' }}>Rs.150</h5>

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
                    // color: '#856404',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
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
                    // color: '#856404',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
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
            <div className="col-lg-4 col-md-12 col-sm-12 mt-4 text-center">
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



      {/* 
      <div className='mt-5' style={{ backgroundColor: '#EBF6F4' }}>
        <div className="text-center py-5">
          <h1 className=" mt-3 p-3 text-center" style={{ color: '#c62744' }}>Like Our Products?</h1>
          <p className="fw-medium fs-5 mt-1">Treat yourself to your favourite Theobroma products or surprise your loved ones with an edible gift. </p>
          <button type="button" className="know-more-button mt-3" onClick={handleClick}>Order Online</button>
        </div>
      </div> */}
      {/* <div className="pt-3 pb-5" style={{ backgroundColor: '#b0dcd1' }}>
        <div className="row pt-5">
          <div className="col-lg-2 col-md-3 col-sm-12 text-center">
            <img src="https://theobroma.in/cdn/shop/files/theo-logo-footer_8aecafbf-62c0-4aaf-84c1-194a7f79958a.png?v=1644247501" alt="" width='200px' />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 pt-sm-4">
            <ul className="list_styling">
              <li>OUR STORY</li>
              <li>OUR PRODUCTS</li>
              <li>SPECIALITY CAKES</li>
              <li>BLOGS</li>
              <li>CSR</li>
              <li>HTML SITEMAP</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 pt-sm-4">
            <ul className="list_styling">
              <li>PRIVACY POLICY</li>
              <li>COOKIE POLICY</li>
              <li>REFUND POLICY</li>
              <li>FAQs</li>
              <li>NUTRITIONAL INFORMATION</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 ps-sm-5">
            <p className="fw-bold">+91 935026xxxxx</p>
            <p className="fw-bold">contact@theobroma.in</p>
            <div className="d-flex flex-col">
              <div className="m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>

              </div>
              <div className="m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>

              </div>
              <div className="m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>

              </div>


            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 ps-sm-5 text-center">
            <p className="fw-bold">
              OUR STORES - Agra | Ahmedabad | Ambala | Rohtak | Bengaluru | Chandigarh-Mohali | Chennai | Dehradun | Delhi | Faridabad | Ghaziabad | Gurgaon | Hyderabad | Indore | Jaipur | Jalandhar | Kanpur | Karnal | Lucknow | Ludhiana | Meerut | Mumbai | Mysore | Nagpur | Nashik | Navi Mumbai | Noida | Patiala | Prayagraj | Pune | Raipur | Rajkot | Rohtak | Surat | Thane | Vadodara | Varanasi | Vijaywada
            </p>
          </div>
        </div>

      </div> */}

    </>

  )
}

export default Menu