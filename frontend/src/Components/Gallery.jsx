import React from 'react';
import { useNavigate } from "react-router-dom";


function Gallery() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/menu');
  }

  return (
    <>
     
      <div className='pt-3'
        style={{
          backgroundImage: `url('https://cdn.shopify.com/s/files/1/0521/3929/4884/files/specialty-cakes-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          textAlign: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          className="fw-bold"
          style={{
            color: '#c62744',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          Theobrome Gallery
        </h1>
        <p
          className="fw-medium"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            marginTop: '1rem',
            color: '#333',
            maxWidth: '800px',
          }}
        >
          Our products are based on traditional home-style recipes, using fresh ingredients.
        </p>
      </div>

      <div className="container py-4">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <img src="https://theobroma.in/cdn/shop/files/ChocoChipBrownie.jpg?v=1711183096" alt="" className="img-fluid mb-4" />
          <img src="https://theobroma.in/cdn/shop/files/StrawberryTart_1Pc.jpg?v=1733638576" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="row g-3">
            <div className="col-md-4">
              <img src="https://theobroma.in/cdn/shop/files/Beverage_Pastry_Non-VegSandwich_Savouries-Square.jpg?v=1713911258" alt="" className="img-fluid" />
            </div>
            <div className="col-md-4">
              <img src="https://theobroma.in/cdn/shop/files/PainAuChocolat.jpg?v=1710838733" alt="" className="img-fluid" />
            </div>
            <div className="col-md-4">
              <img src="https://theobroma.in/cdn/shop/files/Chocolate_StrawberryMoussePastry_1Pc.jpg?v=1733637304" alt="" className="img-fluid" />
            </div>
            {/* <div className="col-md-4">
              <img src="https://theobroma.in/cdn/shop/files/lemon-tart.jpg?v=1711109728" alt="" className="img-fluid" />
            </div> */}
            <div className="col-md-8">
              <img src="https://theobroma.in/cdn/shop/files/HIGHRESBlueberryCheesecakeCut-Square.jpg?v=1711180961" alt="" className="img-fluid" />
            </div>
            <div className="col-md-4">
              <img src="https://theobroma.in/cdn/shop/files/lemon-tart.jpg?v=1711109728" alt="" className="img-fluid" />
            </div>
            

          </div>
        </div>
      </div>

      <div className="row g-4 mt-4">
        <div className="col-lg-8">
          <div className="row g-4">
            <div className="col-md-6">
              <img src="https://theobroma.in/cdn/shop/files/QuicheVeg.jpg?v=1711004665" alt="" className="img-fluid" />
              <img src="https://i.pinimg.com/736x/63/49/ad/6349ade2613e31df9d571b11fa11c5fe.jpg" alt="" className="img-fluid mt-4" />
            </div>
            <div className="col-md-6">
              <img src="https://i.pinimg.com/736x/cb/bf/5b/cbbf5b482e2183e10f3b7dd9428a3866.jpg" alt="" className="img-fluid" />
              <img src="https://theobroma.in/cdn/shop/files/HIGHRESMavaCakeStylised-Square.jpg?v=1710924890" alt="" className="img-fluid mt-4" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <img src="https://i.pinimg.com/736x/d7/8c/5f/d78c5fa17c308bc3494090ca16bb4aa3.jpg" alt="" className="img-fluid" />
          <div className="d-flex flex-wrap justify-content-between mt-4">
            <img src="https://i.pinimg.com/736x/0b/94/c9/0b94c993ab6cf1e6113cdb2571d8599d.jpg" alt="" className="img-fluid me-2 mb-2" style={{ maxWidth: '48%' }} />
            <img src="https://i.pinimg.com/736x/2b/28/6d/2b286dfb57c36d9c1560b01aeb8447e3.jpg" alt="" className="img-fluid mb-2" style={{ maxWidth: '48%' }} />
          </div>
          <div className="d-flex flex-wrap justify-content-between mt-4">
            <img src="https://i.pinimg.com/736x/69/c6/d2/69c6d2c9c56e502cbb97be405487783f.jpg" alt="" className="img-fluid me-2 mb-2" />
            {/* <img src="https://i.pinimg.com/736x/87/e1/8d/87e18dc9af1e98f3cd8ac3c9311fffdf.jpg" alt="" className="img-fluid me-2 mb-2"/> */}
            
          </div>
        </div>
      </div>

      <div className="row g-4 mt-4">
        <div className="col-lg-6">
          <img src="https://theobroma.in/cdn/shop/files/DevilsMoussePastry02.jpg?v=1711096329" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <div className="row g-4">
            <div className="col-md-6">
              <img src="https://i.pinimg.com/736x/52/38/4c/52384c47fd1cf65284c814e1b9d2d74d.jpg" alt="" className="img-fluid" />
              <img src="https://theobroma.in/cdn/shop/files/Beverage_Cupcake-Square.jpg?v=1713911431" alt="" className="img-fluid mt-4" />
            </div>
            <div className="col-md-6">
              <img src="https://i.pinimg.com/736x/e9/6f/92/e96f928f461cf8262ea9fb928cc4ee1c.jpg" alt="" className="img-fluid" />
              <img src="https://theobroma.in/cdn/shop/files/HIGHRESBlueberryDanish-Square.jpg?v=1710838921" alt="" className="img-fluid mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>



      {/* <div>
        <div className="row">
          <div className="col-lg-4 mt-5">
            <img src="https://theobroma.in/cdn/shop/files/ChocoChipBrownie.jpg?v=1711183096" alt="" width='600px' />
            <img src="https://theobroma.in/cdn/shop/files/StrawberryTart_1Pc.jpg?v=1733638576" alt="" width='500px' className='m-5' />
          </div>
          <div className="col  mt-2">
            <img src="https://theobroma.in/cdn/shop/files/Beverage_Pastry_Non-VegSandwich_Savouries-Square.jpg?v=1713911258" alt="" width="300px" />
            <img src="https://theobroma.in/cdn/shop/files/PainAuChocolat.jpg?v=1710838733" className='ms-5' alt="" width='350px' />
            <img src="https://theobroma.in/cdn/shop/files/Chocolate_StrawberryMoussePastry_1Pc.jpg?v=1733637304" alt="" width="500px" className='ms-5' />

            <div className="col">
              <img src="https://theobroma.in/cdn/shop/files/HIGHRESBlueberryCheesecakeCut-Square.jpg?v=1711180961" alt="" width='650px' />
              <img src="https://theobroma.in/cdn/shop/files/lemon-tart.jpg?v=1711109728" className='ms-4' alt="" width="400px" />
             
            </div>
          </div>
        </div>
        <div className="row">

          <div className="col">
            <div className="row">
              <div className="col">
                <img src="https://theobroma.in/cdn/shop/files/QuicheVeg.jpg?v=1711004665" alt="" width='400px' className='ms-3' />
                <img src="https://i.pinimg.com/736x/63/49/ad/6349ade2613e31df9d571b11fa11c5fe.jpg" alt="" width='400px' className='ms-5 mt-5' />
              </div>
              <div className="col">
                <img src="https://i.pinimg.com/736x/cb/bf/5b/cbbf5b482e2183e10f3b7dd9428a3866.jpg" alt="" width='400px' className='ms-4 mt-5' />
                <img src="https://theobroma.in/cdn/shop/files/HIGHRESMavaCakeStylised-Square.jpg?v=1710924890" alt="" width='400px' className=' mt-5' />

              </div>


            </div>



          </div>
          <div className="col">
            <img src="https://i.pinimg.com/736x/d7/8c/5f/d78c5fa17c308bc3494090ca16bb4aa3.jpg" alt="" width="800px" className='ms-5' />
            <div className='p-4 ms-5'>
              <img src="https://i.pinimg.com/736x/0b/94/c9/0b94c993ab6cf1e6113cdb2571d8599d.jpg" alt="" width="300px" className='ms-5' />
              <img src="https://i.pinimg.com/736x/2b/28/6d/2b286dfb57c36d9c1560b01aeb8447e3.jpg" alt="" width="300px" className='ms-5' />

            </div>


          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src="https://theobroma.in/cdn/shop/files/DevilsMoussePastry02.jpg?v=1711096329" alt="" width="900px" className='ms-5 mt-4' />
          </div>

          <div className="col">
            <div className="row">
              <div className="col">
                <img src="https://i.pinimg.com/736x/52/38/4c/52384c47fd1cf65284c814e1b9d2d74d.jpg" alt="" width='400px' className='ms-3' />
                <img src="https://theobroma.in/cdn/shop/files/Beverage_Cupcake-Square.jpg?v=1713911431" alt="" width='400px' className='ms-5 mt-5' />
              </div>
              <div className="col">
                <img src="https://i.pinimg.com/736x/e9/6f/92/e96f928f461cf8262ea9fb928cc4ee1c.jpg" alt="" width='400px' className='ms-4 mt-5' />
                <img src="https://theobroma.in/cdn/shop/files/HIGHRESBlueberryDanish-Square.jpg?v=1710838921SEgglessMavaCakeCloseUp-Square.jpg?v=1710924948" alt="" width='400px' className=' mt-5' />

              </div>


            </div>



          </div>

        </div>

      </div> */}

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

export default Gallery