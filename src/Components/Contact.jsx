import React from 'react';
import { useNavigate } from "react-router-dom";
import './Contact.css';

function Contact() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/menu');
  }

  return (
    <>
      <div className="w-100" style={{
        backgroundImage: `url('https://theobroma.in/cdn/shop/files/Likeourprod-theo-new1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '27vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '1rem'
      }}>
        <h1
          className="fw-bold mt-3"
          style={{
            color: '#c62744',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
          }}
        >
          Contact Us
        </h1>
        <p className="fw-medium mt-3" style={{ fontSize: '1rem' }}>
          We would love to hear from you. Share your thoughts and queries with us!
        </p>
        <div className="mt-3">
          <img
            src="https://cdn.shopify.com/s/files/1/0521/3929/4884/t/12/assets/fm_testimonila-quote.png"
            alt="quote"
            className="img-fluid"
            style={{ maxHeight: '50px' }}
          />
        </div>
      </div>

      <div className="contact-form " style={{ backgroundColor: 'rgb(255 236 233)' }}>
        <div className="">
          <div className="row align-items-center ">
            {/* Contact Form */}
            <div className=" form-container col-lg-6 col-md-12 col-sm-12 ps-4"  style={{ margin: ' 100px' }}>
              <form className="text-start">
                <h3 className="text-start mb-5" style={{ color: '#c62744',  fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}>Share your queries...</h3>

                <div className="mb-3 w-75">
                  <label htmlFor="name">Name</label>
                  <input className="form-control" type="text" id="name" placeholder="Enter your name..." />
                </div>

                <div className="mb-3 w-75">
                  <label htmlFor="contact">Contact No.</label>
                  <input className="form-control" type="number" id="contact" placeholder="Enter your contact number..." />
                </div>

                <div className="mb-3 w-75">
                  <label htmlFor="email">Email ID</label>
                  <input className="form-control" type="email" id="email" placeholder="Enter your email ID..." />
                </div>

                <div className="mb-3 w-75">
                  <label htmlFor="city">City</label>
                  <input className="form-control" type="text" id="city" placeholder="Enter your city name..." />
                </div>

                <div className="mb-3 w-75">
                  <label htmlFor="subject">Subject</label>
                  <input className="form-control" type="text" id="subject" placeholder="Enter subject..." />
                </div>

                <div className="mb-3 w-75">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
                </div>

                <div className="text-start">
                  <button className="btn btn-dark px-5" type="submit">SUBMIT</button>
                </div>
              </form>
            </div>

            {/* Contact Info & Image */}
            <div className="col-lg-3 col-md-12 text-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Contact_Us_Page1.png?v=1615372266"
                alt="Contact Us"
                className="img-fluid mb-4 text-start"
                style={{ maxWidth: '40%' }}
                loading="lazy"
              />

              <div className="text-center px-3">
                <h4><b style={{ color: '#c62744' }}>Theobroma Foods Private Limited</b></h4>
                <p className="mb-2"><b>Registered Address:</b><br />
                  32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East,<br />
                  Mumbai-400088, Maharashtra, India
                </p>
                <p className="mb-2"><b>Grievance & Nodal Officer:</b><br />
                  Ms. Simantini Budukh,<br />
                  General Counsel & Company Secretary
                </p>
                <p className="mb-2"><b>Contact Details:</b><br />
                  📞 <a href="tel:+918182881881" style={{ color: '#282929' }}>+91 8182-881881</a><br />
                  📧 <a href="mailto:contact@theobroma.in" style={{ color: '#282929' }}>contact@theobroma.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" " style={{ backgroundColor: '#EBF6F4' }}>
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

    </>
  )
}

export default Contact