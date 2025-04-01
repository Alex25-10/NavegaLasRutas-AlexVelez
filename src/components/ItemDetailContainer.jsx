import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", category: "electronica", description: "Laptop gamer" },
  { id: 2, name: "Camiseta", category: "ropa", description: "Camiseta de algodón" },
  { id: 3, name: "Sofá", category: "hogar", description: "Sofá cómodo" },
];

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === parseInt(itemId)));
      }, 1000);
    }).then(data => setProduct(data));
  }, [itemId]);

  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
