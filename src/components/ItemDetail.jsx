import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCount from "./itemcount";

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);

  const handleAdd = (cantidad) => {
    const itemNormalizado = {
      id: item.id,
      nombre: item.Nombre,
      precio: item.Precio,
      imagen: item.Imagen,
    };

    agregarAlCarrito(itemNormalizado, cantidad);
    setAgregado(true);
  };

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ width: "24rem" }}>
        <img src={item.Imagen} className="card-img-top" alt={item.Nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.Nombre}</h5>
          <p className="card-text">{item.Descripcion}</p>
          <p className="fw-bold">${item.Precio}</p>

          {!agregado ? (
            <ItemCount stock={item.Stock} initial={1} onAdd={handleAdd} />
          ) : (
            <Link to="/cart" className="btn btn-success mt-3">
              Ir al carrito
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;


