import React from "react";
import { useNavigate } from "react-router-dom";

import './Home.css'

function Home() {
    const navigate = useNavigate();
    function handleAboutClick() {
        navigate('./about');
    }
    function handleProductClick() {
        navigate('./menu')
    }
    return (
        <>
            <div className="position-relative w-100 main_img" style={{ backgroundColor: '#ffffef' }}>
                <img
                    src="https://i.pinimg.com/736x/76/76/f2/7676f25dfc9132c1dcb8fff50109e332.jpg"
                    alt="Banner"
                    className="img-fluid w-100"
                    style={{ objectFit: 'cover', maxHeight: '800px', height: '100%', width: '100%' }}
                />

                <div
                    className="position-absolute top-50 start-50 translate-middle text-center px-3 main_content"
                    style={{
                        // backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: '12px',
                        padding: '2rem',
                        maxWidth: '90%',
                    }}
                >
                    <h1
                        style={{
                            
                            fontWeight: 'bold',
                            fontSize: 'clamp(1.5rem, 7vw, 6rem)',
                        }}
                    >
                        Dense, delicious delights!
                    </h1>
                    <h3
                        className="mt-3"
                        style={{
                            fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
                            color: '#333',
                        }}
                    >
                        Pick from our wide range of products...
                    </h3>
                </div>
            </div>



            <div className="text-center">
                <h1 className="mt-5" style={{ color: '#c62744' }}>Food of The Gods, Freshly Baked!</h1>
                <p className="fw-medium fs-5 mt-4 mb-5">Since 2004, we've been serving our guests the best quality treats,<br /> traditionally made and presented with care.
                </p>
            </div>

            <div className="container my-5">
                <div className="row text-center align-items-center">

                    {/* Left Column */}
                    <div className="col-lg-4 col-md-4 col-12 mb-5 mb-md-4">
                        <div className="mb-5">
                            <h3 style={{ color: '#c62744' }}>AUTHENTIC RECIPES</h3>
                            <p className="fw-medium fs-5 mt-3">
                                Our products are based on traditional<br className="d-none d-md-block" />
                                home-style recipes, using fresh ingredients.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: '#c62744' }}>BAKED WITH LOVE</h3>
                            <p className="fw-medium fs-5 mt-3">
                                Our passion for baking is poured into<br className="d-none d-md-block" />
                                every recipe, serving smiles on a plate everyday.
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="col-lg-4 col-md-4 col-12 mb-5 mb-lg-0">
                        <img
                            src="https://theobroma.in/cdn/shop/files/theo-home_03c4e3a4-9dc9-4de7-9464-16e655a238ed_2.jpg?v=1630652883"
                            alt="Freshly Baked"
                            className="img-fluid"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="mb-5">
                            <h3 style={{ color: '#c62744' }}>COMMITTED TO QUALITY</h3>
                            <p className="fw-medium fs-5 mt-3">
                                From our ingredients to our<br className="d-none d-md-block" />
                                kitchen operations & guest services,<br className="d-none d-md-block" />
                                we always prioritize quality.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: '#c62744' }}>HONESTLY PRICED</h3>
                            <p className="fw-medium fs-5 mt-3">
                                We constantly strive to offer the best<br className="d-none d-md-block" />
                                products at the right prices.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-center my-5" >
                <button type="button" className="know-more-button" onClick={handleAboutClick}>Know More</button>
            </div>

            <div style={{ backgroundColor: 'rgb(234 194 189)' }}>
                <h1 className="mt-5 p-5 text-center main_headings">Our Products</h1>

                <div className="container">
                    <div className="row text-center bg-white px-2 py-4">
                        {/* CAKES */}
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <img
                                src="https://theobroma.in/cdn/shop/files/redvelvet-theo.jpg?v=1701321860"
                                alt="Cakes"
                                className="img-fluid"
                            />
                            <h3 className="mt-3">CAKES</h3>
                        </div>

                        {/* BROWNIES */}
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <img
                                src="https://theobroma.in/cdn/shop/files/Delicacies-02.jpg?v=1681320315"
                                alt="Brownies"
                                className="img-fluid"
                            />
                            <h3 className="mt-3">BROWNIES</h3>
                        </div>

                        {/* DESSERTS & CUPCAKES */}
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <img
                                src="https://theobroma.in/cdn/shop/files/Delicacies-04.jpg?v=1681320427"
                                alt="Desserts & Cupcakes"
                                className="img-fluid"
                            />
                            <h3 className="mt-3">DESSERTS & CUPCAKES</h3>
                        </div>

                        {/* PASTRIES */}
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <img
                                src="https://theobroma.in/cdn/shop/files/Delicacies-06.jpg?v=1681320464"
                                alt="Pastries"
                                className="img-fluid"
                            />
                            <h3 className="mt-3">PASTRIES</h3>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="text-center my-5 py-5">
                        <button
                            type="button"
                            className="know-more-button"
                            onClick={handleProductClick}
                        >
                            View More
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff5f3' }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        {/* Text Content */}
                        <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0 px-4">
                            <h1 className="mb-4" style={{ color: '#c62744' }}>
                                Packed with love & <br />
                                all your favourites!
                            </h1>
                            <p className="fw-medium fs-5">
                                Now gift your loved ones our special hampers curated <br />
                                with our signature products.
                            </p>
                            <button
                                type="button"
                                className="know-more-button btn btn-danger mt-3"
                                onClick={handleProductClick}
                            >
                                Know More
                            </button>
                        </div>

                        {/* Image */}
                        <div className="col-lg-6 col-md-12 text-center">
                            <img
                                src="https://theobroma.in/cdn/shop/files/HIGH_RES_Hamper_Gifting_02_-_1200x1000_1.jpg?v=1682674967"
                                alt="Gift Hampers"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f6d79040' }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        {/* Image Section */}
                        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
                            <img
                                src="https://theobroma.in/cdn/shop/files/Tea-Cakes.gif?v=1709131871"
                                alt="Tea-Time Delights"
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>

                        {/* Text Section */}
                        <div className="col-lg-6 col-md-12 text-center px-4">
                            <h1 className="mt-3" style={{ color: '#c62744' }}>Tea-Time Delights</h1>
                            <p className="fw-medium fs-5 mt-3">
                                Pick the perfect companion for your tea (or coffee!)<br />
                                from a range of tea cakes & more.
                            </p>
                            <button
                                type="button"
                                className="know-more-button btn btn-danger mt-3"
                                onClick={handleProductClick}
                            >
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff5f3' }}>
                <h1 className="pt-5 text-center main_headings" style={{ color: '#c62744' }}>Testimonials</h1>
                <div className="text-center mt-5">
                    <img src="https://cdn.shopify.com/s/files/1/0521/3929/4884/t/12/assets/fm_testimonila-quote.png" alt="" />
                </div>
                <div className="m-5 p-3">
                    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#myCarousel"
                                data-bs-slide-to={0}
                                className=""
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#myCarousel"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                                className=""
                            />
                            <button
                                type="button"
                                data-bs-target="#myCarousel"
                                data-bs-slide-to={2}
                                aria-label="Slide 3"
                                className="active"
                                aria-current="true"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item">

                                <div className="container">

                                    <div className="text-center">
                                        <h4 >Always a delight coming here fro pastries. This Theobrome outlet may not be very spacious but their pasteries are lip smacking good. Loved hazelnut pastry among the ones I tried. Value for money and a must visit place! </h4>
                                        <h5 className="mt-3">Dr. Tarun, Gurugram</h5>
                                        {/* style={{fontSize: 'clamp(1rem, 2vw, 2.25rem)' }} */}
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item">

                                <div className="container">
                                    <div className="text-center">
                                        <h4>Theobroma is an outlet which will always top our priority list. Scrumptions warm brownies that melt in your mouth leaving you a heavenly sensation - exactly what visiting theobrome feels like.</h4>
                                        <h5 className="mt-3">Antim Jakhar, Rohtak</h5>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item active">

                                <div className="container">
                                    <div className="text-center">
                                        <h4>I love all theobrome products but the chocolate overload brownie has been my all-time favourite and truely justifies its name with its rich chocolate gooeyness. Thebrome is truely one of our favourite place!</h4>
                                        <h5 className="mt-3">Meenakshi Verma, Delhi</h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden ">Next</span>
                        </button>
                    </div>

                </div>
            </div>

            <div style={{ backgroundColor: '' }}>
                <h1 className="mt-5 p-5 text-center main_headings">Our Best Sellers</h1>

                <div className="container py-5" style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                    <div className="row g-5">
                        {[
                            {
                                title: 'Fresh Cream Pineapple Cake',
                                img: 'https://theobroma.in/cdn/shop/files/FreshCreamPineappleCakehalfkg02_cca038c8-bb78-4bc3-b62c-26cde91670ad_400x400.jpg?v=1711124785',
                            },
                            {
                                title: 'Overload Brownie',
                                img: 'https://theobroma.in/cdn/shop/files/OverloadBrownie02_400x400.jpg?v=1711183338',
                            },
                            {
                                title: 'Dense Loaf',
                                img: 'https://theobroma.in/cdn/shop/files/HIGHRESDenseLoafCloseUp-Square_400x400.jpg?v=1711002439',
                            },
                            {
                                title: 'Baked Wada Pao (1 Pc)',
                                img: 'https://theobroma.in/cdn/shop/files/BakedVadaPav-Square_400x400.jpg?v=1711611145',
                            },
                            {
                                title: 'Blueberry Cheesecake Cup',
                                img: 'https://theobroma.in/cdn/shop/files/HIGHRESBlueberryCheesecakeCup02-Square_400x400.jpg?v=1711719903',
                            },
                            {
                                title: 'Chocoholic Pastry',
                                img: 'https://theobroma.in/cdn/shop/files/ChocoholicPastry_400x400.jpg?v=1711096267',
                            },
                            {
                                title: 'Butter Palmiers',
                                img: 'https://theobroma.in/cdn/shop/files/ButterPalmier_400x400.jpg?v=1711187341',
                            },
                            {
                                title: 'Chocolate Chip Cookies',
                                img: 'https://theobroma.in/cdn/shop/files/HIGHRESEgglessChocolateChipCookieswithHands01-Square_400x400.jpg?v=1711188294',
                            },
                        ].map((item, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center" key={index}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="img-fluid"
                                    style={{
                                        maxWidth: '100%',
                                        borderRadius: '30px',
                                        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                                    }}
                                />
                                <h5 className="mt-4" style={{ color: '#c62744' }}>{item.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="mt-5 " style={{ backgroundColor: '#EBF6F4' }}>
                <div className="container text-center py-5">
                    <h1 className="p-3" style={{ color: '#c62744' }}>Like Our Products?</h1>
                    <p className="fw-medium fs-5 mt-1">
                        Treat yourself to your favourite Theobroma products or surprise your loved ones with an edible gift.
                    </p>
                    <button type="button" className="btn btn-outline-danger mt-3 px-4 py-2 fw-medium" onClick={handleProductClick}>
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
export default Home;


