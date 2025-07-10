import { createContext, useContext, useState } from "react";
// import { useCart } from '../context/CartContext';

const CartContext = createContext();
// ✅ Hook 
export const useCart = () => {
  return useContext(CartContext);
};



export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log('Adding product:', product);
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const increaseQty = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
        : item
    ));
  };


  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{
      cartItems, setCartItems, addToCart, removeFromCart, clearCart, increaseQty,
      decreaseQty
    }}>
      {children}
    </CartContext.Provider>
  );
};
