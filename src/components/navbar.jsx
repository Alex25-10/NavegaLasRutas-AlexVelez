import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">
        Mi Tienda
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/electro">
              Electro
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/moda">
              Moda
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/categoria/deportes">
              Deportes
            </NavLink>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;



