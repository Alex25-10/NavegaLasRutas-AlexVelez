import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;

