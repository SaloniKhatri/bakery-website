import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext'; // 👈 import hook

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '',
    address: '',
    contact: ''
  });

  const [submitted, setSubmitted] = useState(false);



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Cart Items:", cartItems);


    try {
      const res = await axios.post('http://localhost:2402/api/orders', {
        ...form,
        items: cartItems,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Order response:", res.data);

      setSubmitted(true);
      clearCart();
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  if (submitted) {
    return (
      <div className="container mt-5 text-center pt-5" style={{ color: '#c62744', fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
        <h2>🎉 Thank you for your purchase!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <h2  style={{color: '#c62744'}}>Checkout:</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <textarea name="address" className="form-control" value={form.address} onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label>Contact</label>
          <input type="text" name="contact" className="form-control" value={form.contact} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn w-100"
                  style={{
                    backgroundColor: 'rgb(217 216 236)', // soft rose
                    color: 'black',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                  }}>Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
