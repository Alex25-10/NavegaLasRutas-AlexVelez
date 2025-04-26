import React from "react";
import { useCart } from "../Context/CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button className="btn btn-success" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
