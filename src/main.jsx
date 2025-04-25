import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from './Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


<React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
</React.StrictMode>


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

