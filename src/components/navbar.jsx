import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "15px 30px", background: "#333", color: "#fff" }}>
      <h2>Mi Tienda</h2>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
        <li><NavLink to="/" style={navLinkStyle}>Inicio</NavLink></li>
        <li><NavLink to="/category/electronica" style={navLinkStyle}>Electrónica</NavLink></li>
        <li><NavLink to="/category/ropa" style={navLinkStyle}>Ropa</NavLink></li>
        <li><NavLink to="/category/hogar" style={navLinkStyle}>Hogar</NavLink></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const navLinkStyle = { color: "#fff", textDecoration: "none", fontSize: "16px", fontWeight: "bold" };

export default NavBar;


