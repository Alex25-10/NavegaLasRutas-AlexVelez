import React, { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const aumentar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const agregar = () => {
    if (stock > 0) onAdd(cantidad);
  };

  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <button className="btn btn-outline-secondary mx-2" onClick={disminuir}>-</button>
        <span className="fw-bold">{cantidad}</span>
        <button className="btn btn-outline-secondary mx-2" onClick={aumentar}>+</button>
      </div>
      <button
        className="btn btn-primary"
        onClick={agregar}
        disabled={stock === 0}
      >
        Agregar {cantidad} al carrito
      </button>
      {stock === 0 && (
        <p className="text-danger mt-2">Sin stock disponible</p>
      )}
    </div>
  );
};

export default ItemCount;

