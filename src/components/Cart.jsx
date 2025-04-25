
import React from "react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Carrito de Compras 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="row g-4">
            {cart.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Cantidad: {item.quantity}</p>
                    <p className="card-text">Precio unitario: ${item.price}</p>
                    <p className="card-text">
                      Subtotal: ${item.quantity * item.price}
                    </p>
                    <button
                      className="btn btn-danger mt-auto"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <h4>Total: ${totalPrice}</h4>
            <button className="btn btn-warning mx-2" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
