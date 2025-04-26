
import React from "react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="container mt-5">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio unitario: ${item.price}</p>
                </div>
                <button 
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mb-3">Total: ${totalPrice}</h3>
          <button className="btn btn-warning" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

