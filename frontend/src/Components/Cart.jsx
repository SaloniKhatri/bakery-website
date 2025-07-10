import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
    <div style={{backgroundColor: 'rgb(246 241 249)' }}>
      <div className="container mt-5 pt-5 pb-2" >
        <h2 className="text-center mb-4" style={{color: '#c62744'}}>🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <>
            <div className="row justify-content-center">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="col-md-6 mb-4 d-flex align-items-center"
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    padding: '15px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    background: '#fff',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '80px', height: '80px', borderRadius: '8px', marginRight: '20px', objectFit: 'cover' }}
                  />
                  <div className="flex-grow-1">
                    <h5 style={{ marginBottom: '8px' }}>{item.name}</h5>

                    <div className="d-flex align-items-center mb-2">
                      <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={() => decreaseQty(item.id)}
                        disabled={item.qty <= 1}
                      >−</button>

                      <span className="mx-2">{item.qty}</span>

                      <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={() => increaseQty(item.id)}
                      >+</button>
                    </div>

                    <p className="mb-0 text-muted">₹{item.price} x {item.qty} = ₹{item.price * item.qty}</p>

                  </div>

                  <button
                     className="btn"
                  style={{
                    backgroundColor: '#f8d7da', // soft rose
                    color: '#c62744',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <h4 className="text-end mt-4">Total: ₹{total}</h4>
            <div className='d-flex justify-content-between'>
              <div className="text-center mt-3">
                <button className="btn"
                  style={{
                    backgroundColor: 'rgb(253 211 77)',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    width: '144px'
                  }} onClick={clearCart}>Clear Cart</button>
              </div>
              <div className='text-center'>

                <Link to="/checkout" className="btn mt-3 ms-5 "    style={{
                    backgroundColor: '#afcfff',
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  
                  }} >
                  Proceed to Checkout
                </Link>

              </div>




            </div>
           
          </>
        )}
      </div>

    </div>
      
      {/* <hr className='m-5 px-5' /> */}

      {/* <h1 className='text-center fw-bold'>Explore our Menu:</h1> */}
      <Menu />
    </>

  );
};

export default CartPage;
