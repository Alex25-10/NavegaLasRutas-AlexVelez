import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  const total = cantidadTotal();

  return (
    <NavLink to="/cart" style={{ textDecoration: "none" }}>
      <div style={{ color: "white", fontSize: "24px", display: "flex", alignItems: "center" }}>
        <FaShoppingCart />
        {total > 0 && (
          <span
            style={{
              marginLeft: "5px",
              backgroundColor: "red",
              borderRadius: "50%",
              padding: "2px 8px",
              fontSize: "14px",
              color: "white",
            }}
          >
            {total}
          </span>
        )}
      </div>
    </NavLink>
  );
};

export default CartWidget;
