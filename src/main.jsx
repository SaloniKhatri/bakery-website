
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode>
    
  //   <CartProvider>
  //     <HashRouter>
  //       <App />
  //     </HashRouter>
  //   </CartProvider>
  // </React.StrictMode>
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> 
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
