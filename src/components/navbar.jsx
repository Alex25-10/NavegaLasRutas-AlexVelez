import { Link, NavLink } from "react-router-dom";
import CartWidget from "./cartwidget"; 
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MiTienda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categoria/ropa">Ropa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categoria/electronica">Electrónica</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categoria/hogar">Hogar</NavLink>
            </li>
          </ul>
          <CartWidget /> {/* Aquí reemplazás el Link por el nuevo componente */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




