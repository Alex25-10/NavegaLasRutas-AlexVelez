import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext"; // 👈 Importamos el hook

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // 👈 Asegúrate que tu conexión esté bien importada

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // 👈 Usamos addToCart del context

  useEffect(() => {
    const getProduct = async () => {
      const productRef = doc(collection(db, "productos"), itemId);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        setProduct({ id: productSnap.id, ...productSnap.data() });
      } else {
        console.error("Producto no encontrado");
      }
    };

    getProduct();
  }, [itemId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} agregado al carrito`);
    }
  };

  return (
    <div className="container mt-5">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

