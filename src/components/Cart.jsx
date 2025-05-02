
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    carrito,
    vaciarCarrito,
    totalCarrito,
    eliminarProducto,
    incrementarCantidad,
    decrementarCantidad,
  } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Tu carrito está vacío 😔</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Tu Carrito</h2>

      {carrito.map((prod) => (
        <div key={prod.id} className="card mb-3">
          <div className="row g-0 align-items-center">
            <div className="col-md-2 text-center">
              <img
                src={prod.imagen}
                alt={prod.nombre}
                className="img-fluid p-2"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>

                <div className="d-flex align-items-center mb-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decrementarCantidad(prod.id)}
                  >
                    ➖
                  </button>

                  <span className="mx-3">{prod.cantidad}</span>

                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => incrementarCantidad(prod.id)}
                  >
                    ➕
                  </button>
                </div>

                <p className="card-text">Precio unitario: ${prod.precio}</p>
                <p className="card-text fw-bold">
                  Subtotal: ${prod.precio * prod.cantidad}
                </p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <button
                className="btn btn-outline-danger m-2"
                onClick={() => eliminarProducto(prod.id)}
              >
                Eliminar 🗑️
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="text-end">
        <h3>Total: ${totalCarrito()}</h3>
        <button className="btn btn-danger m-2" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success m-2">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;





