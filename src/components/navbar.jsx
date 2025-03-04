import CartWidget from "./cartwidget";

const NavBar = () => {
  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: "15px 30px", 
      background: "#333", 
      color: "#fff" 
    }}>
      <h2 style={{ margin: 0 }}>Mi Tienda</h2>
      <ul style={{ 
        display: "flex", 
        listStyle: "none", 
        gap: "20px", 
        margin: 0, 
        padding: 0 
      }}>
        <li><a href="#" style={navLinkStyle}>Inicio</a></li>
        <li><a href="#" style={navLinkStyle}>Productos</a></li>
        <li><a href="#" style={navLinkStyle}>Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
};

export default NavBar;

