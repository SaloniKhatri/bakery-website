import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from "react-router-dom";
// import './Cart.css'; // Create Cart.css for styling


const products = [
    { id: 1, name: 'Choco Chip Brownie ', price: 'Rs.110', image: 'https://theobroma.in/cdn/shop/files/ChocoChipBrownie.jpg?v=1711183096' },
    { id: 2, name: 'Strawberry Cake', price: 30, image: 'https://images.unsplash.com/photo-1606121095982-275475152e35?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Blueberry Muffins', price: 15, image: 'https://plus.unsplash.com/premium_photo-1664647352327-b5529729a7c3?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Croissants', price: 10, image: 'https://images.unsplash.com/photo-1586040235989-4972859942a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Brownies', price: 12, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Cupcakes', price: 8, image: 'https://images.unsplash.com/photo-1562789308-55fd74849649?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

const CartPage = () => {
    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
    });
    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    function handleProducts(){
        navigate('/menu')
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        let newTotal = 0;
        cart.forEach(item => {
            newTotal += item.price * item.quantity;
        });
        setTotal(newTotal);
    }, [cart]);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(cart.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (productId) => {
        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity: Math.max(1, item.quantity - 1) } // Ensure quantity doesn't go below 1
                : item
        ));
    };


    return (
        <div className="cart-page">
            <header className="cart-header text-center mt-5">
                <h1><ShoppingCart className="mr-2 text-center" style={{ color: '#c62744' }} />Your Cart</h1>

            </header>

            {cart.length === 0 ? (
                <div className="empty-cart text-center">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <h3 className="item-name">{item.name}</h3>
                                <p className="item-price">${item.price}</p>
                                <div className="quantity-controls">
                                    <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>
                                    <span className="item-quantity">{item.quantity}</span>
                                    <Button variant="outline-secondary" size="sm" onClick={() => increaseQuantity(item.id)}>+</Button>
                                </div>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => removeFromCart(item.id)}
                                    className="remove-button"
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <p>Total: ${total.toFixed(2)}</p>
                        <Button variant="primary" className="checkout-button">Checkout</Button>
                    </div>
                </div>
            )}
            <div className='container'> <hr /></div>
            <div className="products-section">
                <h1 className="text-center mt-5" style={{ color: '#c62744' }}>Our Products</h1>
                {/* <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price}</p>
                            <Button
                                variant="primary"
                                onClick={() => addToCart(product)}
                                className="add-to-cart-button"
                            >
                                Add to Cart
                            </Button>
                        </div>
                    ))}
                </div> */}
                <div className="container py-5" style={{ backgroundColor: 'white' }}>
                    {/* <h1 className="text-center mb-5" style={{ color: '#c62744' }}>Cakes</h1> */}
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

                <div className="container py-5" style={{ backgroundColor: 'white' }}>
                    {/* <h1 className="text-center mb-5" style={{ color: '#c62744' }}>Desserts & Cupcakes</h1> */}
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

                <div className="text-center">
                    <button
                        type="button"
                        className=" btn btn-outline-danger mt-3 px-4 py-2 fw-medium"
                        onClick={handleProducts}
                    >
                        View More
                    </button>
                </div>


            </div>
        </div>
    );
};

export default CartPage;


