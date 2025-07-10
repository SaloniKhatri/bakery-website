import React from "react";
import { useNavigate } from "react-router-dom";
import './Menu.css'


const About = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/menu');
    }

    return (
        <>
        
            <div
                style={{
                    backgroundImage: `url('https://theobroma.in/cdn/shop/files/aboutpage-header.jpg?v=1615444228')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '80vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    textAlign: 'center',
                    flexDirection: 'column',
                }}
            >
                {/* <h1
                    className="fw-bold "
                    style={{
                        color: '#c62744',
                        fontSize: 'clamp(2rem, 6vw, 4rem)',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                    }}
                >
                    About Us
                </h1>
            */}
                
            </div>

            <div className="row text-center d-flex flex-column  pt-5">
                <div className="col fw-medium mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>Theobroma means 'Food of the Gods' in Greek, befitting our exclusive and indulgent range of <br />offerings that include brownies, cakes, desserts, chocolates, breads, and savouries.</div>
                <div className="col fw-medium mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>From our humble beginnings in 2004, when the first Theobroma pastry <br /> store opened its doors at the iconic Cusrow Baug at Colaba Causeway (Mumbai), we've grown <br /> to become a Pan-India chain of patisseries with stores in over 30 cities.</div>
                <div className="col fw-medium mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>Our mission is to spread happiness by serving smiles on a plate, and  <br />this journey continues as we open Theobroma patisseries across the country.</div>
            </div>

            <div className="m-5 p-3 bg-info bg-opacity-10 border border-info">
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
                                <div>
                                    <img src="https://d1ac7owlocyo08.cloudfront.net/storage/banners/theobroma-food-of-the-gods/5_214236a0-13a6-11ef-9fe7-979b13d56f72.jpg" alt="" height='100%' />
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className="container">
                                <div>
                                    <img src="https://d1ac7owlocyo08.cloudfront.net/storage/banners/theobroma-food-of-the-gods/2_1f8c2bf0-13a6-11ef-b33c-7d901440a0e0.jpg" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item active">

                            <div className="container">
                                <div>
                                    <img src="https://d1ac7owlocyo08.cloudfront.net/storage/banners/theobroma-food-of-the-gods/1_1e8f9590-13a6-11ef-a3f3-55deb696974e.jpg" alt="" />
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
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <div className="">
                <h1 className="text-center" style={{ color: 'rgb(198, 39, 68)' }}>Our Promise</h1>
                <div className="row m-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <img src="https://theobroma.in/cdn/shop/files/icon1.jpg?v=1615448111" alt="" />
                        <h3>AUTHENTIC RECIPES</h3>
                        <p className="fw-medium fs-5 mt-3">Our products are based on traditional home-style recipes, using fresh ingredients.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <img src="https://theobroma.in/cdn/shop/files/icon2.jpg?v=1615448111" alt="" />
                        <h3>BAKED WITH LOVE</h3>
                        <p className="fw-medium fs-5 mt-3">Our passion for baking is poured into every recipe, serving smiles on a plate everyday.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <img src="https://theobroma.in/cdn/shop/files/icon3.jpg?v=1615448111" alt="" />
                        <h3>HONESTLY PRICED</h3>
                        <p className="fw-medium fs-5 mt-3">We constantly strive to offer the best products at the right prices.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                        <img src="https://theobroma.in/cdn/shop/files/icon4.jpg?v=1615448111" alt="" />
                        <h3>COMMITTED TO QUALITY</h3>
                        <p className="fw-medium fs-5 mt-3">From our ingredients to our kitchen operations & guest services, we always prioritize quality.</p>
                    </div>
                </div>
            </div>

            <div>
                <div style={{
                    backgroundImage: `url('https://theobroma.in/cdn/shop/files/Likeourprod-theo-new1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: '',
                    height: '60vh',
                    width: '100%'
                }}>
                    <div className="pt-5">
                        <h1 className="mt-lg-5 pt-lg-5 text-center" style={{ color: '#c62744' }} >Introducing theobrome: making the future of food a reality today</h1>
                        <p className="fw-medium mt-lg-5 mt-sm-3 text-center px-5" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>thoebrome offers a unique and detailed vision of how food will evolve in the near future, through knowledge about the behaviors, attitudes and choices of more than <br /> 20,000 global and local consumers and experts in more than 50 countries. In this way, it seeks to offer a preview of the future by <br /> tracking the evolution of trends and revealing new ones in bakery, patisserie and chocolate. These findings are complemented  by a global trend <br /> spotting network, sensory research and feedback from researchers, taste houses and universities to offer fresh information on <br /> health, convenience, digital experience and more to drive innovation in the industry.</p>
                    </div>


                </div>
            </div>

            <div style={{ backgroundColor: '' }}>
                <div className="row my-5 d-flex justify-content-evenly">
                    <div className="col-lg-5 col-sm-12 m-5 home_page_container_img text-center">
                        <img src="https://www.tastetomorrow.com/content/dam/taste-tomorrow/images/Taste%20Tomorrow%20global%20local%20insights.png/jcr:content/renditions/cq5dam.web.800.800.webp" alt="" width='800px' />
                    </div>
                    <div className="col-lg-5 col-sm-12 m-5 p-5 text-center">
                        <h1 className="" style={{ color: '#c62744' }} >How we gather consumer insights</h1>
                        <p className="fw-medium fs-5 mt-3 ">
                            <ul className="text-start">

                                <li>Interviews  with over 17.000 consumers and industry experts in more than 50 countries</li>
                                <li>Discussions with more than 80 foodies in trendsetting cities</li>
                                <li>Utilizing Semantic AI technology to gather online consumer data</li>
                                <li>All collected data is supported by:
                                    <ul className="text-start" style={{ listStyle: 'none' }}>

                                        <li>Global trend-spotting network</li>
                                        <li>Comprehensive sensory research</li>
                                        <li>Unique partnerships with researchers, flavor houses, and universities.</li>
                                    </ul>
                                </li>
                            </ul>

                        </p>

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
export default About;

//happy and sad at the same time?