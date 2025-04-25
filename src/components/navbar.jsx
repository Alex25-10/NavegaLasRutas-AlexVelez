import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Mi Tienda</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/productos" className="nav-link">Productos</NavLink>
            </li>
          </ul>
          {/* Carrito al lado derecho */}
          <NavLink to="/cart" className="nav-link">
            <CartWidget />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



