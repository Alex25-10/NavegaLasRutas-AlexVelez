import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Item = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={item.imagen} className="card-img-top" alt={item.nombre} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">${item.precio}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/item/${item.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
          <button
            className="btn btn-success"
            onClick={() => agregarAlCarrito(item, 1)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;



