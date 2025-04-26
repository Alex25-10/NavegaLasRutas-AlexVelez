import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Item from "../components/item";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "productos");
        const snapshot = await getDocs(productsRef);

        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Nuestros Productos</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
