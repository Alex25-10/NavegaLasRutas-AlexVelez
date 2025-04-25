import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


