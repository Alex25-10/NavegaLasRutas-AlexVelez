import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemlist";

const products = [
  { id: 1, name: "Laptop", category: "electronica" },
  { id: 2, name: "Camiseta", category: "ropa" },
  { id: 3, name: "Sofá", category: "hogar" },
];

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
      }, 1000);
    }).then(data => setFilteredProducts(data));
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;

  